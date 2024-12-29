"use client";

import { Header } from '@/components/layout/header';
import { MainFooter } from '@/components/layout/main-footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Code, Key, Lock, Send } from 'lucide-react';

export default function APIPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-6">API Reference</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">Getting Started</h2>
                <p className="text-muted-foreground mb-4">
                  The SEO Master API allows you to integrate our powerful SEO analysis
                  tools into your own applications.
                </p>
                <div className="bg-muted p-4 rounded-lg mb-4">
                  <code className="text-sm">
                    curl -X GET https://api.seomaster.com/v1/analyze \<br />
                    &nbsp;&nbsp;-H "Authorization: Bearer YOUR_API_KEY" \<br />
                    &nbsp;&nbsp;-d "url=https://example.com"
                  </code>
                </div>
                <Button>
                  <Key className="mr-2 h-4 w-4" />
                  Get API Key
                </Button>
              </Card>

              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Endpoints</h2>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Send className="h-4 w-4 text-primary" />
                      <code className="text-sm font-semibold">GET /analyze</code>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Analyze a URL for SEO metrics and recommendations
                    </p>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Send className="h-4 w-4 text-primary" />
                      <code className="text-sm font-semibold">GET /keywords</code>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Get keyword analysis and suggestions
                    </p>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Send className="h-4 w-4 text-primary" />
                      <code className="text-sm font-semibold">GET /competitors</code>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Analyze competitor websites
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div>
              <Card className="p-6 mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <Lock className="h-6 w-6 text-primary" />
                  <h2 className="text-xl font-semibold">Authentication</h2>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  All API requests require authentication using an API key in the
                  Authorization header.
                </p>
                <Button variant="outline" className="w-full">
                  View Authentication Docs
                </Button>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Code className="h-6 w-6 text-primary" />
                  <h2 className="text-xl font-semibold">Code Examples</h2>
                </div>
                <ul className="space-y-2">
                  <li className="text-sm">• Python Example</li>
                  <li className="text-sm">• JavaScript Example</li>
                  <li className="text-sm">• PHP Example</li>
                  <li className="text-sm">• Ruby Example</li>
                </ul>
              </Card>
            </div>
          </div>
        </motion.div>
      </main>
      <MainFooter />
    </div>
  );
}