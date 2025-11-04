"use client";
import { useRouter, usePathname } from "next/navigation";

function BackButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        if (typeof window !== "undefined" && window.history.length > 1) router.back();
        else router.push("/");
      }}
      aria-label="Go back"
      className="rounded-md border px-3 py-1 hover:shadow"
    >
      ← Back
    </button>
  );
}

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="mb-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        {!isHome && <BackButton />}
        <a href="/" className="text-xl font-semibold">🌸 FlowerPot</a>
      </div>
      <a href="/settings" className="text-sm underline">Settings</a>
    </header>
  );
}
