'use client';
import { useMemo, useState } from 'react';
import SearchBar from '@/components/SearchBar';
import TagBar from '@/components/TagBar';
import FlowerCard from '@/components/FlowerCard';
import { getAllFlowers, filterAndSort } from '@/lib/flowers';

export default function CarePage() {
  const all = getAllFlowers();
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<string[]>([]);

  const toggleTag = (id: string) =>
    setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));

  const results = useMemo(
    () => filterAndSort(all, query, selected),
    [all, query, selected]
  );

  return (
    <main className="space-y-6">
      <h1 className="text-2xl font-semibold">How to Care</h1>
      <p className="text-sm text-neutral-500">Select tags to filter by care needs (sunlight, humidity, difficulty…)</p>

      <SearchBar value={query} onChange={setQuery} />
      <TagBar selected={selected} onToggle={toggleTag} />
      
      {selected.length > 0 && (
        <button
          onClick={() => setSelected([])}
          className="rounded-full border border-neutral-400 px-3 py-1 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
        >
          ✕ Clear tags
        </button>
      )}

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {results.map((f) => (
          <FlowerCard f={f} key={f.id} href={`/encyclopedia/${f.id}?tab=care`} />
        ))}
      </div>
      <p className="text-sm text-neutral-500">{results.length} result(s)</p>
    </main>
  );
}
