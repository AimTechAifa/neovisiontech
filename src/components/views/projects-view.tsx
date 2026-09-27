"use client";

import { useState } from "react";
import MediaImage from "@/components/media-image";
import Link from "next/link";
// src/pages/Projects.jsx
import { Button, Badge, RevealOnScroll, RevealStagger, Breadcrumbs } from "@/components/ui";
import { technologies } from "@/components/tech-icons";

export function ProjectsView() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Mobile Apps", "FinTech", "EdTech", "Community", "Enterprise", "Travel", "AI/Automation"];

  const projects = [
    {
      id: 1,
      slug: "alladin-ice-delivery-app",
      category: "Mobile Apps",
      title: "Alladin Ice – On-Demand Ice Delivery Platform",
      platform: "iOS & Android",
      industry: "Local Services / Logistics / Food Supply",
      description: "Alladin Ice is a mobile application designed to modernize and streamline the ice supply business. The app enables customers to conveniently order ice products directly from their smartphones, eliminating the need for manual calls or physical visits. The platform supports on-demand ordering for ice cubes and related products, catering to households, event organizers, restaurants, catering services, and commercial businesses.",
      image: "https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?auto=compress&cs=tinysrgb&w=800",
      storeLink: "https://apps.apple.com/in/app/alladin-ice/id1661100869",
      storeType: "appstore",
      highlights: [
        "User-friendly ordering interface",
        "Local delivery management",
        "Designed for both individual and business customers",
        "Digitization of a legacy service business"
      ],
    },
    {
      id: 2,
      slug: "metfolio-gold-investment-app",
      category: "FinTech",
      title: "Metfolio – Invest in Gold",
      platform: "iOS & Android",
      industry: "FinTech / Investment / Wealth Management",
      description: "Metfolio is a digital investment platform focused on simplifying gold investment for retail users. The app allows users to buy, sell, and store gold securely through a mobile-first experience, making gold investment accessible to a broader audience. Users can track live gold prices, invest in small or recurring amounts, and monitor their portfolio in real time.",
      image: "https://images.pexels.com/photos/128867/coins-currency-investment-insurance-128867.jpeg?auto=compress&cs=tinysrgb&w=800",
      storeLink: "https://apps.apple.com/in/app/metfolio-invest-in-gold/id6443775527",
      storeType: "appstore",
      highlights: [
        "Digital gold buying and selling",
        "Real-time price tracking",
        "Portfolio management dashboard",
        "Secure and insured gold storage",
        "Simple onboarding for new investors"
      ],
    },
    {
      id: 3,
      slug: "srkr-alumni-network-app",
      category: "Community",
      title: "SRKR Alumni Network Application",
      platform: "Android",
      industry: "Education / Community / Social Networking",
      description: "The SRKR Alumni app is a dedicated community platform built to connect alumni of SRKR Engineering College across the globe. The application strengthens alumni engagement by providing a centralized space for communication, collaboration, and updates. Alumni can interact with batch mates, post updates, share achievements, and stay informed about institutional news and events.",
      image: "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=800",
      storeLink: "https://play.google.com/store/apps/details?id=com.entrolabs.srkr.alumni",
      storeType: "playstore",
      highlights: [
        "Alumni networking and communication",
        "News, announcements, and event updates",
        "Batch-wise community interaction",
        "Media sharing (posts, photos, updates)",
        "Alumni association engagement support"
      ],
    },
    {
      id: 4,
      slug: "celkon-digital-enterprise-app",
      category: "Enterprise",
      title: "Celkon Digital – Internal Enterprise Application",
      platform: "Android",
      industry: "Enterprise / Internal Tools / Productivity",
      description: "Celkon Digital is an internal enterprise application developed for Celkon to manage and monitor internal workflows. The app is designed exclusively for employees and internal stakeholders to track projects, tasks, and operational updates. By digitizing internal processes, the application improves transparency, accountability, and coordination among teams.",
      image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800",
      storeLink: "https://play.google.com/store/apps/details?id=com.mobiles.celkon",
      storeType: "playstore",
      highlights: [
        "Internal project and task tracking",
        "Employee-focused workflow management",
        "Secure access for authorized users",
        "Improved operational visibility",
        "Custom-built enterprise solution"
      ],
    },
    {
      id: 5,
      slug: "avoota-hotel-booking-app",
      category: "Travel",
      title: "Avoota – Hotel Booking & Travel Platform",
      platform: "Android",
      industry: "Travel & Hospitality",
      description: "Avoota is a hotel booking application that allows users to search, compare, and book accommodations through a simple and intuitive mobile interface. The app is designed to help travelers discover hotels based on location, pricing, and availability. Users can browse detailed listings, view property information, and make reservations with ease.",
      image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
      storeLink: "https://play.google.com/store/apps/details?id=com.app.avoota",
      storeType: "playstore",
      highlights: [
        "Hotel search and discovery",
        "Location-based listings",
        "Booking and reservation flow",
        "User-friendly travel interface",
        "Hospitality-focused digital solution"
      ],
    },
    {
      id: 6,
      slug: "international-edtech-platform",
      category: "EdTech",
      title: "International EdTech Platform",
      platform: "Web Platform",
      industry: "Education / E-Learning / Training",
      description: "Large-scale, geo-location aware EdTech platform built for global reach and local SEO dominance. Features dynamic routing, multi-level course architecture, secure authentication, payment integration, and comprehensive admin dashboards for managing students, courses, and analytics.",
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800",
      storeLink: "",
      storeType: "none",
      highlights: [
        "Geo-detected routing (country/state/city level)",
        "SEO-optimized dynamic URLs",
        "Multi-level course and content architecture",
        "Secure authentication and payment gateway",
        "Admin dashboards with analytics"
      ],
    },
    {
      id: 7,
      slug: "employee-tracker-hr-system",
      category: "Enterprise",
      title: "Employee Tracker System",
      platform: "Web Application",
      industry: "Enterprise / HR Management / Internal Tools",
      description: "Custom employee attendance and productivity tracking system. Features real-time attendance monitoring, leave management, performance dashboards, and comprehensive reporting for efficient workforce management.",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
      storeLink: "",
      storeType: "none",
      highlights: [
        "Real-time employee attendance tracking",
        "Leave management system",
        "Performance dashboards",
        "Role-based access control",
        "Comprehensive reporting"
      ],
    },
    {
      id: 8,
      slug: "lead-management-crm-system",
      category: "Enterprise",
      title: "Lead Management CRM",
      platform: "Web Application",
      industry: "Enterprise / CRM / Sales Management",
      description: "Custom CRM system for managing leads, tracking follow-ups, and streamlining sales workflows. Features lead qualification, pipeline management, automated notifications, and analytics for improved conversion rates.",
      image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800",
      storeLink: "",
      storeType: "none",
      highlights: [
        "Lead tracking and qualification",
        "Sales pipeline management",
        "Automated follow-up notifications",
        "Analytics and reporting",
        "Team collaboration tools"
      ],
    },
    {
      id: 9,
      slug: "business-ai-assistant-chatbot",
      category: "AI/Automation",
      title: "Business AI Assistant",
      platform: "Web & API Integration",
      industry: "AI / Automation / Customer Support",
      description: "Agentic AI chatbot system built with context-aware conversations, API connectivity, and business logic automation. Designed for customer support automation, lead qualification, and internal workflow assistance with CRM and dashboard integration.",
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800",
      storeLink: "",
      storeType: "none",
      highlights: [
        "Context-aware AI conversations",
        "API-connected automation",
        "Lead qualification and engagement",
        "CRM and workflow integration",
        "Smart notification systems"
      ],
    },
  ];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-linear-to-b from-slate-50 via-white to-white dark:from-[#0a0a0a] dark:via-[#0f0f0f] dark:to-[#0a0a0a] pt-8 pb-20 lg:pb-28">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-500px h-500px bg-linear-to-br from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-full blur-3xl opacity-50" />
          <div className="absolute top-1/2 -left-40 w-400px h-400px bg-linear-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-full blur-3xl opacity-40" />
        </div>

        <Breadcrumbs />
        <div className="relative max-w-1440px mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <RevealOnScroll className="flex flex-col items-start gap-6">
              <Badge variant="green" dot animated>
                Case Studies
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                Engineering
                <br />
                <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Success Stories
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                Explore how we help industry leaders achieve operational excellence through custom technology solutions and digital transformation.
              </p>

              {/* Quick Stats */}
              <div className="flex gap-8 mt-4">
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-blue-600">150+</span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">Projects</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-indigo-600">98%</span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">Success Rate</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-purple-600">50+</span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">Clients</span>
                </div>
              </div>
            </RevealOnScroll>

            {/* Right Image */}
            <RevealOnScroll animation="fade-left" className="relative hidden lg:block">
              <div className="relative">
                {/* Main Image */}
                <div className="relative h-450px rounded-2xl overflow-hidden shadow-2xl">
                  <MediaImage
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Team collaboration on projects"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/30 via-transparent to-transparent" />
                </div>

                {/* Floating Card 1 */}
                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-white/10 rounded-xl shadow-xl dark:shadow-black/20 p-4 border border-slate-100 dark:border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-linear-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">Projects Delivered</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">On time, every time</p>
                    </div>
                  </div>
                </div>

                {/* Floating Card 2 */}
                <div className="absolute -top-4 -right-4 bg-white dark:bg-white/10 rounded-xl shadow-xl dark:shadow-black/20 p-4 border border-slate-100 dark:border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-linear-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">+85% Growth</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Average client ROI</p>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -z-10 top-8 -right-8 w-full h-full bg-linear-to-br from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl" />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Projects Container */}
      <section className="py-12 md:py-16 bg-white dark:bg-transparent">
        <div className="max-w-1440px mx-auto px-4 md:px-8 lg:px-12">
          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`flex h-10 items-center justify-center px-6 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === filter
                  ? "bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25"
                  : "bg-white dark:bg-transparent border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:border-blue-300 dark:hover:border-blue-500/50 hover:bg-blue-50 dark:hover:bg-blue-500/10"
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <RevealStagger className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="group flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-xl dark:shadow-black/30 hover:border-slate-300 dark:hover:border-white/20 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative w-full h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10" />
                  <MediaImage
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/50 via-transparent to-transparent" />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-sm text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider shadow-sm">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6 md:p-8 gap-6">
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Platform & Industry */}
                  <div className="flex flex-col gap-2 py-4 border-t border-slate-200 dark:border-white/10">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm font-semibold text-slate-900 dark:text-white">{project.platform}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm text-slate-600 dark:text-slate-400">{project.industry}</span>
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div className="flex flex-col gap-3">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Key Highlights</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <svg className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Links */}
                  <div className="mt-auto flex flex-wrap gap-3">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 font-semibold text-sm transition-all"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      View Case Study
                    </Link>
                    {project.storeType !== 'none' && (
                      <a
                        href={project.storeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-700 dark:hover:bg-slate-100 font-semibold text-sm transition-all"
                      >
                        {project.storeType === 'appstore' ? (
                          <>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                            </svg>
                            App Store
                          </>
                        ) : project.storeType === 'playstore' ? (
                          <>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                            </svg>
                            Play Store
                          </>
                        ) : (
                          <>
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Live Demo
                          </>
                        )}
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50 dark:bg-white/[0.02]">
        <div className="max-w-1440px mx-auto px-4 md:px-8 lg:px-12">
          <RevealStagger className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "150+", label: "Projects Completed" },
              { value: "50+", label: "Happy Clients" },
              { value: "98%", label: "Success Rate" },
              { value: "5+", label: "Years Experience" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-2">
                <span className="text-4xl md:text-5xl font-black bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {stat.value}
                </span>
                <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">{stat.label}</span>
              </div>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Technologies Used Section */}
      <section className="py-20 bg-white dark:bg-transparent">
        <div className="max-w-1440px mx-auto px-4 md:px-8 lg:px-12">
          <RevealOnScroll className="text-center mb-12">
            <Badge variant="purple" className="mb-6">Technologies</Badge>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">
              Built with Modern Stack
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              We use cutting-edge technologies to deliver high-performance solutions
            </p>
          </RevealOnScroll>

          {/* Technology Grid with Icons */}
          <RevealStagger className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-4 md:gap-6">
            {technologies.map((tech, i) => (
              <div
                key={i}
                className="group flex flex-col items-center gap-3 p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 hover:border-slate-200 dark:hover:border-white/20 hover:shadow-lg hover:bg-white dark:hover:bg-white/10 transition-all duration-300 cursor-pointer"
              >
                <div
                  className="w-12 h-12 md:w-14 md:h-14 p-2 rounded-xl transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${tech.color}15` }}
                >
                  {tech.icon}
                </div>
                <span className="text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300 text-center leading-tight">
                  {tech.name}
                </span>
              </div>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        {/* Floating orbs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />

        <div className="relative max-w-3xl mx-auto px-4 md:px-8 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Ready to
            <span className="bg-linear-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent"> innovate?</span>
          </h2>
          <p className="text-lg text-blue-100 leading-relaxed max-w-xl mx-auto mb-10">
            Let's discuss your next project and discover how our technology solutions can transform your business efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="white"
              size="lg"
              icon={
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
            >
              Start a Project
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 hover:border-white/50"
              icon={
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              }
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

