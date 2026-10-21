// src/data/projectsData.js
// SEO-optimized project data with slugs matching user search queries

export const projectsData = [
    {
        slug: "alladin-ice-delivery-app",
        title: "Alladin Ice – On-Demand Ice Delivery Platform",
        metaTitle: "Alladin Ice Delivery App Case Study | On-Demand Logistics Solution",
        metaDescription: "How we built Alladin Ice - an on-demand ice delivery mobile app for iOS and Android. Complete case study with tech stack, features, and results.",
        heroImage: "https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?auto=compress&cs=tinysrgb&w=1200",
        category: "Mobile Apps",
        platform: "iOS & Android",
        industry: "Local Services / Logistics / Food Supply",
        duration: "4 months",
        year: "2023",
        storeLink: "https://apps.apple.com/in/app/alladin-ice/id1661100869",
        storeType: "appstore",
        shortDescription: "On-demand ice delivery platform modernizing the ice supply business for households and businesses.",
        challenge: `The client operated a traditional ice supply business serving households, restaurants, and event organizers. Their operations relied on phone calls and manual order tracking, leading to missed orders, inefficient delivery routes, and limited reach.

They needed a digital solution to modernize their business, reach more customers, and streamline operations without requiring extensive technical knowledge from their staff.`,
        solution: `We developed Alladin Ice, a comprehensive mobile platform for iOS and Android that digitizes the entire ice ordering and delivery process.

Key features include:
• **User-friendly ordering interface** with product catalog and quantity selection
• **Real-time order tracking** so customers know exactly when to expect delivery
• **Local delivery management** with route optimization for drivers
• **Business dashboard** for order management and analytics
• **Payment integration** supporting multiple payment methods
• **Push notifications** for order updates and promotions`,
        results: [
            { metric: "Order Volume", value: "+150%", description: "Increase in daily orders" },
            { metric: "Customer Base", value: "+200%", description: "Growth in registered users" },
            { metric: "Delivery Time", value: "-30%", description: "Reduction in average delivery time" },
            { metric: "Manual Work", value: "-70%", description: "Reduction in phone-based orders" }
        ],
        features: [
            "User-friendly ordering interface",
            "Real-time delivery tracking",
            "Local delivery management",
            "Business and household ordering",
            "Secure payment processing",
            "Order history and reordering"
        ],
        technologies: ["React Native", "Node.js", "MongoDB", "Firebase", "Google Maps API", "Razorpay"],
        testimonial: {
            quote: "NeoVisionTech transformed our business. We went from handling 50 calls a day to managing 200+ orders seamlessly through the app.",
            author: "Business Owner",
            company: "Alladin Ice"
        }
    },
    {
        slug: "metfolio-gold-investment-app",
        title: "Metfolio – Digital Gold Investment Platform",
        metaTitle: "Metfolio Gold Investment App Case Study | FinTech Development",
        metaDescription: "How we built Metfolio - a digital gold investment platform for retail investors. FinTech case study with security, payments, and portfolio features.",
        heroImage: "https://images.pexels.com/photos/128867/coins-currency-investment-insurance-128867.jpeg?auto=compress&cs=tinysrgb&w=1200",
        category: "FinTech",
        platform: "iOS & Android",
        industry: "FinTech / Investment / Wealth Management",
        duration: "6 months",
        year: "2022",
        storeLink: "https://apps.apple.com/in/app/metfolio-invest-in-gold/id6443775527",
        storeType: "appstore",
        shortDescription: "Digital investment platform simplifying gold investment for retail users with secure storage.",
        challenge: `Traditional gold investment required physical purchases and secure storage, making it inaccessible for small investors. The client wanted to democratize gold investment by allowing anyone to buy, sell, and store gold digitally starting from just ₹100.

The platform needed to handle financial transactions securely, provide real-time pricing, and maintain regulatory compliance.`,
        solution: `We developed Metfolio, a secure digital gold investment platform that makes gold accessible to everyone.

Key features include:
• **Real-time gold pricing** with live market updates
• **Fractional gold purchases** starting from ₹100
• **Secure vault storage** with insurance
• **Portfolio dashboard** showing holdings and performance
• **Quick sell** functionality with instant bank transfer
• **KYC integration** for regulatory compliance
• **SIP mode** for systematic investment plans`,
        results: [
            { metric: "Users", value: "10K+", description: "Registered investors" },
            { metric: "Transactions", value: "₹5Cr+", description: "Total gold traded" },
            { metric: "Retention", value: "65%", description: "Monthly active user retention" },
            { metric: "Rating", value: "4.5★", description: "App store rating" }
        ],
        features: [
            "Live gold price tracking",
            "Fractional gold investment",
            "Secure vault storage",
            "Portfolio management",
            "Instant sell & withdraw",
            "KYC verification"
        ],
        technologies: ["React Native", "Python", "PostgreSQL", "AWS", "Razorpay", "DigiLocker API"],
        testimonial: {
            quote: "The team delivered a secure, compliant platform that our users love. Their attention to financial security was exceptional.",
            author: "Founder",
            company: "Metfolio"
        }
    },
    {
        slug: "srkr-alumni-network-app",
        title: "SRKR Alumni Network Application",
        metaTitle: "SRKR Alumni Network App Case Study | Community Platform Development",
        metaDescription: "How we built SRKR Alumni Network - a community app connecting engineering college alumni. Features networking, events, and batch communication.",
        heroImage: "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=1200",
        category: "Community",
        platform: "Android",
        industry: "Education / Community / Social Networking",
        duration: "3 months",
        year: "2022",
        storeLink: "https://play.google.com/store/apps/details?id=com.entrolabs.srkr.alumni",
        storeType: "playstore",
        shortDescription: "Alumni community platform connecting graduates across the globe.",
        challenge: `SRKR Engineering College needed a way to connect their vast alumni network spread across the globe. Existing methods like WhatsApp groups and email lists were fragmented and difficult to manage.

They needed a centralized platform for alumni to network, share updates, and stay connected with their alma mater.`,
        solution: `We developed a dedicated alumni networking app that serves as the hub for all alumni interactions.

Key features include:
• **Batch-wise networking** to find and connect with classmates
• **News and announcements** from the college administration
• **Event management** for reunions and meetups
• **Job board** for career opportunities shared by alumni
• **Achievement sharing** to celebrate alumni success stories
• **Direct messaging** for private conversations
• **Photo gallery** for event memories`,
        results: [
            { metric: "Alumni", value: "5K+", description: "Registered members" },
            { metric: "Engagement", value: "40%", description: "Monthly active users" },
            { metric: "Events", value: "20+", description: "Events organized through app" },
            { metric: "Connections", value: "15K+", description: "Alumni connections made" }
        ],
        features: [
            "Alumni directory",
            "Batch-wise communities",
            "Event management",
            "News & announcements",
            "Job opportunities",
            "Direct messaging"
        ],
        technologies: ["Android Native", "Kotlin", "Firebase", "Node.js", "MongoDB"],
        testimonial: {
            quote: "The app has brought our alumni community together like never before. We're now a global network connected through one platform.",
            author: "Alumni Association President",
            company: "SRKR Engineering College"
        }
    },
    {
        slug: "celkon-digital-enterprise-app",
        title: "Celkon Digital – Internal Enterprise Application",
        metaTitle: "Celkon Digital Enterprise App Case Study | Enterprise Mobility",
        metaDescription: "Case study of Celkon Digital - an internal enterprise application for workflow management, task tracking, and operational efficiency.",
        heroImage: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1200",
        category: "Enterprise",
        platform: "Android",
        industry: "Enterprise / Internal Tools / Productivity",
        duration: "4 months",
        year: "2022",
        storeLink: "https://play.google.com/store/apps/details?id=com.mobiles.celkon",
        storeType: "playstore",
        shortDescription: "Internal enterprise application for managing workflows and employee tasks.",
        challenge: `Celkon needed to streamline their internal operations and improve visibility into ongoing projects. Relying on emails and spreadsheets for task tracking was causing delays and miscommunication.

They required a secure, mobile-first solution for their field and office teams to collaborate effectively.`,
        solution: `We developed a custom Android enterprise application tailored to Celkon's improved workflows.

Key features include:
• **Task Management** where managers can assign and track tasks
• **Real-time Updates** on project status from the field
• **Secure Login** ensuring only authorized employees act access data
• **Document Sharing** for easy access to project files
• **Performance Metrics** for individual and team productivity`,
        results: [
            { metric: "Efficiency", value: "+40%", description: "Improvement in task completion rate" },
            { metric: "Visibility", value: "100%", description: "Real-time tracking of field operations" },
            { metric: "Communication", value: "Seamless", description: "Reduction in email dependency" },
            { metric: "Adoption", value: "95%", description: "Employee adoption rate" }
        ],
        features: [
            "Task assignment & tracking",
            "Real-time status updates",
            "Secure employee authentication",
            "Document management",
            "Internal notifications",
            "Performance analytics"
        ],
        technologies: ["Android Native", "Java", "Firebase", "Rest APIs", "SQLite"],
        testimonial: {
            quote: "This app revolutionized how we manage our internal processes. The transparency it provides is invaluable for our operations.",
            author: "Operations Director",
            company: "Celkon"
        }
    },
    {
        slug: "avoota-hotel-booking-app",
        title: "Avoota – Hotel Booking & Travel Platform",
        metaTitle: "Avoota Hotel Booking App Case Study | Travel Tech",
        metaDescription: "How we built Avoota - a comprehensive hotel booking and travel application with location-based search and secure reservations.",
        heroImage: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1200",
        category: "Travel",
        platform: "Android",
        industry: "Travel & Hospitality",
        duration: "5 months",
        year: "2023",
        storeLink: "https://play.google.com/store/apps/details?id=com.app.avoota",
        storeType: "playstore",
        shortDescription: "Hotel booking application for seamless travel accommodation discovery.",
        challenge: `Travelers often face difficulty finding reliable accommodation with transparent pricing. Avoota aimed to simplify the hotel booking process with a user-friendly mobile app that aggregates property listings and allows for easy booking.`,
        solution: `We designed and developed the Avoota Android app, focusing on a clean user interface and smooth booking flow.

Key features include:
• **Location-based Search** to find nearby hotels
• **Advanced Filtering** by price, amenities, and rating
• **Secure Booking Engine** with instant confirmation
• **User Reviews & Ratings** for social proof
• **Booking History** for managing reservations`,
        results: [
            { metric: "User Growth", value: "10K+", description: "App downloads in first 3 months" },
            { metric: "Booking Time", value: "<2 min", description: "Average time to complete booking" },
            { metric: "Rating", value: "4.5★", description: "User rating on Play Store" },
            { metric: "Partners", value: "500+", description: "Hotels onboarded" }
        ],
        features: [
            "Hotel discovery & search",
            "Secure reservation system",
            "User reviews & ratings",
            "Booking management",
            "Location services",
            "Wishlist functionality"
        ],
        technologies: ["Android Native", "Kotlin", "Google Maps API", "Node.js", "MySQL", "Razorpay"],
        testimonial: {
            quote: "NeoVisionTech helped us launch a robust booking platform that our customers find incredibly easy to use.",
            author: "Founder",
            company: "Avoota"
        }
    },
    {
        slug: "international-edtech-platform",
        title: "International EdTech Platform",
        metaTitle: "International EdTech Platform Case Study | E-Learning Development",
        metaDescription: "How we built a geo-location aware EdTech platform with dynamic SEO, course management, and multi-region support.",
        heroImage: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1200",
        category: "EdTech",
        platform: "Web Platform",
        industry: "Education / E-Learning / Training",
        duration: "8 months",
        year: "2023",
        storeLink: "",
        storeType: "none",
        shortDescription: "Large-scale EdTech platform with geo-location routing and local SEO optimization.",
        challenge: `The client needed a scalable platform to offer technology training courses across multiple countries, states, and cities. The platform needed to be highly SEO-optimized for local searches like "web development course in Hyderabad" while managing a complex multi-level content structure.
        
Traditional approaches would require creating thousands of static pages, which was unsustainable.`,
        solution: `We built a sophisticated geo-location aware platform with dynamic routing and automatic SEO optimization.

Key features include:
• **Geo-detected routing** that identifies user location (country/state/city)
• **Dynamic SEO URLs** like /in/ts/hyderabad for local targeting
• **Multi-level course architecture** with consistent content management
• **Secure authentication** with role-based access
• **Payment gateway integration** for course enrollment
• **Admin dashboard** with analytics and student management
• **Automated sitemap generation** for search engine indexing`,
        results: [
            { metric: "SEO Rankings", value: "#1-5", description: "For local course searches" },
            { metric: "Organic Traffic", value: "+400%", description: "Increase in 6 months" },
            { metric: "Locations", value: "50+", description: "Cities with dedicated pages" },
            { metric: "Enrollments", value: "+250%", description: "Increase in course enrollments" }
        ],
        features: [
            "Geo-location routing",
            "Dynamic SEO optimization",
            "Course management",
            "Student dashboard",
            "Payment integration",
            "Admin analytics"
        ],
        technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "Vercel", "Razorpay"],
        testimonial: {
            quote: "The geo-location SEO approach put us on the first page of Google for every city we target. Our organic leads increased 4x.",
            author: "CEO",
            company: "EdTech Client"
        }
    },
    {
        slug: "employee-tracker-hr-system",
        title: "Employee Tracker – HR Management System",
        metaTitle: "Employee Tracker HR System Case Study | Enterprise HR Software",
        metaDescription: "How we built Employee Tracker - a custom HR management system for attendance tracking, leave management, and performance dashboards.",
        heroImage: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200",
        category: "Enterprise",
        platform: "Web Application",
        industry: "Enterprise / HR Management / Internal Tools",
        duration: "4 months",
        year: "2023",
        storeLink: "",
        storeType: "none",
        shortDescription: "Custom employee attendance and productivity tracking system for enterprise HR management.",
        challenge: `A growing company was managing employee attendance, leaves, and performance using spreadsheets and manual processes. This led to errors, disputes, and hours wasted on administrative tasks.

They needed a centralized system to automate HR operations and provide real-time visibility into workforce data.`,
        solution: `We developed a comprehensive Employee Tracker system that digitizes all HR operations.

Key features include:
• **Biometric/GPS attendance** with multiple check-in options
• **Leave management** with approval workflows
• **Performance dashboards** tracking productivity metrics
• **Payroll integration** calculating attendance-based compensation
• **Role-based access** for managers and administrators
• **Comprehensive reports** for compliance and analysis
• **Mobile-friendly** access for remote employees`,
        results: [
            { metric: "Time Saved", value: "20hrs/week", description: "In HR administrative work" },
            { metric: "Accuracy", value: "99.9%", description: "Attendance tracking accuracy" },
            { metric: "Processing", value: "2 days → 2 hrs", description: "Payroll processing time" },
            { metric: "Disputes", value: "-90%", description: "Reduction in attendance disputes" }
        ],
        features: [
            "Real-time attendance tracking",
            "Leave management system",
            "Performance dashboards",
            "Role-based access control",
            "Automated reports",
            "Mobile access"
        ],
        technologies: ["React", "Node.js", "PostgreSQL", "Redis", "AWS", "Chart.js"],
        testimonial: {
            quote: "The Employee Tracker eliminated hours of manual work and gave us complete visibility into our workforce operations.",
            author: "HR Director",
            company: "Enterprise Client"
        }
    },
    {
        slug: "lead-management-crm-system",
        title: "Lead Management CRM System",
        metaTitle: "Lead Management CRM Case Study | Custom CRM Development",
        metaDescription: "How we built a custom Lead Management CRM for tracking leads, managing follow-ups, and improving sales conversions.",
        heroImage: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1200",
        category: "Enterprise",
        platform: "Web Application",
        industry: "Enterprise / CRM / Sales Management",
        duration: "5 months",
        year: "2023",
        storeLink: "",
        storeType: "none",
        shortDescription: "Custom CRM system for managing leads, tracking follow-ups, and streamlining sales workflows.",
        challenge: `The sales team was using multiple tools - spreadsheets for lead tracking, email for follow-ups, and notes for call logs. Leads were falling through the cracks, and there was no visibility into the sales pipeline.

They needed a unified system to manage the entire sales process from lead capture to conversion.`,
        solution: `We built a custom CRM tailored to their specific sales process.

Key features include:
• **Lead capture** from multiple sources (website, calls, referrals)
• **Pipeline management** with visual Kanban boards
• **Automated follow-ups** with reminder notifications
• **Call and meeting logging** with notes and recordings
• **Lead scoring** based on engagement and fit
• **Sales analytics** with conversion funnels
• **Team collaboration** with lead assignment and visibility`,
        results: [
            { metric: "Conversion Rate", value: "+45%", description: "Improvement in lead conversion" },
            { metric: "Response Time", value: "-60%", description: "Faster lead response" },
            { metric: "Visibility", value: "100%", description: "Pipeline visibility for managers" },
            { metric: "Lost Leads", value: "-80%", description: "Reduction in missed follow-ups" }
        ],
        features: [
            "Lead tracking & qualification",
            "Sales pipeline management",
            "Automated follow-up reminders",
            "Analytics & reporting",
            "Team collaboration",
            "Custom workflows"
        ],
        technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Twilio", "SendGrid"],
        testimonial: {
            quote: "Our sales team finally has a system that works the way they do. Conversion rates are up and no lead gets forgotten.",
            author: "Sales Manager",
            company: "Enterprise Client"
        }
    },
    {
        slug: "business-ai-assistant-chatbot",
        title: "Business AI Assistant Chatbot",
        metaTitle: "Business AI Assistant Case Study | Enterprise Chatbot Development",
        metaDescription: "How we built an intelligent AI assistant for business automation, customer support, and workflow integration.",
        heroImage: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1200",
        category: "AI/Automation",
        platform: "Web & API Integration",
        industry: "AI / Automation / Customer Support",
        duration: "3 months",
        year: "2024",
        storeLink: "",
        storeType: "none",
        shortDescription: "Agentic AI chatbot with context-aware conversations, API connectivity, and business logic automation.",
        challenge: `The client's customer support team was overwhelmed with repetitive queries about orders, pricing, and product information. Sales leads weren't being qualified efficiently, and valuable time was spent on low-priority tasks.

They needed an AI solution that could handle customer interactions intelligently while integrating with their existing business systems.`,
        solution: `We developed an intelligent AI assistant using agentic AI architecture that goes beyond simple Q&A.

Key features include:
• **Context-aware conversations** that remember user history
• **API integrations** with CRM, inventory, and order systems
• **Lead qualification** with intelligent scoring
• **Order status checks** without human intervention
• **Appointment scheduling** with calendar integration
• **Escalation logic** for complex queries
• **Analytics dashboard** tracking performance and insights`,
        results: [
            { metric: "Support Volume", value: "-60%", description: "Reduction in human-handled tickets" },
            { metric: "Response Time", value: "Instant", description: "24/7 immediate responses" },
            { metric: "Lead Quality", value: "+40%", description: "Improvement in qualified leads" },
            { metric: "Cost Savings", value: "₹8L/year", description: "Reduction in support costs" }
        ],
        features: [
            "Context-aware AI conversations",
            "API-connected automation",
            "Lead qualification & engagement",
            "CRM & workflow integration",
            "Smart notification systems",
            "Analytics & insights"
        ],
        technologies: ["Python", "OpenAI GPT-4", "LangChain", "FastAPI", "PostgreSQL", "Redis"],
        testimonial: {
            quote: "The AI assistant handles 60% of our support queries automatically and qualifies leads better than our previous process.",
            author: "Operations Head",
            company: "Enterprise Client"
        }
    }
];

export const getProjectBySlug = (slug) => {
    return projectsData.find(project => project.slug === slug);
};

export const getAllProjectSlugs = () => {
    return projectsData.map(project => project.slug);
};
