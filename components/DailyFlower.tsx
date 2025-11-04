
'use client';
import { dailyFlower, getAllFlowers } from '@/lib/flowers';
import { useEffect, useState } from 'react';

export default function DailyFlower() {
  const [id, setId] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null);
  const [img, setImg] = useState<string | null>(null);
  const [meaning, setMeaning] = useState<string | null>(null);

  useEffect(() => {
    const list = getAllFlowers();
    const f = dailyFlower(list);
    setId(f.id);
    setName(f.commonName);
    setImg(f.images?.[0]?.src ?? null);
    setMeaning(f.language?.meanings?.slice(0,2).join(', ') ?? null);
  }, []);

  const today = new Date();
  const pad = (n:number) => String(n).padStart(2,'0');
  const dateStr = `${today.getFullYear()}-${pad(today.getMonth()+1)}-${pad(today.getDate())}`;

  if (!id) return null;
  return (
    <a href={`/encyclopedia/${id}`} className="block card overflow-hidden">
      {img && <img src={img} alt={name ?? ''} className="w-full h-48 object-cover" />}
      <div className="p-4">
        <div className="text-sm text-neutral-500">{dateStr}</div>
        <div className="mt-1 text-lg font-semibold">{name}</div>
        {meaning && <div className="text-sm text-neutral-600 dark:text-neutral-300">{meaning}</div>}
      </div>
    </a>
  );
}
