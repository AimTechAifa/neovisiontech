import MediaImage from "@/components/media-image";
import Link from "next/link";
// src/pages/Home.jsx
import { Button, Badge, SectionTitle, TechCard, RevealOnScroll, GradientText, GlassCard, FloatingPaths } from "@/components/ui";
import { technologies } from "@/components/tech-icons";

// Icons as components
const ArrowIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const PlayIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ChatIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);


const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Geo-Location Platforms",
    description: "Global-scale EdTech and SaaS platforms with SEO-optimized routing and multi-region targeting.",
    gradient: "from-blue-500 to-cyan-500",
    slug: "custom-web-application-development",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    title: "AI Business Automation",
    description: "Intelligent chatbots and workflow automation reducing manual effort with AI-powered assistants.",
    gradient: "from-indigo-500 to-purple-500",
    slug: "ai-business-automation-services",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "HR & Operations Tools",
    description: "Custom internal systems for attendance, CRM, and productivity - replacing spreadsheets and manual tracking.",
    gradient: "from-violet-500 to-pink-500",
    slug: "custom-web-application-development",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: "SEO-Optimized Websites",
    description: "Search-engine ready sites with location-based SEO, clean structures, and performance optimization.",
    gradient: "from-emerald-500 to-teal-500",
    slug: "seo-optimized-website-development",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Custom Applications",
    description: "Tailor-made web and mobile apps built for real business needs - not generic templates.",
    gradient: "from-orange-500 to-red-500",
    slug: "custom-web-application-development",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "React SEO Solutions",
    description: "Pre-rendering for SPAs with SEO-friendly snapshots - solving React's visibility problems.",
    gradient: "from-pink-500 to-rose-500",
    slug: "seo-optimized-website-development",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
    title: "Agentic AI Chatbots",
    description: "Agent-based AI systems that reason, act, and automate - not just answer questions.",
    gradient: "from-cyan-500 to-blue-500",
    slug: "agentic-ai-chatbot-development",
  },
];

const projects = [
  {
    image: "https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    tags: ["Mobile Apps", "Logistics"],
    title: "Alladin Ice – On-Demand Ice Delivery",
    description: "Modernizing ice supply business with mobile ordering, enabling households and businesses to order ice products conveniently.",
    stats: { value: "iOS/Android", label: "Platform" },
    storeLink: "https://apps.apple.com/in/app/alladin-ice/id1661100869",
    storeType: "appstore",
    slug: "alladin-ice-delivery-app",
  },
  {
    image: "https://images.pexels.com/photos/128867/coins-currency-investment-insurance-128867.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    tags: ["FinTech", "Investment"],
    title: "Metfolio – Digital Gold Investment",
    description: "Simplifying gold investment for retail users with real-time price tracking, portfolio management, and secure storage options.",
    stats: { value: "Real-time", label: "Gold Tracking" },
    storeLink: "https://apps.apple.com/in/app/metfolio-invest-in-gold/id6443775527",
    storeType: "appstore",
    slug: "metfolio-gold-investment-app",
  },
  {
    image: "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    tags: ["Community", "Education"],
    title: "SRKR Alumni Network",
    description: "Dedicated community platform connecting SRKR Engineering College alumni globally with networking, updates, and event management.",
    stats: { value: "Android", label: "Platform" },
    storeLink: "https://play.google.com/store/apps/details?id=com.entrolabs.srkr.alumni",
    storeType: "playstore",
    slug: "srkr-alumni-network-app",
  },
];

export function HomeView() {
  return (
    <div className="flex flex-col min-h-screen">

      <div className="flex-1">

        {/* Hero Section with fixed alignment */}
        <section className="relative w-full overflow-hidden">
          <div className="absolute inset-0 z-0 scale-x-[-1]">
            <FloatingPaths position={1} />
            <FloatingPaths position={-1} />
          </div>

          <div className="relative max-w-1440px mx-auto px-4 md:px-8 lg:px-12 py-16 lg:py-20">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

              {/* Left: Text Content - 6 columns */}
              <RevealOnScroll animation="fade-up" delay={0} className="flex flex-col gap-8 order-2 lg:order-1 lg:col-span-6">
                <div className="flex flex-col gap-6">
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.05]">
                    Innovating{" "}
                    <GradientText gradient="primary" className="animate-gradient-x bg-[length:200%_auto]">
                      Tomorrow
                    </GradientText>
                    <br />
                    with Smart
                    <br />
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto]">
                      Technology
                    </span>
                  </h1>
                  <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
                    Enterprise-grade digital transformation solutions designed for
                    scalability, security, and peak performance.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button href="/contact" variant="primary" size="lg" icon={<ArrowIcon />}>
                      Get Started
                    </Button>
                  <Button href="/projects" variant="outline" size="lg" icon={<PlayIcon />} iconPosition="left">
                      View Our Work
                    </Button>
                </div>
              </RevealOnScroll>

              {/* Right: Image - 6 columns */}
              <div className="relative order-1 lg:order-2 lg:col-span-6 lg:-mt-10">
                <div className="relative w-full">
                  {/* Glow effect */}
                  <div className="absolute -inset-4 bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-3xl blur-2xl opacity-20 dark:opacity-40" />

                  {/* Floating stat cards - smaller and better positioned */}
                  <div
                    className="absolute top-4 left-4 z-20 bg-white/95 dark:bg-white/10 backdrop-blur-xl rounded-xl shadow-xl dark:shadow-black/20 p-3 border border-slate-100 dark:border-white/20"
                    style={{ animation: 'bounce 3s infinite' }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-lg bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      <div>
                        <span className="block text-xl font-black text-slate-900 dark:text-white">99%</span>
                        <span className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wide">Uptime</span>
                      </div>
                    </div>
                  </div>

                  <div
                    className="absolute bottom-4 right-4 z-20 bg-white/95 dark:bg-white/10 backdrop-blur-xl rounded-xl shadow-xl dark:shadow-black/20 p-3 border border-slate-100 dark:border-white/20"
                    style={{ animation: 'bounce 4s infinite 1s' }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-lg bg-linear-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <span className="block text-xl font-black text-emerald-600 dark:text-emerald-400">+40%</span>
                        <span className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wide">Growth</span>
                      </div>
                    </div>
                  </div>

                  {/* Main Image - larger and fills the space */}
                  <div className="relative aspect-16/10 rounded-3xl overflow-hidden shadow-2xl dark:shadow-black/40 ring-1 ring-slate-900/10 dark:ring-white/10">
                    <MediaImage
                      alt="Digital technology visualization"
                      className="w-full h-full object-cover"
                      src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=800&fit=crop&auto=format&q=90"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/30 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="relative w-full py-24 bg-slate-50/50 dark:bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <RevealOnScroll animation="fade-up">
              <SectionTitle
                badge="Our Services"
                title="AI-Driven Solutions for the"
                highlightedText="Digital Age"
                description="From geo-aware EdTech platforms to intelligent automation - we build production-ready systems that solve real business challenges."
              />
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, i) => (
                <RevealOnScroll key={i} animation="fade-up" delay={i * 100}>
                  <GlassCard hover glow glowColor="blue" className="group">
                    <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} text-white shadow-lg mb-5`}>
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <Link href={`/services/${service.slug}`} className="inline-flex items-center gap-1 text-sm font-semibold text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      Learn more
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </GlassCard>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        <section id="technologies" className="relative w-full py-24 bg-white dark:bg-transparent">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-linear-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <SectionTitle
              badge="Tech Stack"
              badgeVariant="purple"
              title="Powering Innovation with"
              highlightedText="Cutting-Edge Tech"
              description="We leverage the latest technologies to build robust, scalable, and future-proof solutions."
            />

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {technologies.map((tech, i) => (
                <TechCard
                  key={i}
                  name={tech.name}
                  color={tech.color}
                  icon={tech.icon}
                />
              ))}
            </div>
          </div>
        </section>


        {/* Projects Section */}
        <section id="projects" className="relative w-full py-24 bg-slate-50 dark:bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
              <div>
                <div className="mb-4">
                  <Badge variant="green">Case Studies</Badge>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">
                  Selected Projects
                </h2>
              </div>
              <Button href="/projects" variant="outline" size="md" icon={<ArrowIcon />}>
                  View All Projects
                </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project, i) => (
                <div
                  key={i}
                  className="group relative rounded-3xl overflow-hidden bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-transparent shadow-sm hover:shadow-2xl dark:shadow-black/30 transition-all duration-500"
                >
                  <div className="relative h-64 lg:h-72 overflow-hidden">
                    <MediaImage
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      src={project.image}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

                    {/* Stat overlay */}
                    <div className="absolute bottom-4 left-4">
                      <div className="px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                        <span className="block text-2xl font-black text-white">{project.stats.value}</span>
                        <span className="text-xs uppercase tracking-wider text-white/80 font-semibold">{project.stats.label}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex gap-2 mb-3">
                      {project.tags.map((tag, j) => (
                        <span key={j} className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-3">
                      <Button href={`/projects/${project.slug}`} variant="outline" size="sm" className="h-10">
                          View Case Study
                        </Button>
                      <a
                        href={project.storeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all h-10"
                      >
                        {project.storeType === 'appstore' ? (
                          <>
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                            </svg>
                            App Store
                          </>
                        ) : (
                          <>
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                            </svg>
                            Play Store
                          </>
                        )}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="relative w-full py-24 bg-linear-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">

          {/* Background decorations */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          <div className="relative max-w-4xl mx-auto px-4 md:px-8 lg:px-12 text-center">
            <div className="relative">
              {/* Quote marks */}
              <svg className="absolute -top-8 left-1/2 -translate-x-1/2 w-20 h-20 text-blue-500/30" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm12 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
              </svg>

              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-relaxed">
                "The only way to do great work is to love what you do, and to never stop learning. Technology is not just about building products—it's about building the future."
              </blockquote>

              <div className="mt-8 flex items-center justify-center gap-4">
                <div className="h-px w-12 bg-linear-to-r from-transparent to-blue-500"></div>
                <span className="text-blue-400 font-semibold">NeoVision Philosophy</span>
                <div className="h-px w-12 bg-linear-to-l from-transparent to-blue-500"></div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative w-full py-24 bg-white dark:bg-transparent">
          <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-12">
            <div className="relative rounded-3xl overflow-hidden bg-linear-to-br from-slate-900 via-blue-900 to-indigo-900 p-8 md:p-12 lg:p-16 text-center">
              {/* Background pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />

              <div className="relative">
                <div className="mb-6">
                  <Badge variant="blue" dot animated>
                    Limited spots for Q1 2025
                  </Badge>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
                  Ready to scale
                  <br />
                  <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                    your vision?
                  </span>
                </h2>
                <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
                  Join industry leaders who trust NeoVisionTech for their most
                  critical digital initiatives.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button href="/contact" variant="white" size="lg" icon={<ArrowIcon />}>
                      Get Started Now
                    </Button>
                  <Button href="/contact"
                      variant="outline"
                      size="lg"
                      icon={<ChatIcon />}
                      iconPosition="left"
                      className="border-white/30  hover:bg-white/10 hover:border-white/50"
                    >
                      Talk to Sales
                    </Button>
                </div>

                {/* Trust badges */}
                <div className="flex flex-wrap items-center justify-center gap-6 mt-10 pt-8 border-t border-white/10">
                  {[
                    { icon: "🔒", text: "SOC 2 Certified" },
                    { icon: "⚡", text: "99.9% Uptime SLA" },
                    { icon: "🌍", text: "GDPR Compliant" },
                  ].map((badge, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-white/70">
                      <span>{badge.icon}</span>
                      <span className="font-medium">{badge.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>


    </div>
  );
};




