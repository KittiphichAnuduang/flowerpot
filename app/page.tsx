
import DailyFlower from '@/components/DailyFlower';
import MenuGrid from '@/components/MenuGrid';
import AppFooter from '@/components/AppFooter';

export default function HomePage() {
  return (
    <main className="space-y-6">
      <DailyFlower />
      <MenuGrid />
      <AppFooter />
    </main>
  );
}
