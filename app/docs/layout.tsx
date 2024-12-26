"use client";

import { Header } from '@/components/layout/header';
import { MainFooter } from '@/components/layout/main-footer';
import { DocsSidebar } from '@/components/docs/sidebar';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">
          <DocsSidebar />
          <main>{children}</main>
        </div>
      </div>
      <MainFooter />
    </div>
  );
}