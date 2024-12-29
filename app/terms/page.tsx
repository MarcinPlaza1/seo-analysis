"use client";

import { PageLayout } from '@/components/layout/page-layout';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

export default function TermsPage() {
  return (
    <PageLayout title="Terms of Service" description="Last updated: January 2024">
      <Card className="p-6 md:p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="prose dark:prose-invert max-w-none"
        >
          <div className="flex items-center gap-2 mb-6">
            <FileText className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold m-0">Terms of Service</h2>
          </div>

          <p className="lead">
            By accessing or using SEO Master's services, you agree to be bound by these Terms of Service.
          </p>

          <h3>1. Service Usage</h3>
          <p>
            Our services are provided "as is" and "as available" for your use. You agree to use the
            services only for lawful purposes and in accordance with these Terms.
          </p>

          <h3>2. Account Responsibilities</h3>
          <ul>
            <li>Maintain accurate account information</li>
            <li>Protect account credentials</li>
            <li>Notify us of unauthorized access</li>
            <li>Comply with usage guidelines</li>
          </ul>

          <h3>3. Payment Terms</h3>
          <ul>
            <li>Subscription fees are billed in advance</li>
            <li>All fees are non-refundable</li>
            <li>Automatic renewal unless cancelled</li>
            <li>Price changes with 30 days notice</li>
          </ul>

          <h3>4. Intellectual Property</h3>
          <p>
            All content, features, and functionality are owned by SEO Master and are protected by
            international copyright, trademark, and other intellectual property laws.
          </p>

          <h3>5. Limitation of Liability</h3>
          <p>
            SEO Master shall not be liable for any indirect, incidental, special, consequential, or
            punitive damages resulting from your use or inability to use the service.
          </p>

          <h3>Contact</h3>
          <p>
            For questions about these Terms, contact us at{' '}
            <a href="mailto:legal@seomaster.com">legal@seomaster.com</a>
          </p>
        </motion.div>
      </Card>
    </PageLayout>
  );
}