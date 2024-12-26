"use client";

import { useState } from 'react';

export function useMainContent() {
  const [activeTab, setActiveTab] = useState<'analyzer' | 'guide'>('analyzer');

  return {
    activeTab,
    setActiveTab,
  };
}