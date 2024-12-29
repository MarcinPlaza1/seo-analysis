"use client";

import { Header } from '@/components/layout/header';
import { MainFooter } from '@/components/layout/main-footer';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Search, HelpCircle, MessageCircle, Book } from 'lucide-react';

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-6">Support Center</h1>
          
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search for help..." 
                className="pl-10"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <HelpCircle className="h-6 w-6 text-primary" />
                <h2 className="text-xl font-semibold">FAQs</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                Find answers to commonly asked questions about SEO Master.
              </p>
              <Button variant="outline" className="w-full">
                View FAQs
              </Button>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <MessageCircle className="h-6 w-6 text-primary" />
                <h2 className="text-xl font-semibold">Contact Support</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                Get help from our support team for technical issues.
              </p>
              <Button variant="outline" className="w-full">
                Contact Us
              </Button>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Book className="h-6 w-6 text-primary" />
                <h2 className="text-xl font-semibold">Documentation</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                Browse our detailed documentation and guides.
              </p>
              <Button variant="outline" className="w-full">
                View Docs
              </Button>
            </Card>
          </div>
        </motion.div>
      </main>
      <MainFooter />
    </div>
  );
}