"use client";

export function validateUrl(url: string): { isValid: boolean; error?: string } {
  try {
    const parsedUrl = new URL(url);
    
    // Check for valid protocol
    if (!['http:', 'https:'].includes(parsedUrl.protocol)) {
      return { isValid: false, error: 'Invalid protocol. Only HTTP and HTTPS are allowed.' };
    }

    // Check for localhost and private IPs
    const hostname = parsedUrl.hostname.toLowerCase();
    if (hostname === 'localhost' || hostname.startsWith('127.') || hostname.startsWith('192.168.')) {
      return { isValid: false, error: 'Local and private IP addresses are not allowed.' };
    }

    // Check for malicious patterns
    const maliciousPatterns = [
      'javascript:', 'data:', 'vbscript:', 'file:', 
      '<script', 'onclick=', 'onerror=', 'onload='
    ];
    if (maliciousPatterns.some(pattern => url.toLowerCase().includes(pattern))) {
      return { isValid: false, error: 'URL contains potentially malicious content.' };
    }

    return { isValid: true };
  } catch (error) {
    return { isValid: false, error: 'Invalid URL format.' };
  }
}