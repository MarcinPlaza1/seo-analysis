"use client";

import { ImageAnalysis } from '@/lib/types/seo/image';

export function analyzeImages(doc: Document): ImageAnalysis {
  const images = Array.from(doc.querySelectorAll('img'));
  
  const imageData = images.map(img => ({
    src: img.getAttribute('src') || '',
    alt: img.getAttribute('alt') || '',
    hasAlt: !!img.getAttribute('alt'),
    hasLazyLoading: img.loading === 'lazy',
    dimensions: {
      width: img.width,
      height: img.height,
    },
  }));

  return {
    total: images.length,
    withAlt: imageData.filter(img => img.hasAlt).length,
    withoutAlt: imageData.filter(img => !img.hasAlt).length,
    lazyLoaded: imageData.filter(img => img.hasLazyLoading).length,
    images: imageData,
    validation: validateImages(imageData),
  };
}

function validateImages(images: Array<{ src: string; alt: string; hasAlt: boolean; hasLazyLoading: boolean }>) {
  const issues: string[] = [];
  const warnings: string[] = [];

  images.forEach(img => {
    if (!img.hasAlt) {
      issues.push(`Missing alt text for image: ${img.src}`);
    }
    if (!img.hasLazyLoading) {
      warnings.push(`Image not using lazy loading: ${img.src}`);
    }
  });

  return {
    isValid: issues.length === 0,
    issues,
    warnings,
  };
}