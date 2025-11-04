
'use client';
type Props = { value: string; onChange: (v: string) => void; placeholder?: string };
export default function SearchBar({ value, onChange, placeholder = 'Search flower name…' }: Props) {
  return (
    <div className="w-full max-w-xl">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border px-4 py-2 outline-none focus:ring"
        type="search"
        placeholder={placeholder}
        aria-label="Search flower by name"
      />
      <p className="mt-1 text-xs text-neutral-500">Search matches common or Latin names. Sorting remains tag-based.</p>
    </div>
  );
}
