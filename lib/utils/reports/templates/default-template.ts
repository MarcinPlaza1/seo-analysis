export const defaultTemplate = {
  sections: [
    {
      id: 'overview',
      title: 'SEO Overview',
      enabled: true,
      order: 1,
    },
    {
      id: 'technical',
      title: 'Technical SEO Analysis',
      enabled: true,
      order: 2,
    },
    {
      id: 'content',
      title: 'Content Analysis',
      enabled: true,
      order: 3,
    },
    {
      id: 'keywords',
      title: 'Keyword Analysis',
      enabled: true,
      order: 4,
    },
    {
      id: 'recommendations',
      title: 'Recommendations',
      enabled: true,
      order: 5,
    },
  ],
  branding: {
    logo: null,
    primaryColor: '#000000',
    secondaryColor: '#666666',
    fontFamily: 'Inter',
  },
  customization: {
    includeCharts: true,
    includeScreenshots: true,
    includeTrends: true,
  },
};