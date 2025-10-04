export interface ServiceOption {
  title: string;
  description: string;
  features?: string[];
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  serviceKey: string;
  modalDetails: {
    title: string;
    options: ServiceOption[];
  };
  detailPage: {
    heroTitle: string;
    heroDescription: string;
    overview: string;
    features: string[];
    benefits: string[];
    process: Array<{
      step: number;
      title: string;
      description: string;
    }>;
    pricing: {
      starter: string;
      professional: string;
      enterprise: string;
    };
  };
}

export const services: Service[] = [
  {
    icon: "ri-global-line",
    title: "Website Development",
    description: "Custom, responsive websites built with modern technologies",
    serviceKey: "website",
    modalDetails: {
      title: "Website Development Services",
      options: [
        {
          title: "Corporate Websites",
          description: "Professional websites for businesses and enterprises"
        },
        {
          title: "E-Commerce Platforms",
          description: "Full-featured online stores with payment integration"
        },
        {
          title: "Landing Pages",
          description: "High-converting landing pages for marketing campaigns"
        }
      ]
    },
    detailPage: {
      heroTitle: "Professional Website Development",
      heroDescription: "Create stunning, responsive websites that drive results and engage your audience",
      overview: "Our website development services combine cutting-edge technology with creative design to deliver exceptional digital experiences. We build fast, secure, and scalable websites tailored to your business needs.",
      features: [
        "Responsive Design - Works perfectly on all devices",
        "SEO Optimized - Built for search engine visibility",
        "Fast Loading - Optimized for speed and performance",
        "Secure - SSL certification and security best practices",
        "CMS Integration - Easy content management",
        "Analytics - Track visitor behavior and insights"
      ],
      benefits: [
        "Increase online visibility and reach",
        "Improve user engagement and conversions",
        "Build brand credibility and trust",
        "24/7 accessibility for customers",
        "Cost-effective marketing platform"
      ],
      process: [
        {
          step: 1,
          title: "Discovery & Planning",
          description: "We analyze your requirements and create a detailed project roadmap"
        },
        {
          step: 2,
          title: "Design & Prototyping",
          description: "Create wireframes and visual designs for your approval"
        },
        {
          step: 3,
          title: "Development",
          description: "Build your website using modern technologies and best practices"
        },
        {
          step: 4,
          title: "Testing & Launch",
          description: "Thorough testing followed by deployment and launch"
        }
      ],
      pricing: {
        starter: "From AED 5,000",
        professional: "From AED 15,000",
        enterprise: "Custom Quote"
      }
    }
  },
  {
    icon: "ri-smartphone-line",
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications",
    serviceKey: "mobile",
    modalDetails: {
      title: "Mobile App Development",
      options: [
        {
          title: "iOS Applications",
          description: "Native apps for iPhone and iPad"
        },
        {
          title: "Android Applications",
          description: "Native apps for Android devices"
        },
        {
          title: "Cross-Platform Apps",
          description: "React Native and Flutter solutions"
        }
      ]
    },
    detailPage: {
      heroTitle: "Mobile App Development",
      heroDescription: "Build powerful mobile applications that engage users and grow your business",
      overview: "We develop high-performance mobile applications for iOS and Android platforms. Our apps are user-friendly, feature-rich, and designed to deliver exceptional mobile experiences.",
      features: [
        "Native & Cross-Platform Development",
        "Intuitive User Interface Design",
        "Offline Functionality",
        "Push Notifications",
        "In-App Purchases & Payments",
        "App Store Optimization"
      ],
      benefits: [
        "Reach customers on mobile devices",
        "Enhance customer engagement",
        "Increase brand loyalty",
        "Generate additional revenue streams",
        "Stay competitive in the mobile-first world"
      ],
      process: [
        {
          step: 1,
          title: "Strategy & Planning",
          description: "Define app features, target audience, and technical approach"
        },
        {
          step: 2,
          title: "UI/UX Design",
          description: "Create intuitive and engaging user interfaces"
        },
        {
          step: 3,
          title: "Development & Testing",
          description: "Build and rigorously test your mobile application"
        },
        {
          step: 4,
          title: "Deployment & Support",
          description: "Launch on app stores and provide ongoing maintenance"
        }
      ],
      pricing: {
        starter: "From AED 20,000",
        professional: "From AED 50,000",
        enterprise: "Custom Quote"
      }
    }
  },
  {
    icon: "ri-megaphone-line",
    title: "Digital Marketing",
    description: "Strategic marketing solutions to grow your business",
    serviceKey: "marketing",
    modalDetails: {
      title: "Digital Marketing Services",
      options: [
        {
          title: "SEO Optimization",
          description: "Improve your search engine rankings"
        },
        {
          title: "Social Media Marketing",
          description: "Engage your audience across platforms"
        },
        {
          title: "Content Marketing",
          description: "Create compelling content that converts"
        }
      ]
    },
    detailPage: {
      heroTitle: "Digital Marketing Excellence",
      heroDescription: "Drive growth with data-driven marketing strategies and campaigns",
      overview: "Our digital marketing services help businesses reach their target audience, increase brand awareness, and drive conversions through strategic campaigns across multiple channels.",
      features: [
        "SEO & SEM Management",
        "Social Media Marketing",
        "Content Creation & Strategy",
        "Email Marketing Campaigns",
        "Pay-Per-Click Advertising",
        "Analytics & Reporting"
      ],
      benefits: [
        "Increase qualified website traffic",
        "Improve brand visibility online",
        "Generate high-quality leads",
        "Boost conversion rates",
        "Maximize marketing ROI"
      ],
      process: [
        {
          step: 1,
          title: "Market Research",
          description: "Analyze your market, competitors, and target audience"
        },
        {
          step: 2,
          title: "Strategy Development",
          description: "Create a comprehensive marketing plan"
        },
        {
          step: 3,
          title: "Campaign Execution",
          description: "Implement marketing campaigns across channels"
        },
        {
          step: 4,
          title: "Optimization",
          description: "Monitor, analyze, and optimize campaign performance"
        }
      ],
      pricing: {
        starter: "From AED 3,000/month",
        professional: "From AED 8,000/month",
        enterprise: "Custom Quote"
      }
    }
  },
  {
    icon: "ri-dashboard-line",
    title: "Dashboard Design",
    description: "Intuitive admin panels and data visualization",
    serviceKey: "dashboard",
    modalDetails: {
      title: "Dashboard Design Services",
      options: [
        {
          title: "Admin Dashboards",
          description: "Comprehensive management interfaces"
        },
        {
          title: "Analytics Platforms",
          description: "Data visualization and reporting tools"
        },
        {
          title: "CRM Systems",
          description: "Customer relationship management solutions"
        }
      ]
    },
    detailPage: {
      heroTitle: "Custom Dashboard Solutions",
      heroDescription: "Transform complex data into actionable insights with intuitive dashboards",
      overview: "We design and develop custom dashboards that help you visualize data, monitor KPIs, and make informed business decisions with ease.",
      features: [
        "Real-time Data Visualization",
        "Custom Reporting Tools",
        "Role-based Access Control",
        "Interactive Charts & Graphs",
        "Export & Sharing Features",
        "Mobile-Responsive Design"
      ],
      benefits: [
        "Make data-driven decisions faster",
        "Monitor business performance in real-time",
        "Improve operational efficiency",
        "Identify trends and opportunities",
        "Enhance team collaboration"
      ],
      process: [
        {
          step: 1,
          title: "Requirements Analysis",
          description: "Understand your data sources and reporting needs"
        },
        {
          step: 2,
          title: "Information Architecture",
          description: "Design the dashboard structure and workflows"
        },
        {
          step: 3,
          title: "Visual Design",
          description: "Create intuitive and beautiful data visualizations"
        },
        {
          step: 4,
          title: "Development & Integration",
          description: "Build and connect to your data sources"
        }
      ],
      pricing: {
        starter: "From AED 10,000",
        professional: "From AED 25,000",
        enterprise: "Custom Quote"
      }
    }
  },
  {
    icon: "ri-shopping-cart-line",
    title: "E-Commerce Solutions",
    description: "Complete online store setup and management",
    serviceKey: "ecommerce",
    modalDetails: {
      title: "E-Commerce Solutions",
      options: [
        {
          title: "Online Store Setup",
          description: "Complete e-commerce platform development"
        },
        {
          title: "Payment Integration",
          description: "Secure payment gateway setup"
        },
        {
          title: "Inventory Management",
          description: "Efficient stock and order management"
        }
      ]
    },
    detailPage: {
      heroTitle: "E-Commerce Development",
      heroDescription: "Launch and grow your online store with powerful e-commerce solutions",
      overview: "Build a successful online business with our comprehensive e-commerce solutions. We create feature-rich online stores that are secure, scalable, and optimized for conversions.",
      features: [
        "Product Catalog Management",
        "Secure Payment Processing",
        "Order & Inventory Management",
        "Customer Account System",
        "Shopping Cart & Checkout",
        "Multi-currency Support"
      ],
      benefits: [
        "Expand your market reach globally",
        "Increase sales opportunities 24/7",
        "Reduce operational costs",
        "Improve customer experience",
        "Scale your business efficiently"
      ],
      process: [
        {
          step: 1,
          title: "Business Analysis",
          description: "Define your products, audience, and business model"
        },
        {
          step: 2,
          title: "Platform Setup",
          description: "Configure your e-commerce platform and features"
        },
        {
          step: 3,
          title: "Design & Development",
          description: "Create your branded online store"
        },
        {
          step: 4,
          title: "Launch & Marketing",
          description: "Go live and start driving sales"
        }
      ],
      pricing: {
        starter: "From AED 12,000",
        professional: "From AED 30,000",
        enterprise: "Custom Quote"
      }
    }
  },
  {
    icon: "ri-code-box-line",
    title: "Software Development",
    description: "Custom software solutions for your business needs",
    serviceKey: "software",
    modalDetails: {
      title: "Software Development",
      options: [
        {
          title: "Enterprise Software",
          description: "Large-scale business applications"
        },
        {
          title: "SaaS Products",
          description: "Cloud-based software as a service"
        },
        {
          title: "API Development",
          description: "RESTful and GraphQL API solutions"
        }
      ]
    },
    detailPage: {
      heroTitle: "Custom Software Development",
      heroDescription: "Build tailored software solutions that solve your unique business challenges",
      overview: "We develop custom software applications that streamline operations, improve efficiency, and give you a competitive advantage in your industry.",
      features: [
        "Scalable Architecture",
        "Cloud-Native Solutions",
        "API Integration",
        "Database Design",
        "Security & Compliance",
        "Ongoing Support & Maintenance"
      ],
      benefits: [
        "Automate business processes",
        "Improve operational efficiency",
        "Reduce manual errors",
        "Gain competitive advantage",
        "Scale with your business growth"
      ],
      process: [
        {
          step: 1,
          title: "Consultation",
          description: "Understand your business needs and challenges"
        },
        {
          step: 2,
          title: "Architecture Design",
          description: "Plan the technical architecture and stack"
        },
        {
          step: 3,
          title: "Agile Development",
          description: "Build software in iterative sprints"
        },
        {
          step: 4,
          title: "Deployment & Training",
          description: "Launch and train your team"
        }
      ],
      pricing: {
        starter: "From AED 25,000",
        professional: "From AED 60,000",
        enterprise: "Custom Quote"
      }
    }
  },
  {
    icon: "ri-terminal-box-line",
    title: "Custom Applications",
    description: "Tailored applications to meet unique requirements",
    serviceKey: "custom",
    modalDetails: {
      title: "Custom Application Development",
      options: [
        {
          title: "Business Automation",
          description: "Streamline your workflows"
        },
        {
          title: "Integration Solutions",
          description: "Connect your systems seamlessly"
        },
        {
          title: "Legacy Modernization",
          description: "Upgrade outdated systems"
        }
      ]
    },
    detailPage: {
      heroTitle: "Custom Application Solutions",
      heroDescription: "Transform your unique business requirements into powerful applications",
      overview: "Every business has unique needs. We build custom applications that are perfectly aligned with your specific requirements and workflows.",
      features: [
        "Tailored Functionality",
        "System Integration",
        "Workflow Automation",
        "Custom Reporting",
        "User Management",
        "Third-party Integrations"
      ],
      benefits: [
        "Perfect fit for your business needs",
        "Eliminate unnecessary features",
        "Improve team productivity",
        "Reduce operational overhead",
        "Own your software completely"
      ],
      process: [
        {
          step: 1,
          title: "Requirements Gathering",
          description: "Document detailed functional requirements"
        },
        {
          step: 2,
          title: "Prototyping",
          description: "Create clickable prototypes for validation"
        },
        {
          step: 3,
          title: "Development",
          description: "Build your custom application"
        },
        {
          step: 4,
          title: "Testing & Delivery",
          description: "Quality assurance and deployment"
        }
      ],
      pricing: {
        starter: "From AED 18,000",
        professional: "From AED 45,000",
        enterprise: "Custom Quote"
      }
    }
  },
  {
    icon: "ri-cloud-line",
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services",
    serviceKey: "cloud",
    modalDetails: {
      title: "Cloud Solutions",
      options: [
        {
          title: "Cloud Migration",
          description: "Move your infrastructure to the cloud"
        },
        {
          title: "DevOps Services",
          description: "CI/CD and infrastructure automation"
        },
        {
          title: "Cloud Security",
          description: "Protect your cloud resources"
        }
      ]
    },
    detailPage: {
      heroTitle: "Cloud Infrastructure & Migration",
      heroDescription: "Modernize your IT infrastructure with secure and scalable cloud solutions",
      overview: "Leverage the power of cloud computing to reduce costs, improve scalability, and enhance business agility with our expert cloud services.",
      features: [
        "Cloud Strategy & Consulting",
        "Infrastructure as Code",
        "Auto-scaling Solutions",
        "Disaster Recovery",
        "Cloud Cost Optimization",
        "24/7 Monitoring"
      ],
      benefits: [
        "Reduce infrastructure costs",
        "Scale resources on demand",
        "Improve system reliability",
        "Enhance security posture",
        "Enable remote work capabilities"
      ],
      process: [
        {
          step: 1,
          title: "Assessment",
          description: "Evaluate current infrastructure and requirements"
        },
        {
          step: 2,
          title: "Strategy & Planning",
          description: "Design cloud architecture and migration plan"
        },
        {
          step: 3,
          title: "Migration",
          description: "Execute phased migration with minimal disruption"
        },
        {
          step: 4,
          title: "Optimization",
          description: "Fine-tune performance and costs"
        }
      ],
      pricing: {
        starter: "From AED 8,000/month",
        professional: "From AED 20,000/month",
        enterprise: "Custom Quote"
      }
    }
  }
];
