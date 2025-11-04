'use client';
import { useEffect, useMemo, useState } from 'react';
import { useFavorites } from '@/lib/store';
import { getAllFlowers } from '@/lib/flowers';
import FlowerCard from '@/components/FlowerCard';

export default function FavoritesPage() {
  const favs = useFavorites((s) => s.favorites);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Always call hooks; gate the data by `mounted`
  const all = useMemo(() => {
    if (!mounted) return [];
    return getAllFlowers().filter((f) => favs.has(f.id));
  }, [mounted, favs]);

  return (
    <main className="space-y-6">
      <h1 className="text-2xl font-semibold">Favorites</h1>
      {!mounted ? (
        <p className="text-neutral-500">Loading…</p>
      ) : all.length ? (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {all.map((f) => (
            <FlowerCard f={f} key={f.id} />
          ))}
        </div>
      ) : (
        <p className="text-neutral-500">No favorites yet.</p>
      )}
    </main>
  );
}
