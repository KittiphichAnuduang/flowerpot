'use client';
import { useEffect, useState } from 'react';
import { useFavorites } from '@/lib/store';

export default function FavoriteButton({ id }: { id: string }) {
  const favSet = useFavorites(s => s.favorites);
  const toggle = useFavorites(s => s.toggle);

  // Avoid SSR/CSR mismatch: render a stable label until mounted
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isFav = mounted ? favSet.has(id) : false;

  return (
    <button
      onClick={() => toggle(id)}
      aria-pressed={isFav}
      className="rounded-md border px-3 py-1"
      suppressHydrationWarning
    >
      {isFav ? '⭐ Favorited' : '☆ Favorite'}
    </button>
  );
}
