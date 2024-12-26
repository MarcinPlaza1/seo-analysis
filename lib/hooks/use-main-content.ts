"use client";

import { useState } from 'react';

export function useMainContent() {
  const [activeTab, setActiveTab] = useState('analyzer');

  return {
    activeTab,
    setActiveTab,
  };
}