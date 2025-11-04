
'use client';
import { TAGS } from '@/lib/tags';
import { useMemo } from 'react';
import clsx from 'clsx';

export default function TagBar({ selected, onToggle }: { selected: string[]; onToggle: (id: string) => void }) {
  const groups = useMemo(() => {
    const map: Record<string, typeof TAGS> = {};
    for (const t of TAGS) {
      (map[t.category] ??= []).push(t);
    }
    return map;
  }, []);
  return (
    <div className="flex flex-col gap-3">
      {Object.entries(groups).map(([cat, list]) => (
        <div key={cat} className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-medium capitalize w-28">{cat}</span>
          {list.map(t => {
            const active = selected.includes(t.id);
            return (
              <button
                key={t.id}
                onClick={() => onToggle(t.id)}
                className={clsx('rounded-full border px-3 py-1 text-sm', active ? 'bg-neutral-900 text-white dark:bg-white dark:text-black' : 'bg-transparent')}
              >
                {t.label}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}
