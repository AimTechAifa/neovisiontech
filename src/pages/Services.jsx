// src/pages/Services.jsx
import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import {
  Brain,
  MessageSquare,
  Globe,
  Users,
  Code,
  Search,
  Smartphone,
  Monitor,
  Cpu,
  Home,
  Zap,
  TrendingUp,
  Palette,
  GraduationCap,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import {
  Button,
  Badge,
  GlassCard,
  RevealOnScroll,
  RevealStagger,
  GradientText,
  Breadcrumbs
} from "../components/ui";

const Services = () => {
  const coreServices = [
    {
      icon: <Brain className="w-7 h-7" />,
      title: "AI Business Automation",
      description: "Intelligent chatbots and workflow automation reducing manual effort by 80%.",
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/services/ai-business-automation-services",
      category: "AI & Automation"
    },
    {
      icon: <MessageSquare className="w-7 h-7" />,
      title: "Agentic AI Chatbots",
      description: "Agent-based AI systems that reason, act, and automate - not just answer questions.",
      image: "https://images.pexels.com/photos/8438979/pexels-photo-8438979.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/services/agentic-ai-chatbot-development",
      category: "AI & Automation"
    },
    {
      icon: <Globe className="w-7 h-7" />,
      title: "Geo-Location Aware Platforms",
      description: "Large-scale applications for global reach with location-based SEO and multi-region targeting.",
      image: "https://images.pexels.com/photos/1251832/pexels-photo-1251832.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/projects",
      category: "Global Platforms"
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "HR & Operations Tools",
      description: "Custom internal systems replacing spreadsheets - attendance, CRM, productivity tracking.",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/projects",
      category: "Enterprise"
    },
    {
      icon: <Code className="w-7 h-7" />,
      title: "Custom Applications",
      description: "Tailor-made web and mobile apps built for real business needs - not generic templates.",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/services/custom-web-application-development",
      category: "Development"
    },
    {
      icon: <Search className="w-7 h-7" />,
      title: "SEO-Optimized Websites",
      description: "Search-engine ready sites with location-based SEO, clean structures, and performance optimization.",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/services/seo-optimized-website-development",
      category: "Marketing"
    },
    {
      icon: <Smartphone className="w-7 h-7" />,
      title: "React SEO Solutions",
      description: "Pre-rendering for SPAs with SEO-friendly HTML snapshots - solving React's visibility problems.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/services/seo-optimized-website-development",
      category: "Solutions"
    },
    {
      icon: <Monitor className="w-7 h-7" />,
      title: "Web Development",
      description: "Cutting-edge websites combining stunning design with powerful functionality.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/services/custom-web-application-development",
      category: "Development"
    },
    {
      icon: <Smartphone className="w-7 h-7" />,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile solutions for iOS and Android.",
      image: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/services/mobile-app-development-services",
      category: "Mobile"
    },
    {
      icon: <Cpu className="w-7 h-7" />,
      title: "IoT Solutions",
      description: "Connected devices and smart systems for the Internet of Things ecosystem.",
      image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/contact",
      category: "IoT"
    },
    {
      icon: <Home className="w-7 h-7" />,
      title: "Home Automation",
      description: "Smart home solutions integrating security, climate, lighting, and entertainment.",
      image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/contact",
      category: "IoT"
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: "MVP Development",
      description: "Rapid prototyping and minimum viable products to test your ideas in the market.",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/services/custom-web-application-development",
      category: "Startup"
    },
    {
      icon: <TrendingUp className="w-7 h-7" />,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to boost your online presence and ROI.",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/services/digital-marketing-services",
      category: "Marketing"
    },
    {
      icon: <Palette className="w-7 h-7" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces and compelling visual identities for your brand.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/services/ui-ux-design-services",
      category: "Design"
    },
    {
      icon: <GraduationCap className="w-7 h-7" />,
      title: "Industrial Training",
      description: "Professional training programs in cutting-edge technologies for students and professionals.",
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/services/industrial-training-programs",
      category: "Education"
    }
  ];

  const featuredServices = [
    {
      id: "ai-automation",
      category: "AI & Automation",
      title: "Next-Gen AI Business Automation",
      description: "Transform your business operations with intelligent agentic systems. We don't just build chatbots; we build autonomous agents that can reason, perform tasks, and integrate with your existing workflows to drive efficiency.",
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1200",
      benefits: [
        "Autonomous Goal-Oriented Agents",
        "80% Reduction in Manual Workflows",
        "Seamless API & Database Integration",
        "24/7 Intelligent Support & Action"
      ],
      useCases: ["Customer Service Agents", "Data Processing Workflows", "Sales Lead Qualification"],
      imagePosition: "right",
    },
    {
      id: "geo-platforms",
      category: "Global Reach",
      title: "Geo-Location Aware Platforms",
      description: "Expand your reach with platforms that understand where your users are. Our geo-location aware systems provide personalized experiences based on region, language, and local market trends.",
      image: "https://images.pexels.com/photos/1251832/pexels-photo-1251832.jpeg?auto=compress&cs=tinysrgb&w=1200",
      benefits: [
        "Location-Based SEO Optimization",
        "Multi-Region Data Compliance",
        "Personalized Content Delivery",
        "Global Infrastructure Scalability"
      ],
      useCases: ["E-commerce Marketplaces", "Delivery Platforms", "Service Locators"],
      imagePosition: "left",
    },
    {
      id: "enterprise-tools",
      category: "Enterprise Solutions",
      title: "Internal Operations & HR Software",
      description: "Ditch the spreadsheets and modernize your internal operations. We build custom dashboards and tools that centralize your business data, from employee tracking to complex lead management systems.",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200",
      benefits: [
        "Real-time Performance Dashboards",
        "Automated HR Lifecycle Management",
        "Custom CRM & Lead Tracking",
        "Enterprise-Grade Security"
      ],
      useCases: ["Startup Operations", "Industrial Management", "Corporate HR Portals"],
      imagePosition: "right",
    }
  ];

  return (
    <div className="pb-20">
      <SEO
        title="Our Services | NeoVisionTech"
        description="Explore our comprehensive technology services including AI Business Automation, Agentic AI Chatbots, Custom Web App Development, and SEO Optimization."
        canonical="https://neovisiontech.com/services"
      />
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden pt-8 pb-20 lg:pb-28">
        <Breadcrumbs />
        <div className="relative max-w-1440px mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Text Content */}
            <RevealOnScroll className="flex flex-col gap-8 order-2 lg:order-1 lg:col-span-12 xl:col-span-5">
              <div className="flex flex-col gap-6">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[1.1]">
                  Transforming Businesses through
                  <br />
                  <GradientText className="inline">AI-Driven Innovation</GradientText>
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                  Comprehensive technology solutions designed for scale and security. From industrial automation to agentic AI, we help businesses navigate the digital landscape with precision engineering.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact">
                    <Button variant="primary" size="lg" icon={<ArrowRight />}>Get Started Now</Button>
                  </Link>
                  <Link to="/projects">
                    <Button variant="outline" size="lg" className="border-slate-200 dark:border-white/10 dark:text-white">View Our Work</Button>
                  </Link>
                </div>
              </div>
            </RevealOnScroll>

            {/* Right: Image */}
            <RevealOnScroll animation="fade-left" className="relative order-1 lg:order-2 lg:col-span-12 xl:col-span-7">
              <div className="relative w-full">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-3xl blur-2xl opacity-20 dark:opacity-40" />

                <div className="relative aspect-16/10 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-900/10 dark:ring-white/10">
                  <img
                    alt="Modern coding workspace with multiple monitors"
                    className="w-full h-full object-cover"
                    src="https://images.pexels.com/photos/2061168/pexels-photo-2061168.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 via-transparent to-transparent" />
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="py-20 bg-white dark:bg-transparent">
        <div className="max-w-1440px mx-auto px-4 md:px-8 lg:px-12">
          <RevealOnScroll className="mb-16">
            <Badge variant="purple" className="mb-6">Core Capabilities</Badge>
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              Our Core <span className="text-blue-600 dark:text-blue-400">Capabilities</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              We provide a wide range of specialized services, from high-level AI strategy to ground-level industrial automation and training.
            </p>
          </RevealOnScroll>

          <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {coreServices.map((service, i) => (
              <GlassCard key={i} className="group p-0 overflow-hidden flex flex-col hover:border-blue-500/50 transition-colors" glow glowColor="blue">
                {/* Image & Category */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/10 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/10 dark:bg-slate-900/50 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-white border border-white/20">
                      {service.category}
                    </span>
                  </div>
                  {/* Icon Card */}
                  {/* Icon removed from here */}
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>

                  <h3 className="text-lg font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>
                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-blue-600 dark:text-blue-400 hover:gap-3 transition-all"
                  >
                    Explore More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </GlassCard>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Featured Service Breakdown */}
      {featuredServices.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-24 ${index % 2 !== 0 ? 'bg-slate-50 dark:bg-white/[0.02]' : 'bg-white dark:bg-transparent'} border-t border-slate-100 dark:border-white/5`}
        >
          <div className="max-w-1440px mx-auto px-4 md:px-8 lg:px-12">
            <div className={`flex flex-col lg:flex-row gap-16 lg:gap-24 items-center ${service.imagePosition === 'left' ? 'lg:flex-row-reverse' : ''}`}>
              {/* Content Column */}
              <RevealOnScroll className="w-full lg:w-1/2">
                <Badge variant="blue" className="mb-6">{service.category}</Badge>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-8 leading-tight">
                  {service.title}
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 leading-relaxed">
                  {service.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-8 mb-10">
                  <div className="space-y-4">
                    <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">Key Benefits</h4>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">Case Study Types</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase, i) => (
                        <span key={i} className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-bold text-slate-600 dark:text-slate-400">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <Link to="/contact">
                  <Button variant="primary" size="lg" icon={<ArrowRight />}>Consult our Experts</Button>
                </Link>
              </RevealOnScroll>

              {/* Image Column */}
              <RevealOnScroll
                animation={service.imagePosition === 'left' ? 'fade-right' : 'fade-left'}
                className="w-full lg:w-1/2"
              >
                <div className="relative group">
                  <div className="absolute -inset-4 bg-linear-to-r from-blue-600/20 to-purple-600/20 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5 dark:ring-white/10">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent opacity-60" />
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>
      ))}

      {/* Process Section */}
      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        <div className="relative max-w-1440px mx-auto px-4 md:px-8 lg:px-12 text-center">
          <RevealOnScroll className="mb-20">
            <Badge variant="blue" className="mb-6">The Methodology</Badge>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              How We <span className="text-blue-500">Deliver</span> Results
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Our streamlined process ensures that from the first discovery call to final deployment, your project is handled with precision.
            </p>
          </RevealOnScroll>

          <RevealStagger className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
            {[
              { step: "01", title: "Discovery", desc: "Understanding the core challenges and requirements." },
              { step: "02", title: "Strategy", desc: "Crafting the technical architectue and roadmaps." },
              { step: "03", title: "Build", desc: "Agile development with continuous feedback loops." },
              { step: "04", title: "Scale", desc: "Successful launch followed by iterative scaling." },
            ].map((item, i) => (
              <div key={i} className="group relative">
                <div className="text-7xl font-black text-white/5 absolute -top-10 left-1/2 -translate-x-1/2 group-hover:text-blue-500/10 transition-colors">
                  {item.step}
                </div>
                <div className="relative">
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-6 -right-12 w-8 h-[1px] bg-slate-700" />
                )}
              </div>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white dark:bg-[#0a0a0a]">
        <div className="max-w-1440px mx-auto px-4 md:px-8 lg:px-12">
          <RevealOnScroll>
            <GlassCard className="p-12 lg:p-20 text-center relative overflow-hidden group" glow glowColor="blue">
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10 max-w-3xl mx-auto">
                <Badge variant="purple" className="mb-8">Start Your Transformation</Badge>
                <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[1.05]">
                  Ready to Lead the <GradientText>AI Revolution?</GradientText>
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
                  Join the league of forward-thinking enterprises that are scaling with our precision engineering and AI-driven solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link to="/contact">
                    <Button variant="primary" size="lg" className="px-10" icon={<ArrowRight />}>
                      Book a Free Consultation
                    </Button>
                  </Link>
                  <Link to="/projects">
                    <Button variant="outline" size="lg" className="px-10 dark:text-white border-slate-200 dark:border-white/10">
                      View Our Projects
                    </Button>
                  </Link>
                </div>
              </div>
            </GlassCard>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
};

export default Services;