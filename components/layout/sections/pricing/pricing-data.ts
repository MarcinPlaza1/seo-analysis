import { PricingTier } from "./pricing-types";

export const pricingData: PricingTier[] = [
  {
    name: "Starter",
    price: 29,
    featured: false,
    description: "Perfect for small websites and beginners",
    billingOptions: {
      monthly: 29,
      annual: 290,
    },
    features: [
      {
        name: "Basic SEO Analysis",
        tooltip: "Essential SEO metrics and recommendations"
      },
      {
        name: "5 Pages per Analysis",
        tooltip: "Analyze up to 5 pages per scan"
      },
      {
        name: "Basic Keyword Research",
        tooltip: "Discover primary keywords for your content"
      },
      {
        name: "Monthly Reports",
        tooltip: "Detailed monthly performance reports"
      },
      {
        name: "Email Support",
        tooltip: "Get help via email within 24 hours"
      },
      {
        name: "Core Web Vitals Monitoring",
        tooltip: "Track essential performance metrics"
      }
    ]
  },
  {
    name: "Professional",
    price: 79,
    featured: true,
    description: "Ideal for growing businesses and marketers",
    billingOptions: {
      monthly: 79,
      annual: 790,
    },
    features: [
      {
        name: "Advanced SEO Analysis",
        tooltip: "Comprehensive SEO analysis with detailed insights",
        badge: "Enhanced"
      },
      {
        name: "Unlimited Pages",
        tooltip: "Analyze as many pages as you need"
      },
      {
        name: "Advanced Keyword Research",
        tooltip: "In-depth keyword analysis with trends",
        badge: "Pro"
      },
      {
        name: "Weekly Reports",
        tooltip: "Detailed weekly performance and progress reports"
      },
      {
        name: "Competitor Analysis",
        tooltip: "Compare your site with competitors",
        badge: "New"
      },
      {
        name: "Priority Support",
        tooltip: "Get help within 4 hours"
      },
      {
        name: "Custom Recommendations",
        tooltip: "Personalized SEO strategy recommendations"
      },
      {
        name: "API Access",
        tooltip: "Access our API for custom integrations",
        badge: "Beta"
      }
    ]
  },
  {
    name: "Enterprise",
    price: 199,
    featured: false,
    description: "For large organizations needing custom solutions",
    billingOptions: {
      monthly: 199,
      annual: 1990,
    },
    features: [
      {
        name: "Everything in Professional",
        tooltip: "All Professional plan features included"
      },
      {
        name: "White Label Reports",
        tooltip: "Custom branded reports for your clients",
        badge: "Enterprise"
      },
      {
        name: "Custom Integration",
        tooltip: "Custom API integrations and development"
      },
      {
        name: "Dedicated Account Manager",
        tooltip: "Personal support and strategy guidance"
      },
      {
        name: "24/7 Priority Support",
        tooltip: "Round-the-clock premium support"
      },
      {
        name: "Custom Features",
        tooltip: "Custom feature development on request"
      },
      {
        name: "Advanced Analytics",
        tooltip: "Enterprise-grade analytics and reporting",
        badge: "Advanced"
      },
      {
        name: "SLA Guarantee",
        tooltip: "Guaranteed uptime and support response",
        badge: "Premium"
      }
    ]
  }
];