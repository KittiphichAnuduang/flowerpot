export default function MenuGrid() {
  const items = [
    { href: "/encyclopedia", label: "Flower Encyclopedia", icon: "📚" },
    { href: "/care",         label: "How to Care",         icon: "🪴" },
    { href: "/language",     label: "Language of Flowers", icon: "💌" },
    { href: "/favorites",    label: "Favorites",           icon: "⭐" },
    { href: "/settings",     label: "Settings",            icon: "⚙️" },
    { href: "/credits",      label: "Credits",             icon: "🏷️" },
  ];
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:grid-rows-2">
      {items.map((it) => (
        <a key={it.href} href={it.href} className="card p-4 hover:shadow">
          <div className="text-2xl">{it.icon}</div>
          <div className="mt-2 font-medium">{it.label}</div>
        </a>
      ))}
    </div>
  );
}
