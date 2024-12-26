"use client";

export function validateContentSecurity(content: string): {
  isSafe: boolean;
  issues: string[];
} {
  const issues: string[] = [];

  // Check for potentially dangerous HTML elements
  const dangerousElements = [
    '<script', '<iframe', '<object', '<embed',
    '<form', '<input', '<button', '<meta',
    '<link', '<style', '<base'
  ];

  dangerousElements.forEach(element => {
    if (content.toLowerCase().includes(element)) {
      issues.push(`Potentially dangerous HTML element found: ${element}`);
    }
  });

  // Check for event handlers
  const eventHandlers = [
    'onload', 'onerror', 'onclick', 'onmouseover',
    'onmouseout', 'onkeydown', 'onkeyup', 'onsubmit'
  ];

  eventHandlers.forEach(handler => {
    if (content.toLowerCase().includes(handler + '=')) {
      issues.push(`Event handler found in content: ${handler}`);
    }
  });

  // Check for data URLs
  if (content.includes('data:')) {
    issues.push('Data URL found in content');
  }

  // Check for javascript: URLs
  if (content.includes('javascript:')) {
    issues.push('JavaScript URL found in content');
  }

  return {
    isSafe: issues.length === 0,
    issues
  };
}