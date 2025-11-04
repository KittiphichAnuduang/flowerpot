
import flowers from '@/data/flowers.json' assert { type: 'json' };
import type { Flower } from './types';
import { TAG_WEIGHTS } from './tags';

export function getAllFlowers(): Flower[] {
  return flowers as unknown as Flower[];
}

export function getById(id: string): Flower | undefined {
  return getAllFlowers().find(f => f.id === id);
}

function nameMatch(f: Flower, q: string) {
  if (!q) return true;
  const s = q.trim().toLowerCase();
  return f.commonName.toLowerCase().includes(s) || (f.latinName?.toLowerCase().includes(s) ?? false);
}

function scoreFlower(f: Flower, selected: string[]) {
  const matched = f.tags.filter(t => selected.includes(t));
  const weight = matched.reduce((s, t) => s + (TAG_WEIGHTS[t] ?? 0), 0);
  return { matches: matched.length, weight };
}
export { scoreFlower }; // <-- export if you want to show counts in UI

export function filterAndSort(
  flowers: Flower[],
  query: string,
  selected: string[],
  opts?: { hideZero?: boolean }
) {
  const hideZero = opts?.hideZero ?? selected.length > 0;

  return flowers
    .filter(f => nameMatch(f, query))
    .filter(f => {
      if (!hideZero) return true;
      // AND: must include ALL selected tags
      return selected.every(t => f.tags.includes(t));
    })
    .sort((a, b) => {
      // Weight still helps order results that match all tags
      const wa = a.tags.reduce((s, t) => s + (selected.includes(t) ? (TAG_WEIGHTS[t] ?? 0) : 0), 0);
      const wb = b.tags.reduce((s, t) => s + (selected.includes(t) ? (TAG_WEIGHTS[t] ?? 0) : 0), 0);
      if (wb !== wa) return wb - wa;
      return a.commonName.localeCompare(b.commonName);
    });
}

export function groupSources(list: Flower[]) {
  const map: Record<string, string[]> = {};
  for (const f of list) {
    for (const s of (f.metadata?.sources ?? [])) {
      const name = s.name || 'Unknown';
      map[name] ??= [];
      map[name].push(f.id);
    }
  }
  return map;
}

// Daily flower (Asia/Bangkok)
export function dailyFlower(flowers: Flower[]): Flower {
  const tzOffset = 7 * 60; // minutes
  const now = new Date();
  const epochDays = Math.floor((now.getTime() + tzOffset * 60000) / 86400000);
  let uuid = '';
  if (typeof window !== 'undefined') {
    uuid = localStorage.getItem('uuid') || cryptoRandom();
    localStorage.setItem('uuid', uuid);
  }
  const seed = hash(String(epochDays) + ':' + uuid);
  const idx = Math.abs(seed) % flowers.length;
  return flowers[idx];
}

function cryptoRandom() {
  try {
    const a = new Uint8Array(16);
    crypto.getRandomValues(a);
    return Array.from(a).map(x => x.toString(16).padStart(2,'0')).join('');
  } catch {
    return Math.random().toString(36).slice(2);
  }
}

function hash(s: string) {
  let h = 2166136261;
  for (let i=0;i<s.length;i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h|0;
}
