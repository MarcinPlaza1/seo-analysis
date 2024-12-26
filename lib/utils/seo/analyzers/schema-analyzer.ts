import { SchemaAnalysis } from '@/lib/types/seo/schema';

export function analyzeSchema(doc: Document): SchemaAnalysis {
  const schemas = Array.from(doc.querySelectorAll('script[type="application/ld+json"]'));
  
  return {
    hasSchema: schemas.length > 0,
    types: schemas.map(schema => {
      try {
        const data = JSON.parse(schema.textContent || '');
        return data['@type'] || 'Unknown';
      } catch {
        return 'Invalid Schema';
      }
    }),
    validation: validateSchemas(schemas),
  };
}

function validateSchemas(schemas: Element[]): Array<{
  type: string;
  isValid: boolean;
  errors: string[];
}> {
  return schemas.map(schema => {
    try {
      const data = JSON.parse(schema.textContent || '');
      const errors = [];
      
      if (!data['@context']) errors.push('Missing @context');
      if (!data['@type']) errors.push('Missing @type');
      
      return {
        type: data['@type'] || 'Unknown',
        isValid: errors.length === 0,
        errors,
      };
    } catch {
      return {
        type: 'Unknown',
        isValid: false,
        errors: ['Invalid JSON-LD syntax'],
      };
    }
  });
}