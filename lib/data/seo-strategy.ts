export const seoStrategyGuide = {
  onPageSEO: {
    title: "On-Page SEO Optimization",
    description: "Essential elements for optimizing individual web pages",
    icon: "FileText",
    recommendations: [
      {
        title: "Title Tag Optimization",
        description: "Create unique, keyword-rich titles between 50-60 characters",
        priority: "high",
        implementation: [
          "Place primary keyword within first 60 characters",
          "Include brand name separated by a pipe (|) or dash (-)",
          "Make titles unique for each page",
          "Use power words to increase CTR (e.g., 'Ultimate', 'Complete', 'Guide')",
          "Avoid keyword stuffing"
        ],
        metrics: [
          {
            name: "Click-through rate (CTR)",
            target: "> 3%",
            importance: "high"
          },
          {
            name: "Keyword rankings",
            target: "Top 10 positions",
            importance: "high"
          },
          {
            name: "Bounce rate",
            target: "< 40%",
            importance: "medium"
          }
        ],
        tools: [
          "Google Search Console",
          "SEMrush",
          "Ahrefs"
        ]
      },
      {
        title: "Meta Description",
        description: "Craft compelling meta descriptions between 150-160 characters",
        priority: "high",
        implementation: [
          "Include primary and secondary keywords naturally",
          "Write action-oriented copy with clear value proposition",
          "Add a strong call-to-action",
          "Make each description unique and relevant",
          "Include target keywords without stuffing"
        ],
        metrics: [
          {
            name: "Click-through rate (CTR)",
            target: "> 4%",
            importance: "high"
          },
          {
            name: "Time on page",
            target: "> 2 minutes",
            importance: "medium"
          },
          {
            name: "Conversion rate",
            target: "> 2%",
            importance: "high"
          }
        ],
        tools: [
          "Google Search Console",
          "Google Analytics",
          "Screaming Frog"
        ]
      },
      {
        title: "Content Structure",
        description: "Organize content for maximum readability and SEO impact",
        priority: "high",
        implementation: [
          "Use one H1 tag containing the primary keyword",
          "Structure H2-H6 tags logically",
          "Keep paragraphs short (3-4 sentences)",
          "Use bullet points and numbered lists",
          "Include relevant internal and external links",
          "Add table of contents for long content"
        ],
        metrics: [
          {
            name: "Average time on page",
            target: "> 3 minutes",
            importance: "high"
          },
          {
            name: "Scroll depth",
            target: "> 75%",
            importance: "medium"
          },
          {
            name: "Social shares",
            target: "Increasing trend",
            importance: "medium"
          }
        ],
        tools: [
          "Yoast SEO",
          "Hemingway Editor",
          "Google Analytics"
        ]
      }
    ]
  },
  technicalSEO: {
    title: "Technical SEO Optimization",
    description: "Technical aspects affecting search engine crawling and indexing",
    icon: "Settings",
    recommendations: [
      {
        title: "Core Web Vitals",
        description: "Optimize loading, interactivity, and visual stability",
        priority: "critical",
        implementation: [
          "Achieve LCP (Largest Contentful Paint) < 2.5s",
          "Maintain FID (First Input Delay) < 100ms",
          "Keep CLS (Cumulative Layout Shift) < 0.1",
          "Optimize images and use WebP format",
          "Implement lazy loading",
          "Minimize render-blocking resources"
        ],
        metrics: [
          {
            name: "PageSpeed Insights score",
            target: "> 90",
            importance: "critical"
          },
          {
            name: "Mobile usability score",
            target: "> 95",
            importance: "high"
          },
          {
            name: "Time to Interactive",
            target: "< 3.8s",
            importance: "high"
          }
        ],
        tools: [
          "PageSpeed Insights",
          "Chrome DevTools",
          "GTmetrix"
        ]
      },
      {
        title: "Mobile Optimization",
        description: "Ensure website is fully responsive and mobile-friendly",
        priority: "critical",
        implementation: [
          "Use responsive design patterns",
          "Implement mobile-first indexing best practices",
          "Optimize tap targets (min 48x48px)",
          "Ensure readable font sizes (min 16px)",
          "Eliminate horizontal scrolling",
          "Test across multiple devices"
        ],
        metrics: [
          {
            name: "Mobile usability errors",
            target: "0",
            importance: "critical"
          },
          {
            name: "Mobile conversion rate",
            target: "> 2%",
            importance: "high"
          },
          {
            name: "Mobile bounce rate",
            target: "< 45%",
            importance: "medium"
          }
        ],
        tools: [
          "Mobile-Friendly Test",
          "Chrome DevTools",
          "BrowserStack"
        ]
      }
    ]
  },
  contentStrategy: {
    title: "Content Strategy",
    description: "Creating valuable, optimized content for users and search engines",
    icon: "FileText",
    recommendations: [
      {
        title: "Content Quality",
        description: "Create comprehensive, authoritative content",
        priority: "high",
        implementation: [
          "Research user intent thoroughly",
          "Cover topics comprehensively",
          "Include expert insights and citations",
          "Update content regularly",
          "Add relevant visuals and data",
          "Maintain E-A-T principles"
        ],
        metrics: [
          {
            name: "Average time on page",
            target: "> 4 minutes",
            importance: "high"
          },
          {
            name: "Pages per session",
            target: "> 2",
            importance: "medium"
          },
          {
            name: "Return visitors",
            target: "> 30%",
            importance: "high"
          }
        ],
        tools: [
          "Google Analytics",
          "SEMrush Content Audit",
          "MarketMuse"
        ]
      },
      {
        title: "Keyword Strategy",
        description: "Develop comprehensive keyword targeting",
        priority: "high",
        implementation: [
          "Research primary and secondary keywords",
          "Analyze search intent",
          "Map keywords to content",
          "Target featured snippets",
          "Monitor keyword rankings",
          "Update content based on performance"
        ],
        metrics: [
          {
            name: "Keyword rankings",
            target: "Top 3 positions",
            importance: "high"
          },
          {
            name: "Organic traffic growth",
            target: "> 10% monthly",
            importance: "high"
          },
          {
            name: "Featured snippets",
            target: "Increasing trend",
            importance: "medium"
          }
        ],
        tools: [
          "Ahrefs",
          "SEMrush",
          "Google Search Console"
        ]
      }
    ]
  },
  linkBuilding: {
    title: "Link Building Strategy",
    description: "Building high-quality backlinks to improve authority",
    icon: "Link",
    recommendations: [
      {
        title: "Quality Link Building",
        description: "Earn high-quality, relevant backlinks",
        priority: "high",
        implementation: [
          "Create linkable assets (studies, tools, guides)",
          "Conduct outreach to relevant sites",
          "Build relationships with industry experts",
          "Monitor competitor backlinks",
          "Participate in expert roundups",
          "Create data-driven content"
        ],
        metrics: [
          {
            name: "Domain Rating/Authority",
            target: "Increasing trend",
            importance: "high"
          },
          {
            name: "Referring domains",
            target: "> 10% growth quarterly",
            importance: "high"
          },
          {
            name: "Toxic backlink ratio",
            target: "< 5%",
            importance: "medium"
          }
        ],
        tools: [
          "Ahrefs",
          "Majestic",
          "Moz Pro"
        ]
      },
      {
        title: "Content Promotion",
        description: "Promote content effectively to earn natural backlinks",
        priority: "high",
        implementation: [
          "Develop promotion strategy before content creation",
          "Identify and engage with influencers",
          "Share on relevant social platforms",
          "Repurpose content for different formats",
          "Use paid promotion strategically",
          "Monitor and leverage mentions"
        ],
        metrics: [
          {
            name: "Social shares",
            target: "> 100 per piece",
            importance: "medium"
          },
          {
            name: "Referral traffic",
            target: "> 15% of total",
            importance: "high"
          },
          {
            name: "Brand mentions",
            target: "Increasing trend",
            importance: "medium"
          }
        ],
        tools: [
          "BuzzSumo",
          "Hootsuite",
          "Google Alerts"
        ]
      }
    ]
  }
};