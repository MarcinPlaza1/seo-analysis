"use client";

import { PageLayout } from '@/components/layout/page-layout';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <PageLayout title="Privacy Policy" description="Last updated: January 2024">
      <Card className="p-6 md:p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="prose dark:prose-invert max-w-none"
        >
          <div className="flex items-center gap-2 mb-6">
            <Shield className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold m-0">Privacy Policy</h2>
          </div>

          <p className="lead">
            At SEO Master, we take your privacy seriously. This Privacy Policy explains how we collect,
            use, disclose, and safeguard your information when you use our service.
          </p>

          <h3>Information We Collect</h3>
          <ul>
            <li>Website data provided for analysis</li>
            <li>Account information (email, name, company)</li>
            <li>Usage data and analytics</li>
            <li>Payment information (processed securely by our payment providers)</li>
          </ul>

          <h3>How We Use Your Information</h3>
          <ul>
            <li>To provide and maintain our Service</li>
            <li>To notify you about changes to our Service</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information to improve our Service</li>
          </ul>

          <h3>Data Security</h3>
          <p>
            We implement appropriate technical and organizational security measures to protect
            your personal information against unauthorized access, alteration, disclosure, or
            destruction.
          </p>

          <h3>Your Rights</h3>
          <ul>
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to data processing</li>
            <li>Data portability</li>
          </ul>

          <h3>Contact Us</h3>
          <p>
            If you have any questions about this Privacy Policy, please contact us at{' '}
            <a href="mailto:privacy@seomaster.com">privacy@seomaster.com</a>
          </p>
        </motion.div>
      </Card>
    </PageLayout>
  );
}