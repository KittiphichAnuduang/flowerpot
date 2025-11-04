import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { getAllFlowers } from '@/lib/flowers';
import FlowerDetail from '@/components/FlowerDetail';

export const dynamic = 'error';
export const dynamicParams = false;
export const revalidate = false;

export function generateStaticParams() {
  const flowers = getAllFlowers();
  return flowers.map(f => ({ slug: f.id }));
}

export default function FlowerPage({ params }: { params: { slug: string } }) {
  const flower = getAllFlowers().find(f => f.id === params.slug);
  if (!flower) return notFound();

  return (
    <Suspense fallback={
      <main className="p-6">
        <h1 className="text-2xl font-semibold">Loading…</h1>
      </main>
    }>
      <FlowerDetail f={flower} />
    </Suspense>
  );
}
