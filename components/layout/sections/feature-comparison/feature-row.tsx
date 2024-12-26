"use client";

import React from 'react';
import { Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureRowProps {
  feature: {
    name: string;
    starter: boolean;
    pro: boolean;
    enterprise: boolean;
  };
  index: number;
}

export function FeatureRow({ feature, index }: FeatureRowProps) {
  return (
    <React.Fragment>
      <div className={cn("p-4", index % 2 === 0 && "bg-muted/30")}>
        {feature.name}
      </div>
      <div className={cn("p-4 flex justify-center", index % 2 === 0 && "bg-muted/30")}>
        {feature.starter ? (
          <Check className="h-5 w-5 text-green-500" />
        ) : (
          <X className="h-5 w-5 text-red-500" />
        )}
      </div>
      <div className={cn("p-4 flex justify-center", index % 2 === 0 && "bg-muted/30")}>
        {feature.pro ? (
          <Check className="h-5 w-5 text-green-500" />
        ) : (
          <X className="h-5 w-5 text-red-500" />
        )}
      </div>
      <div className={cn("p-4 flex justify-center", index % 2 === 0 && "bg-muted/30")}>
        {feature.enterprise ? (
          <Check className="h-5 w-5 text-green-500" />
        ) : (
          <X className="h-5 w-5 text-red-500" />
        )}
      </div>
    </React.Fragment>
  );
}