
'use client';
import { useEffect } from 'react';
import { useSettings } from '@/lib/store';

export default function SettingsPage() {
  const theme = useSettings(s => s.theme);
  const font = useSettings(s => s.fontSize);
  const setTheme = useSettings(s => s.setTheme);
  const setFont = useSettings(s => s.setFont);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    const sizeMap = { sm: '14px', md: '16px', lg: '18px', xl: '20px' } as const;
    document.documentElement.style.setProperty('--base-font', sizeMap[font]);
  }, [theme, font]);

  return (
    <main className="space-y-6">
      <h1 className="text-2xl font-semibold">Settings</h1>

      <section className="card p-4">
        <h2 className="font-medium">Theme</h2>
        <div className="mt-2 flex gap-2">
          {(['light','dark'] as const).map(t => (
            <button key={t} onClick={()=>setTheme(t)} className={`rounded-md border px-3 py-1 ${theme===t?'bg-neutral-900 text-white dark:bg-white dark:text-black':''}`}>{t}</button>
          ))}
        </div>
      </section>

      <section className="card p-4">
        <h2 className="font-medium">Font Size</h2>
        <div className="mt-2 flex gap-2">
          {(['sm','md','lg','xl'] as const).map(f => (
            <button key={f} onClick={()=>setFont(f)} className={`rounded-md border px-3 py-1 ${font===f?'bg-neutral-900 text-white dark:bg-white dark:text-black':''}`}>{({sm:'Small',md:'Medium',lg:'Big',xl:'Big Big'} as any)[f]}</button>
          ))}
        </div>
      </section>
    </main>
  );
}
