"use client";

export function sanitizeHtml(html: string): string {
  return html
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export function sanitizeMetadata(metadata: Record<string, any>): Record<string, any> {
  const sanitized: Record<string, any> = {};
  
  for (const [key, value] of Object.entries(metadata)) {
    if (typeof value === 'string') {
      sanitized[key] = sanitizeHtml(value);
    } else if (Array.isArray(value)) {
      sanitized[key] = value.map(item => 
        typeof item === 'string' ? sanitizeHtml(item) : item
      );
    } else {
      sanitized[key] = value;
    }
  }
  
  return sanitized;
}

export function validateInput(input: string): boolean {
  // Check for common injection patterns
  const dangerousPatterns = [
    '<script', 'javascript:', 'vbscript:', 
    'expression(', 'onload=', 'onerror=',
    'onclick=', 'onmouseover=', 'eval('
  ];
  
  return !dangerousPatterns.some(pattern => 
    input.toLowerCase().includes(pattern)
  );
}