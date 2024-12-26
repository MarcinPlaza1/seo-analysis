import { MainHeader } from '@/components/layout/main-header';
import { MainContent } from '@/components/layout/main-content';
import { MainFooter } from '@/components/layout/main-footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <MainHeader />
      <MainContent />
      <MainFooter />
    </main>
  );
}