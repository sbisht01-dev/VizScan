import type { AppConfig } from './types';
import { vizscan } from './vizscan';
import { restrix } from './restrix';
import { datavue } from './datavue';
import { safeeye } from './safeeye';
import { ems } from './ems';

/** Add new apps here; the first is the default. The switcher lists them in this order. */
export const APPS: AppConfig[] = [vizscan, restrix, datavue, safeeye, ems];

const KEY = 'landing-app';

export function findApp(slug: string | null | undefined) {
  return APPS.find((a) => a.slug === slug);
}

/** ?app=<slug> wins, then the last choice made in the switcher, then the first app. */
export function initialApp(): AppConfig {
  try {
    const fromUrl = findApp(new URLSearchParams(window.location.search).get('app'));
    if (fromUrl) return fromUrl;
    const saved = findApp(window.localStorage.getItem(KEY));
    if (saved) return saved;
  } catch {
    /* storage or URL unavailable */
  }
  return APPS[0];
}

export function rememberApp(slug: string) {
  try {
    window.localStorage.setItem(KEY, slug);
    const url = new URL(window.location.href);
    url.searchParams.set('app', slug);
    url.searchParams.delete('install');
    window.history.replaceState(null, '', url);
  } catch {
    /* ignore */
  }
}

export * from './types';
