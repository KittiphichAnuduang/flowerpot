
'use client';
import type { Flower } from '@/lib/types';
import FavoriteButton from './FavoriteButton';
import MeaningChips from './MeaningChips';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function FlowerDetail({ f }: { f: Flower }) {
  const tabs = ['overview','care','language'] as const;
  const params = useSearchParams();
  const initial = (params.get('tab') as typeof tabs[number]) ?? 'overview';
  const [tab, setTab] = useState<(typeof tabs)[number]>(initial);
  // keep in sync if URL changes (e.g., back/forward)
  useEffect(() => {
    const t = (params.get('tab') as typeof tabs[number]) ?? 'overview';
    setTab(t);
  }, [params]);


  return (
    <div className="space-y-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">{f.commonName}</h1>
          {f.latinName && <div className="text-sm italic text-neutral-500">{f.latinName}</div>}
          {f.origin && <div className="text-sm text-neutral-600 dark:text-neutral-300">Origin: {f.origin}</div>}
        </div>
        <FavoriteButton id={f.id} />
      </div>

      {f.images?.[0]?.src && <img src={f.images[0].src} alt={f.images[0].alt} className="w-full h-60 object-cover rounded-lg" />}

      <div className="flex gap-2">
        {tabs.map(t => (
          <button key={t} onClick={() => setTab(t)} className={`rounded-md border px-3 py-1 ${tab===t?'bg-neutral-900 text-white dark:bg-white dark:text-black':''}`}>
            {t[0].toUpperCase()+t.slice(1)}
          </button>
        ))}
      </div>

      {tab === 'overview' && (
        <section className="space-y-2">
          {f.description && <p className="leading-relaxed">{f.description}</p>}
          {f.environment && (
            <div className="text-sm">
              <div><b>Sunlight:</b> {f.environment.sunlight}</div>
              {f.environment.temperatureC && <div><b>Temperature:</b> {f.environment.temperatureC.min ?? ''}–{f.environment.temperatureC.max ?? ''} °C</div>}
              {f.environment.soil?.type && <div><b>Soil:</b> {f.environment.soil.type}</div>}
            </div>
          )}
        </section>
      )}

      {tab === 'care' && (
        <section className="space-y-3">
          {f.care?.stages?.map((s, i) => (
            <div key={i} className="card p-3">
              <div className="font-medium capitalize">{s.stage} {s.durationHint ? `• ${s.durationHint}` : ''}</div>
              <ul className="list-disc list-inside text-sm mt-1">
                {s.actions.map((a, j) => <li key={j}>{a}</li>)}
              </ul>
              {s.warnings?.length ? <div className="mt-1 text-xs text-red-600">⚠ {s.warnings.join(' • ')}</div> : null}
            </div>
          ))}
          {f.care?.watering && <div className="text-sm"><b>Watering:</b> {f.care.watering.frequency} {f.care.watering.amount ? `• ${f.care.watering.amount}`: ''}</div>}
          {f.care?.nutrition && <div className="text-sm"><b>Nutrition:</b> {f.care.nutrition.type ?? ''} {f.care.nutrition.frequency ? `• ${f.care.nutrition.frequency}`: ''}</div>}
        </section>
      )}

      {tab === 'language' && (
        <section className="space-y-2">
          <MeaningChips f={f} />
          {f.language?.spiritualNotes && <p className="text-sm">{f.language.spiritualNotes}</p>}
          {f.language?.colorMeanings?.length ? (
            <div className="text-sm">
              <b>By Color:</b>
              <ul className="list-disc list-inside">
                {f.language.colorMeanings.map((c,i)=> <li key={i}><b>{c.color}:</b> {c.meanings.join(', ')}</li>)}
              </ul>
            </div>
          ) : null}
        </section>
      )}
    </div>
  );
}
