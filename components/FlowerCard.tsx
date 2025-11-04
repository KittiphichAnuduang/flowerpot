import type { Flower } from '@/lib/types';

export default function FlowerCard({ f, href }: { f: Flower; href?: string }) {
  const to = href ?? `/encyclopedia/${f.id}`;
  return (
    <a href={to} className="card overflow-hidden hover:shadow">
      {f.images?.[0]?.src && <img src={f.images[0].src} alt={f.images[0].alt} className="w-full h-40 object-cover" />}
      <div className="p-3">
        <div className="font-semibold">{f.commonName}</div>
        <div className="text-xs italic text-neutral-500">{f.latinName}</div>
      </div>
    </a>
  );
}
