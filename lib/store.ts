
'use client';
import { create } from 'zustand';

type Settings = {
  theme: 'light'|'dark';
  fontSize: 'sm'|'md'|'lg'|'xl';
  setTheme: (t: Settings['theme']) => void;
  setFont: (f: Settings['fontSize']) => void;
};
type Favorites = {
  favorites: Set<string>;
  toggle: (id: string) => void;
};

function persist<T>(key: string, init: T, onRehydrate?: (v: T) => void): T {
  if (typeof window === 'undefined') return init;
  try {
    const raw = localStorage.getItem(key);
    if (raw) {
      const parsed = JSON.parse(raw);
      onRehydrate?.(parsed);
      return parsed;
    }
  } catch {}
  return init;
}

export const useSettings = create<Settings>((set, get) => {
  const init = persist('settings', { theme: 'light', fontSize: 'md' } as any);
  return {
    theme: init.theme,
    fontSize: init.fontSize,
    setTheme: (t) => {
      set({ theme: t });
      if (typeof window !== 'undefined') localStorage.setItem('settings', JSON.stringify({ ...get(), theme: t }));
      document.documentElement.classList.toggle('dark', t === 'dark');
    },
    setFont: (f) => {
      set({ fontSize: f });
      if (typeof window !== 'undefined') localStorage.setItem('settings', JSON.stringify({ ...get(), fontSize: f }));
      const sizeMap = { sm: '14px', md: '16px', lg: '18px', xl: '20px' } as const;
      document.documentElement.style.setProperty('--base-font', sizeMap[f]);
    }
  }
});

export const useFavorites = create<Favorites>((set, get) => {
  const init = persist('favorites', { favorites: [] as string[] });
  const setPersist = () => {
    if (typeof window !== 'undefined') localStorage.setItem('favorites', JSON.stringify({ favorites: Array.from(get().favorites) }));
  };
  return {
    favorites: new Set(init.favorites),
    toggle: (id: string) => {
      const s = new Set(get().favorites);
      if (s.has(id)) s.delete(id); else s.add(id);
      set({ favorites: s });
      setPersist();
    }
  }
});
