import { AppHeader } from '@/components/layout/app-header';
import { AppFooter } from '@/components/layout/app-footer';
import { IntroductionSection } from '@/components/sections/introduction-section';
import { SportsSection } from '@/components/sections/sports-section';
import { FutureSection } from '@/components/sections/future-section';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader />
      <main className="flex-grow">
        <IntroductionSection />
        <SportsSection />
        <FutureSection />
      </main>
      <AppFooter />
    </div>
  );
}
