"use client";

import { useState, useEffect, useRef } from 'react';

interface UseIntersectionOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useIntersection({ threshold = 0.1, rootMargin = '0px' }: UseIntersectionOptions = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin]);

  return [ref, isVisible] as const;
}