"use client";

import { motion } from 'framer-motion';

const brands = [
  'Microsoft',
  'Adobe',
  'Shopify',
  'Slack',
  'Stripe',
  'HubSpot'
];

export function TrustedBy() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center py-8 mb-8"
    >
      <p className="text-sm text-muted-foreground mb-6">
        TRUSTED BY LEADING COMPANIES
      </p>
      <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
        {brands.map((brand, index) => (
          <motion.div
            key={brand}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-xl font-semibold text-muted-foreground/50"
          >
            {brand}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}