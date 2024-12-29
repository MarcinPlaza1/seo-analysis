"use client";

interface RateLimitConfig {
  maxRequests: number;
  windowMs: number;
}

export class RateLimiter {
  private requests: Map<string, number[]>;
  private config: RateLimitConfig;

  constructor(config: RateLimitConfig = { maxRequests: 10, windowMs: 60000 }) {
    this.requests = new Map();
    this.config = config;
  }

  isAllowed(clientId: string): boolean {
    const now = Date.now();
    const windowStart = now - this.config.windowMs;
    
    // Get existing requests or initialize new array
    let clientRequests = this.requests.get(clientId) || [];
    
    // Remove old requests outside the window
    clientRequests = clientRequests.filter(timestamp => timestamp > windowStart);
    
    // Check if limit is exceeded
    if (clientRequests.length >= this.config.maxRequests) {
      return false;
    }
    
    // Add new request
    clientRequests.push(now);
    this.requests.set(clientId, clientRequests);
    
    return true;
  }

  getRemainingRequests(clientId: string): number {
    const clientRequests = this.requests.get(clientId) || [];
    return Math.max(0, this.config.maxRequests - clientRequests.length);
  }

  reset(clientId: string): void {
    this.requests.delete(clientId);
  }
}