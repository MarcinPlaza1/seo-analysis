"use client";

import { Header } from '@/components/layout/header';
import { MainFooter } from '@/components/layout/main-footer';
import { Pricing } from '@/components/layout/sections/pricing';
import { motion } from 'framer-motion';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 py-8"
        >
          <h1 className="text-3xl font-bold text-center mb-6">
            Choose Your Plan
          </h1>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Select the perfect plan for your needs. All plans include our core features
            with additional benefits as you scale.
          </p>
          <Pricing />
        </motion.div>
      </main>
      <MainFooter />
    </div>
  );
}