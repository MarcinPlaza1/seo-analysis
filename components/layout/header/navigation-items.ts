import { Home, BarChart2, CreditCard, Users, FileText, Book, Code, Headphones } from 'lucide-react';

export const navigationItems = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "Features",
    href: "/features",
    icon: BarChart2,
  },
  {
    label: "Pricing",
    href: "/pricing",
    icon: CreditCard,
  },
  {
    label: "About",
    href: "/about",
    icon: Users,
  },
  {
    label: "Blog",
    href: "/blog",
    icon: FileText,
  }
];

export const resourceLinks = [
  {
    label: "Documentation",
    href: "/docs",
    description: "Learn how to use SEO Master effectively",
    icon: Book,
  },
  {
    label: "API Reference",
    href: "/api",
    description: "Integrate SEO Master into your applications",
    icon: Code,
  },
  {
    label: "Support",
    href: "/support",
    description: "Get help from our support team",
    icon: Headphones,
  }
];

export const footerLinks = {
  product: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "API", href: "/api" },
    { label: "Documentation", href: "/docs" }
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" }
  ],
  resources: [
    { label: "Support", href: "/support" },
    { label: "Guides", href: "/guides" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "FAQ", href: "/faq" }
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Security", href: "/security" },
    { label: "Cookies", href: "/cookies" }
  ]
};