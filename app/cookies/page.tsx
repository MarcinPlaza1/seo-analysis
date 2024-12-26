"use client";

import { PageLayout } from '@/components/layout/page-layout';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Cookie } from 'lucide-react';

export default function CookiesPage() {
  return (
    <PageLayout title="Cookie Policy" description="Last updated: January 2024">
      <Card className="p-6 md:p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="prose dark:prose-invert max-w-none"
        >
          <div className="flex items-center gap-2 mb-6">
            <Cookie className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold m-0">Cookie Policy</h2>
          </div>

          <p className="lead">
            This Cookie Policy explains how SEO Master uses cookies and similar technologies
            to provide, customize, evaluate, improve, and secure our services.
          </p>

          <h3>What Are Cookies?</h3>
          <p>
            Cookies are small text files that are placed on your device when you visit our
            website. They help us provide you with a better experience and allow certain
            features to work.
          </p>

          <h3>Types of Cookies We Use</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">Essential Cookies</h4>
              <p className="text-muted-foreground">
                Required for the website to function properly. These cannot be disabled.
              </p>
            </div>

            <div>
              <h4 className="font-semibold">Performance Cookies</h4>
              <p className="text-muted-foreground">
                Help us understand how visitors interact with our website.
              </p>
            </div>

            <div>
              <h4 className="font-semibold">Functionality Cookies</h4>
              <p className="text-muted-foreground">
                Remember your preferences and personalize your experience.
              </p>
            </div>

            <div>
              <h4 className="font-semibold">Marketing Cookies</h4>
              <p className="text-muted-foreground">
                Track your activity across websites to deliver relevant advertisements.
              </p>
            </div>
          </div>

          <h3>Managing Cookies</h3>
          <p>
            You can control and/or delete cookies as you wish. You can delete all cookies
            that are already on your computer and you can set most browsers to prevent them
            from being placed.
          </p>

          <h3>Contact Us</h3>
          <p>
            If you have questions about our Cookie Policy, please contact us at{' '}
            <a href="mailto:privacy@seomaster.com">privacy@seomaster.com</a>
          </p>
        </motion.div>
      </Card>
    </PageLayout>
  );
}