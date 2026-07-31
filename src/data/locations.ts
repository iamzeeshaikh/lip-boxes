import type { Location, LocationGroup } from './content-types';

import { california, washington, arizona, colorado } from './locations/states-west';
import { texas, florida, georgia, northCarolina, tennessee } from './locations/states-south';
import {
  newYork,
  pennsylvania,
  newJersey,
  massachusetts,
  maryland,
  virginia,
} from './locations/states-northeast';
import { illinois, ohio, michigan, indiana, missouri } from './locations/states-midwest';

import { newYorkCity, losAngeles, chicago, houston, phoenix } from './locations/cities-a';
import { philadelphia, sanAntonio, sanDiego, dallas, austin } from './locations/cities-b';
import { jacksonville, fortWorth, columbus, charlotte, indianapolis } from './locations/cities-c';
import { seattle, denver, washingtonDc, nashville, boston } from './locations/cities-d';

export const states: Location[] = [
  california,
  texas,
  florida,
  newYork,
  pennsylvania,
  illinois,
  ohio,
  georgia,
  northCarolina,
  michigan,
  newJersey,
  virginia,
  washington,
  arizona,
  massachusetts,
  tennessee,
  indiana,
  missouri,
  maryland,
  colorado,
];

export const cities: Location[] = [
  newYorkCity,
  losAngeles,
  chicago,
  houston,
  phoenix,
  philadelphia,
  sanAntonio,
  sanDiego,
  dallas,
  austin,
  jacksonville,
  fortWorth,
  columbus,
  charlotte,
  indianapolis,
  seattle,
  denver,
  washingtonDc,
  nashville,
  boston,
];

export const locations: Location[] = [...states, ...cities];

export const indexableStates = states.filter((l) => l.indexable !== false);
export const indexableCities = cities.filter((l) => l.indexable !== false);
export const indexableLocations = [...indexableStates, ...indexableCities];

export function getState(slug: string): Location | undefined {
  return states.find((l) => l.slug === slug);
}

export function getCity(slug: string): Location | undefined {
  return cities.find((l) => l.slug === slug);
}

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

/** The city pages that sit inside a given state page. */
export function citiesInState(stateSlug: string): Location[] {
  return indexableCities.filter((c) => c.parentState === stateSlug);
}

/** Sibling cities in the same state, excluding the current one. */
export function siblingCities(city: Location): Location[] {
  if (!city.parentState) return [];
  return citiesInState(city.parentState).filter((c) => c.slug !== city.slug);
}

/**
 * Regional grouping for the directory pages. Presentational only — this
 * creates no URLs of its own, so there is no thin `/locations/west/` page.
 */
export const stateRegions: LocationGroup[] = [
  { region: 'West', states: ['california', 'washington', 'arizona', 'colorado'] },
  { region: 'South', states: ['texas', 'florida', 'georgia', 'north-carolina', 'tennessee', 'virginia', 'maryland'] },
  { region: 'Northeast', states: ['new-york', 'pennsylvania', 'new-jersey', 'massachusetts'] },
  { region: 'Midwest', states: ['illinois', 'ohio', 'michigan', 'indiana', 'missouri'] },
];

export function statesInRegion(region: string): Location[] {
  const group = stateRegions.find((g) => g.region === region);
  if (!group) return [];
  return group.states
    .map((slug) => getState(slug))
    .filter((l): l is Location => Boolean(l) && l!.indexable !== false);
}

export const locationUrl = (l: Location): string =>
  l.type === 'state' ? `/locations/states/${l.slug}/` : `/locations/cities/${l.slug}/`;
