export default function NotFound() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold">Flower not found</h1>
      <p className="text-sm text-neutral-500">Try browsing the encyclopedia list.</p>
      <a className="underline" href="/encyclopedia">← Back to list</a>
    </main>
  );
}
