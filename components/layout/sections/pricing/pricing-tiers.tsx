"use client";

import { useState } from "react";
import { PricingCard } from "./pricing-card";
import { pricingData } from "./pricing-data";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function PricingTiers() {
  const [annualBilling, setAnnualBilling] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handlePlanSelect = (planName: string) => {
    setSelectedPlan(planName);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-center gap-4">
        <Label htmlFor="billing-toggle">Monthly</Label>
        <Switch
          id="billing-toggle"
          checked={annualBilling}
          onCheckedChange={setAnnualBilling}
        />
        <div className="flex items-center gap-2">
          <Label htmlFor="billing-toggle">Annual</Label>
          <span className="text-xs text-primary">Save 20%</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingData.map((tier, index) => (
          <PricingCard
            key={tier.name}
            {...tier}
            price={annualBilling ? tier.billingOptions.annual / 12 : tier.billingOptions.monthly}
            index={index}
            onSelect={() => handlePlanSelect(tier.name)}
          />
        ))}
      </div>

      <Dialog open={!!selectedPlan} onOpenChange={() => setSelectedPlan(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Start your {selectedPlan} plan</DialogTitle>
            <DialogDescription>
              You've selected the {selectedPlan} plan with {annualBilling ? 'annual' : 'monthly'} billing.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              {annualBilling ? 'Annual billing saves you 20%' : 'Switch to annual billing to save 20%'}
            </p>
            <div className="flex justify-end gap-4">
              <Button variant="outline" onClick={() => setSelectedPlan(null)}>
                Cancel
              </Button>
              <Button>Continue to Checkout</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}