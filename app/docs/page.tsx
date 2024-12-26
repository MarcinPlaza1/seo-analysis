"use client";

import { Header } from '@/components/layout/header';
import { MainFooter } from '@/components/layout/main-footer';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Book, Code, FileText, Lightbulb } from 'lucide-react';

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-6">Documentation</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Book className="h-6 w-6 text-primary" />
                <h2 className="text-xl font-semibold">Getting Started</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                Learn the basics of SEO Master and start optimizing your website.
              </p>
              <ul className="space-y-2">
                <li>• Quick Start Guide</li>
                <li>• Basic Concepts</li>
                <li>• First Analysis</li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Code className="h-6 w-6 text-primary" />
                <h2 className="text-xl font-semibold">API Reference</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                Integrate SEO Master into your applications with our API.
              </p>
              <ul className="space-y-2">
                <li>• Authentication</li>
                <li>• Endpoints</li>
                <li>• Examples</li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <FileText className="h-6 w-6 text-primary" />
                <h2 className="text-xl font-semibold">Guides</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                Detailed guides for advanced features and use cases.
              </p>
              <ul className="space-y-2">
                <li>• Advanced Analysis</li>
                <li>• Custom Reports</li>
                <li>• Best Practices</li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Lightbulb className="h-6 w-6 text-primary" />
                <h2 className="text-xl font-semibold">Tutorials</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                Step-by-step tutorials for common SEO tasks.
              </p>
              <ul className="space-y-2">
                <li>• Keyword Research</li>
                <li>• Content Optimization</li>
                <li>• Technical SEO</li>
              </ul>
            </Card>
          </div>
        </motion.div>
      </main>
      <MainFooter />
    </div>
  );
}