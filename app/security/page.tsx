"use client";

import { PageLayout } from '@/components/layout/page-layout';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Lock, Shield, Server, Key } from 'lucide-react';

export default function SecurityPage() {
  return (
    <PageLayout title="Security" description="How we protect your data">
      <Card className="p-6 md:p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="prose dark:prose-invert max-w-none"
        >
          <div className="flex items-center gap-2 mb-6">
            <Lock className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold m-0">Security Measures</h2>
          </div>

          <p className="lead">
            We employ industry-leading security measures to protect your data and ensure
            the safety of your information.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="flex gap-4">
              <Shield className="h-6 w-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Data Encryption</h3>
                <p className="text-muted-foreground">
                  All data is encrypted in transit and at rest using industry-standard
                  encryption protocols.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Server className="h-6 w-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Secure Infrastructure</h3>
                <p className="text-muted-foreground">
                  Our infrastructure is hosted in secure, SOC 2 compliant data centers.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Key className="h-6 w-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Access Control</h3>
                <p className="text-muted-foreground">
                  Strict access controls and authentication mechanisms protect your account.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Shield className="h-6 w-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Regular Audits</h3>
                <p className="text-muted-foreground">
                  We conduct regular security audits and penetration testing.
                </p>
              </div>
            </div>
          </div>

          <h3>Security Practices</h3>
          <ul>
            <li>Regular security assessments and updates</li>
            <li>24/7 infrastructure monitoring</li>
            <li>Automated threat detection</li>
            <li>Secure backup systems</li>
            <li>Employee security training</li>
          </ul>

          <h3>Reporting Security Issues</h3>
          <p>
            If you discover a security vulnerability, please report it to{' '}
            <a href="mailto:security@seomaster.com">security@seomaster.com</a>
          </p>
        </motion.div>
      </Card>
    </PageLayout>
  );
}