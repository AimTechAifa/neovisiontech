// src/data/servicesData.js
// SEO-optimized service data with slugs matching user search queries

export const servicesData = [
    {
        slug: "ai-business-automation-services",
        title: "AI Business Automation Services",
        metaTitle: "AI Business Automation Services | Intelligent Workflow Automation",
        metaDescription: "Transform your business with AI-powered automation. Reduce manual work by 80% with intelligent chatbots, workflow automation, and smart business processes.",
        heroImage: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1200",
        category: "AI & Automation",
        shortDescription: "Intelligent chatbots and workflow automation reducing manual effort by 80%.",
        fullDescription: `Our AI Business Automation services help companies streamline operations, reduce costs, and improve efficiency through intelligent automation solutions. We build custom AI systems that learn from your business processes and continuously improve over time.

Whether you need to automate customer support, data processing, or complex business workflows, our team designs solutions that integrate seamlessly with your existing infrastructure.`,
        benefits: [
            {
                title: "80% Reduction in Manual Work",
                description: "Automate repetitive tasks and free your team to focus on strategic initiatives."
            },
            {
                title: "24/7 Intelligent Operations",
                description: "AI systems that work around the clock, handling customer queries and processing data."
            },
            {
                title: "Seamless Integration",
                description: "Connect with your existing CRM, ERP, and business tools without disruption."
            },
            {
                title: "Continuous Learning",
                description: "AI that improves over time, learning from interactions and feedback."
            }
        ],
        useCases: [
            "Customer Service Automation",
            "Document Processing",
            "Lead Qualification",
            "Inventory Management",
            "Email Response Automation",
            "Data Entry & Validation"
        ],
        technologies: ["Python", "TensorFlow", "OpenAI", "LangChain", "Node.js", "MongoDB"],
        process: [
            { step: "Discovery", description: "Analyze your current workflows and identify automation opportunities" },
            { step: "Design", description: "Create custom AI architecture tailored to your needs" },
            { step: "Development", description: "Build and train AI models with your business data" },
            { step: "Integration", description: "Deploy and integrate with your existing systems" },
            { step: "Optimization", description: "Monitor, learn, and continuously improve performance" }
        ],
        faqs: [
            {
                question: "How long does it take to implement AI automation?",
                answer: "Typical implementation takes 4-12 weeks depending on complexity. Simple chatbots can be deployed in 2-3 weeks, while complex workflow automation may take 2-3 months."
            },
            {
                question: "Will AI automation replace my employees?",
                answer: "No, AI automation is designed to assist your team, not replace them. It handles repetitive tasks so your employees can focus on creative and strategic work."
            },
            {
                question: "What ROI can I expect from AI automation?",
                answer: "Most clients see 200-400% ROI within the first year through reduced labor costs, faster processing, and improved customer satisfaction."
            }
        ]
    },
    {
        slug: "agentic-ai-chatbot-development",
        title: "Agentic AI Chatbot Development",
        metaTitle: "Agentic AI Chatbot Development | Autonomous AI Agents",
        metaDescription: "Build intelligent AI chatbots that reason, act, and automate. Custom agentic AI systems for customer support, sales, and business automation.",
        heroImage: "https://images.pexels.com/photos/8438979/pexels-photo-8438979.jpeg?auto=compress&cs=tinysrgb&w=1200",
        category: "AI & Automation",
        shortDescription: "Agent-based AI systems that reason, act, and automate - not just answer questions.",
        fullDescription: `Agentic AI represents the next evolution in artificial intelligence. Unlike traditional chatbots that simply respond to queries, our agentic AI systems can reason, plan, and execute complex multi-step tasks autonomously.

These intelligent agents can access databases, call APIs, process documents, and make decisions based on context - acting as a virtual team member that never sleeps.`,
        benefits: [
            {
                title: "Autonomous Task Execution",
                description: "AI agents that complete entire workflows, not just individual queries."
            },
            {
                title: "Context-Aware Reasoning",
                description: "Understands business context and makes intelligent decisions."
            },
            {
                title: "Multi-System Integration",
                description: "Connects with databases, APIs, and external services seamlessly."
            },
            {
                title: "Natural Conversations",
                description: "Human-like interactions that understand intent and context."
            }
        ],
        useCases: [
            "Autonomous Customer Support",
            "Sales Lead Qualification",
            "Booking & Scheduling Agents",
            "Research & Data Gathering",
            "Order Processing Automation",
            "Internal Knowledge Assistants"
        ],
        technologies: ["OpenAI GPT-4", "LangChain", "AutoGPT", "Python", "Vector Databases", "REST APIs"],
        process: [
            { step: "Requirements", description: "Define agent capabilities and integration points" },
            { step: "Architecture", description: "Design agent workflow and decision trees" },
            { step: "Development", description: "Build and train the agentic AI system" },
            { step: "Testing", description: "Rigorous testing across all scenarios" },
            { step: "Deployment", description: "Launch with monitoring and feedback loops" }
        ],
        faqs: [
            {
                question: "What makes agentic AI different from regular chatbots?",
                answer: "Agentic AI can reason, plan, and execute multi-step tasks autonomously. Regular chatbots only respond to queries, while agents can complete entire workflows independently."
            },
            {
                question: "Is agentic AI secure for business use?",
                answer: "Yes, we implement enterprise-grade security including data encryption, access controls, and audit logging for all AI agent actions."
            }
        ]
    },
    {
        slug: "custom-web-application-development",
        title: "Custom Web Application Development",
        metaTitle: "Custom Web Application Development Services | Tailored Web Solutions",
        metaDescription: "Professional custom web application development services. Build scalable, secure web apps tailored to your business needs with modern technologies.",
        heroImage: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1200",
        category: "Development",
        shortDescription: "Tailor-made web and mobile apps built for real business needs - not generic templates.",
        fullDescription: `We build custom web applications from the ground up, designed specifically for your business requirements. No templates, no compromises - just powerful, scalable solutions that grow with your business.

Our development team uses modern frameworks and best practices to deliver applications that are fast, secure, and maintainable. From complex enterprise portals to sleek customer-facing platforms, we bring your vision to life.`,
        benefits: [
            {
                title: "100% Custom Built",
                description: "Every line of code written specifically for your requirements."
            },
            {
                title: "Scalable Architecture",
                description: "Built to handle growth from hundreds to millions of users."
            },
            {
                title: "Modern Tech Stack",
                description: "React, Node.js, Python and other cutting-edge technologies."
            },
            {
                title: "Full Ownership",
                description: "Complete source code ownership and documentation."
            }
        ],
        useCases: [
            "Enterprise Dashboards",
            "Customer Portals",
            "E-commerce Platforms",
            "SaaS Applications",
            "Internal Tools",
            "Data Management Systems"
        ],
        technologies: ["React", "Node.js", "Python", "PostgreSQL", "MongoDB", "AWS", "Docker"],
        process: [
            { step: "Discovery", description: "Understand your business goals and requirements" },
            { step: "Design", description: "Create wireframes, prototypes, and UI/UX designs" },
            { step: "Development", description: "Agile development with regular demos and feedback" },
            { step: "Testing", description: "Comprehensive QA and security testing" },
            { step: "Launch", description: "Deployment with monitoring and support" }
        ],
        faqs: [
            {
                question: "How much does custom web development cost?",
                answer: "Costs vary based on complexity. Simple applications start at ₹2-5 lakhs, while enterprise solutions can range from ₹10-50 lakhs. We provide detailed estimates after requirements analysis."
            },
            {
                question: "How long does development take?",
                answer: "MVP development typically takes 2-4 months. Full-featured applications take 4-8 months depending on scope and complexity."
            }
        ]
    },
    {
        slug: "mobile-app-development-services",
        title: "Mobile App Development Services",
        metaTitle: "Mobile App Development Services | iOS & Android Apps",
        metaDescription: "Professional mobile app development for iOS and Android. Build native and cross-platform mobile applications with expert developers.",
        heroImage: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1200",
        category: "Mobile",
        shortDescription: "Native and cross-platform mobile solutions for iOS and Android.",
        fullDescription: `Transform your business with powerful mobile applications. We develop high-performance mobile apps for iOS and Android platforms, using both native and cross-platform technologies to deliver the best user experience.

From concept to App Store, we handle the entire mobile development lifecycle including design, development, testing, and deployment.`,
        benefits: [
            {
                title: "Cross-Platform Efficiency",
                description: "Single codebase for iOS and Android with React Native or Flutter."
            },
            {
                title: "Native Performance",
                description: "Optimized for smooth, responsive user experience."
            },
            {
                title: "App Store Ready",
                description: "Complete submission and approval support."
            },
            {
                title: "Ongoing Support",
                description: "Maintenance, updates, and feature additions."
            }
        ],
        useCases: [
            "Consumer Apps",
            "Enterprise Mobile Solutions",
            "E-commerce Apps",
            "On-Demand Services",
            "Social Platforms",
            "Health & Fitness Apps"
        ],
        technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "REST APIs"],
        process: [
            { step: "Strategy", description: "Define app goals, target audience, and features" },
            { step: "Design", description: "Create stunning UI/UX with prototypes" },
            { step: "Development", description: "Build with agile methodology and regular updates" },
            { step: "Testing", description: "Device testing, performance, and security checks" },
            { step: "Launch", description: "App store submission and launch support" }
        ],
        faqs: [
            {
                question: "Should I build a native or cross-platform app?",
                answer: "Cross-platform (React Native/Flutter) is cost-effective for most apps. Native is recommended for apps requiring maximum performance or platform-specific features."
            },
            {
                question: "How long does mobile app development take?",
                answer: "Simple apps take 2-3 months, medium complexity 3-5 months, and complex apps 6-9 months."
            }
        ]
    },
    {
        slug: "seo-optimized-website-development",
        title: "SEO Optimized Website Development",
        metaTitle: "SEO Optimized Website Development | Search Engine Friendly Websites",
        metaDescription: "Build SEO-optimized websites that rank higher on Google. Expert web development with built-in SEO, fast loading, and mobile-responsive design.",
        heroImage: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200",
        category: "Marketing",
        shortDescription: "Search-engine ready sites with location-based SEO, clean structures, and performance optimization.",
        fullDescription: `Your website is your most powerful marketing asset. We build websites optimized for search engines from the ground up, ensuring your business gets found by customers searching for your services.

Our SEO-first approach includes technical optimization, content structure, schema markup, and performance tuning to help you rank higher and convert more visitors.`,
        benefits: [
            {
                title: "Higher Search Rankings",
                description: "Built with SEO best practices for better Google visibility."
            },
            {
                title: "Fast Loading Speed",
                description: "Optimized performance for better user experience and rankings."
            },
            {
                title: "Mobile-First Design",
                description: "Responsive design that works perfectly on all devices."
            },
            {
                title: "Local SEO Ready",
                description: "Optimized for local search and Google Maps visibility."
            }
        ],
        useCases: [
            "Business Websites",
            "E-commerce Stores",
            "Service Landing Pages",
            "Multi-location Businesses",
            "Professional Portfolios",
            "Corporate Websites"
        ],
        technologies: ["Next.js", "React", "WordPress", "Schema Markup", "Core Web Vitals", "CDN"],
        process: [
            { step: "Keyword Research", description: "Identify target keywords and search intent" },
            { step: "Architecture", description: "Plan SEO-friendly site structure and URLs" },
            { step: "Development", description: "Build with technical SEO implementation" },
            { step: "Content", description: "Optimize content for target keywords" },
            { step: "Launch & Monitor", description: "Deploy with analytics and ranking tracking" }
        ],
        faqs: [
            {
                question: "How long until I see SEO results?",
                answer: "Initial improvements appear in 2-3 months. Significant ranking increases typically take 4-6 months with consistent effort."
            },
            {
                question: "Do you provide ongoing SEO services?",
                answer: "Yes, we offer monthly SEO packages including content updates, link building, and performance monitoring."
            }
        ]
    },
    {
        slug: "digital-marketing-services",
        title: "Digital Marketing Services",
        metaTitle: "Digital Marketing Services | Online Marketing & Growth",
        metaDescription: "Comprehensive digital marketing services to grow your business online. SEO, social media, PPC, and content marketing strategies that deliver results.",
        heroImage: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200",
        category: "Marketing",
        shortDescription: "Comprehensive digital marketing strategies to boost your online presence and ROI.",
        fullDescription: `Grow your business with data-driven digital marketing strategies. We combine SEO, social media marketing, paid advertising, and content marketing to drive traffic, generate leads, and increase conversions.

Our marketing team works closely with you to understand your business goals and create campaigns that deliver measurable results.`,
        benefits: [
            {
                title: "Increased Traffic",
                description: "Drive more qualified visitors to your website."
            },
            {
                title: "Lead Generation",
                description: "Convert visitors into leads and customers."
            },
            {
                title: "Brand Awareness",
                description: "Build recognition and trust in your market."
            },
            {
                title: "Measurable ROI",
                description: "Track every campaign with detailed analytics."
            }
        ],
        useCases: [
            "SEO & Content Marketing",
            "Social Media Marketing",
            "Google Ads & PPC",
            "Email Marketing",
            "Influencer Marketing",
            "Brand Strategy"
        ],
        technologies: ["Google Analytics", "SEMrush", "HubSpot", "Meta Ads", "Google Ads", "Mailchimp"],
        process: [
            { step: "Audit", description: "Analyze current marketing performance" },
            { step: "Strategy", description: "Create customized marketing plan" },
            { step: "Execute", description: "Launch and manage campaigns" },
            { step: "Optimize", description: "Continuous testing and improvement" },
            { step: "Report", description: "Regular performance reporting" }
        ],
        faqs: [
            {
                question: "How much should I budget for digital marketing?",
                answer: "Marketing budgets typically range from ₹50,000-5,00,000/month depending on industry, competition, and goals."
            },
            {
                question: "Which marketing channels work best?",
                answer: "It depends on your audience. We analyze your market to recommend the most effective mix of SEO, social, and paid channels."
            }
        ]
    },
    {
        slug: "ui-ux-design-services",
        title: "UI/UX Design Services",
        metaTitle: "UI/UX Design Services | User Interface & Experience Design",
        metaDescription: "Professional UI/UX design services for web and mobile applications. Create beautiful, intuitive interfaces that users love.",
        heroImage: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200",
        category: "Design",
        shortDescription: "Beautiful, intuitive interfaces and compelling visual identities for your brand.",
        fullDescription: `Great design is the difference between products people tolerate and products people love. Our UI/UX design team creates interfaces that are not only visually stunning but also intuitive and user-friendly.

We follow a user-centered design process, conducting research and testing to ensure every design decision serves your users and business goals.`,
        benefits: [
            {
                title: "User-Centered Design",
                description: "Interfaces designed around real user needs and behaviors."
            },
            {
                title: "Increased Conversions",
                description: "Optimized user flows that drive action."
            },
            {
                title: "Brand Consistency",
                description: "Cohesive visual identity across all touchpoints."
            },
            {
                title: "Reduced Development",
                description: "Clear designs reduce development iterations."
            }
        ],
        useCases: [
            "Web Application Design",
            "Mobile App Design",
            "Dashboard Design",
            "E-commerce UX",
            "Brand Identity",
            "Design Systems"
        ],
        technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle", "After Effects"],
        process: [
            { step: "Research", description: "User research and competitor analysis" },
            { step: "Wireframes", description: "Low-fidelity structure and layout" },
            { step: "Design", description: "High-fidelity visual designs" },
            { step: "Prototype", description: "Interactive prototypes for testing" },
            { step: "Handoff", description: "Developer-ready design specs" }
        ],
        faqs: [
            {
                question: "What's the difference between UI and UX?",
                answer: "UX (User Experience) focuses on how the product works and feels. UI (User Interface) focuses on how it looks. Both are essential for great products."
            },
            {
                question: "Do you conduct user testing?",
                answer: "Yes, we conduct usability testing to validate designs and identify improvements before development."
            }
        ]
    },
    {
        slug: "industrial-training-programs",
        title: "Industrial Training Programs",
        metaTitle: "Industrial Training Programs | Professional Tech Training",
        metaDescription: "Industry-ready training programs in web development, mobile apps, AI/ML, and more. Get certified with hands-on projects and placement support.",
        heroImage: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1200",
        category: "Education",
        shortDescription: "Professional training programs in cutting-edge technologies for students and professionals.",
        fullDescription: `Kickstart your tech career with our industry-focused training programs. Learn from experienced professionals, work on real projects, and gain the skills employers are looking for.

Our programs combine theoretical knowledge with practical hands-on experience, ensuring you're job-ready from day one.`,
        benefits: [
            {
                title: "Industry Expert Trainers",
                description: "Learn from professionals with 10+ years experience."
            },
            {
                title: "Hands-on Projects",
                description: "Build real applications for your portfolio."
            },
            {
                title: "Placement Support",
                description: "Resume building, interview prep, and job referrals."
            },
            {
                title: "Flexible Learning",
                description: "Weekend and weekday batches available."
            }
        ],
        useCases: [
            "Full Stack Development",
            "Mobile App Development",
            "AI & Machine Learning",
            "Data Science",
            "Cloud & DevOps",
            "UI/UX Design"
        ],
        technologies: ["React", "Node.js", "Python", "TensorFlow", "AWS", "Docker"],
        process: [
            { step: "Enrollment", description: "Choose your course and batch timing" },
            { step: "Foundation", description: "Learn core concepts and fundamentals" },
            { step: "Advanced", description: "Deep dive into specialized topics" },
            { step: "Projects", description: "Build real-world applications" },
            { step: "Placement", description: "Career guidance and job support" }
        ],
        faqs: [
            {
                question: "Do I need prior experience?",
                answer: "Basic programs require no prior experience. Advanced courses may need foundational knowledge which we assess during enrollment."
            },
            {
                question: "What certification do I get?",
                answer: "You receive an industry-recognized certificate upon course completion with project portfolio."
            }
        ]
    }
];

export const getServiceBySlug = (slug) => {
    return servicesData.find(service => service.slug === slug);
};

export const getAllServiceSlugs = () => {
    return servicesData.map(service => service.slug);
};
