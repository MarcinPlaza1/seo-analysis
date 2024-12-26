export function analyzeUrl(url: string) {
  const parsedUrl = new URL(url);
  
  return {
    protocol: parsedUrl.protocol,
    hostname: parsedUrl.hostname,
    pathname: parsedUrl.pathname,
    isHttps: parsedUrl.protocol === 'https:',
    hasWww: parsedUrl.hostname.startsWith('www.'),
    isClean: !parsedUrl.pathname.includes('?'),
    depth: parsedUrl.pathname.split('/').filter(Boolean).length,
    params: Object.fromEntries(parsedUrl.searchParams),
  };
}

export function validateUrlStructure(url: string) {
  const analysis = analyzeUrl(url);
  const issues: string[] = [];
  
  if (!analysis.isHttps) {
    issues.push('URL should use HTTPS protocol');
  }
  
  if (analysis.depth > 3) {
    issues.push('URL structure is too deep (recommended: max 3 levels)');
  }
  
  if (!analysis.isClean) {
    issues.push('URL contains query parameters (clean URLs recommended)');
  }
  
  return {
    isValid: issues.length === 0,
    issues,
    analysis,
  };
}