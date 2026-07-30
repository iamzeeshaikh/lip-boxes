/**
 * Pushes the SMTP configuration from local `.env` into the linked Vercel
 * project's Production and Preview environments.
 *
 *   node scripts/push-env-to-vercel.mjs [--overwrite]
 *
 * Values are piped to the Vercel CLI over stdin and are never printed, logged
 * or passed as command arguments (which would expose them in the process list).
 * Only variable names and a pass/fail result are shown.
 */
import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';

const ROOT = process.cwd();
const OVERWRITE = process.argv.includes('--overwrite');
const TARGETS = ['production', 'preview'];

const linkPath = path.join(ROOT, '.vercel/project.json');
if (!fs.existsSync(linkPath)) {
  console.error('Not linked to a Vercel project. Run `npx vercel link` first.');
  process.exit(1);
}
const link = JSON.parse(fs.readFileSync(linkPath, 'utf8'));
console.log(`Linked project: ${link.projectId.slice(0, 14)}…\n`);

const envPath = path.join(ROOT, '.env');
if (!fs.existsSync(envPath)) {
  console.error('No .env file found.');
  process.exit(1);
}

/** Parses KEY=VALUE lines, skipping comments and empty values. */
const vars = [];
for (const line of fs.readFileSync(envPath, 'utf8').split('\n')) {
  const match = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
  if (!match) continue;
  const value = match[2].replace(/^["']|["']$/g, '').trim();
  if (!value) {
    console.log(`  skipping ${match[1]} — empty in .env`);
    continue;
  }
  vars.push({ key: match[1], value });
}

if (vars.length === 0) {
  console.error('No non-empty variables found in .env.');
  process.exit(1);
}

console.log(`Pushing ${vars.length} variables: ${vars.map((v) => v.key).join(', ')}\n`);

function run(args, stdin) {
  return new Promise((resolve) => {
    const child = spawn('npx', ['vercel', ...args], {
      stdio: ['pipe', 'pipe', 'pipe'],
      cwd: ROOT,
    });
    let stderr = '';
    child.stdout.on('data', () => {});
    child.stderr.on('data', (d) => {
      stderr += d.toString();
    });
    child.on('close', (code) => resolve({ code, stderr }));
    if (stdin !== undefined) child.stdin.write(stdin);
    child.stdin.end();
  });
}

/** Removes the password from any CLI output before it is shown. */
function redact(text) {
  let out = text;
  for (const v of vars) out = out.split(v.value).join('[redacted]');
  return out.replace(/\s+/g, ' ').trim().slice(0, 160);
}

let added = 0;
let failed = 0;

for (const { key, value } of vars) {
  for (const target of TARGETS) {
    if (OVERWRITE) {
      // Remove first so the new value replaces the old one.
      await run(['env', 'rm', key, target, '--yes']);
    }
    const result = await run(['env', 'add', key, target], value);
    if (result.code === 0) {
      console.log(`  ok      ${key} -> ${target}`);
      added += 1;
    } else if (/already exists/i.test(result.stderr)) {
      console.log(`  exists  ${key} -> ${target} (re-run with --overwrite to replace)`);
    } else {
      console.log(`  FAILED  ${key} -> ${target}: ${redact(result.stderr)}`);
      failed += 1;
    }
  }
}

console.log(`\n${added} set, ${failed} failed.`);
if (failed === 0) {
  console.log('Redeploy for the new values to take effect: npx vercel --prod');
}
process.exit(failed ? 1 : 0);
