import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "FlowerPot",
  description: "Offline flower encyclopedia: meanings, care, and credits.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className="container py-6">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
