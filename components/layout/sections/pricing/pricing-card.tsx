"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { PricingFeature } from "./pricing-types";

interface PricingCardProps {
  name: string;
  price: number;
  featured: boolean;
  features: PricingFeature[];
  description: string;
  index: number;
  onSelect: () => void;
}

export function PricingCard({
  name,
  price,
  featured,
  features,
  description,
  index,
  onSelect,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className={`relative p-6 ${featured ? 'border-primary shadow-lg' : ''}`}>
        {featured && (
          <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
            Most Popular
          </Badge>
        )}
        
        <div className="mb-6">
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-sm text-muted-foreground mt-2">{description}</p>
        </div>

        <div className="mb-6">
          <div className="flex items-baseline">
            <span className="text-3xl font-bold">${price}</span>
            <span className="text-muted-foreground ml-2">/month</span>
          </div>
          {featured && (
            <Badge variant="secondary" className="mt-2">
              Save 20% with annual billing
            </Badge>
          )}
        </div>

        <Button 
          className="w-full mb-6"
          variant={featured ? "default" : "outline"}
          onClick={onSelect}
        >
          {featured ? "Start Free Trial" : "Get Started"}
        </Button>

        <div className="space-y-4">
          <p className="text-sm font-medium">Features include:</p>
          <ul className="space-y-3">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2">
                <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <div>
                  <span className="text-sm">{feature.name}</span>
                  {feature.tooltip && (
                    <Tooltip>
                      <TooltipTrigger>
                        <HelpCircle className="h-3 w-3 ml-1 inline text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>{feature.tooltip}</TooltipContent>
                    </Tooltip>
                  )}
                  {feature.badge && (
                    <Badge variant="secondary" className="ml-2 text-xs">
                      {feature.badge}
                    </Badge>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </motion.div>
  );
}