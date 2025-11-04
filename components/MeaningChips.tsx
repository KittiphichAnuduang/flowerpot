
import type { Flower } from '@/lib/types';

export default function MeaningChips({ f }: { f: Flower }) {
  const m = f.language?.meanings ?? [];
  if (!m.length) return null;
  return (
    <div className="flex flex-wrap gap-2">
      {m.map(x => <span key={x} className="rounded-full border px-2 py-0.5 text-xs">{x}</span>)}
    </div>
  );
}
