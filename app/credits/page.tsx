import { getAllFlowers, groupSources } from '@/lib/flowers';

export default function CreditsPage() {
  const flowers = getAllFlowers();
  const grouped = groupSources(flowers);

  return (
    <main className="space-y-6">
      <h1 className="text-2xl font-semibold">Credits</h1>
      <section>
        <h2 className="text-lg font-semibold">Sources & Attributions</h2>
        <p className="mt-1 text-sm text-neutral-500">Information compiled from reputable horticultural resources.</p>
        <ul className="mt-4 space-y-4">
          {Object.entries(grouped).map(([source, ids]) => (
            <li key={source} className="card p-4">
              <div className="font-medium">{source}</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {ids.map(id => (
                  <a key={id} href={`/encyclopedia/${id}`} className="rounded-full border px-3 py-1 text-sm hover:shadow">{id}</a>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
