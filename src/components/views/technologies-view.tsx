"use client";

import { useState } from "react";
import MediaImage from "@/components/media-image";
// src/pages/Technologies.jsx
import { Button, Badge, RevealOnScroll, RevealStagger, Breadcrumbs, GlowingEffect, TechCard } from "@/components/ui";
import { technologies, TechIcons } from "@/components/tech-icons";

export function TechnologiesView() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Frontend", "Backend", "AI/ML", "Database", "Tools & DevOps"];

  // Categorized technologies with additional metadata
  const categorizedTechnologies = {
    Frontend: [
      {
        name: "HTML5",
        icon: TechIcons.HTML5,
        color: "#E34F26",
        type: "Markup",
        description: "The standard markup language for creating web pages and web applications."
      },
      {
        name: "CSS3",
        icon: TechIcons.CSS3,
        color: "#1572B6",
        type: "Styling",
        description: "Style sheet language for describing the presentation of web documents."
      },
      {
        name: "JavaScript",
        icon: TechIcons.JavaScript,
        color: "#F7DF1E",
        type: "Language",
        description: "High-level, dynamic programming language for interactive web development."
      },
      {
        name: "React",
        icon: TechIcons.React,
        color: "#61DAFB",
        type: "Library",
        description: "Building dynamic, high-performance interactive user interfaces for complex web applications."
      },
      {
        name: "Tailwind CSS",
        icon: TechIcons.TailwindCSS,
        color: "#06B6D4",
        type: "Framework",
        description: "A utility-first CSS framework for rapid UI development with consistent design systems."
      },
      {
        name: "Vite",
        icon: TechIcons.Vite,
        color: "#646CFF",
        type: "Build Tool",
        description: "Next generation frontend tooling for lightning fast development experience."
      },
    ],
    Backend: [
      {
        name: "Node.js",
        icon: TechIcons.NodeJS,
        color: "#339933",
        type: "Runtime",
        description: "Event-driven runtime for building scalable network applications and fast APIs."
      },
      {
        name: "Express",
        icon: TechIcons.Express,
        color: "#000000",
        type: "Framework",
        description: "Fast, unopinionated, minimalist web framework for Node.js applications."
      },
      {
        name: "Python",
        icon: TechIcons.Python,
        color: "#3776AB",
        type: "Language",
        description: "Powerful language for backend logic, data processing, and AI integration."
      },
      {
        name: "Django",
        icon: TechIcons.Django,
        color: "#092E20",
        type: "Framework",
        description: "High-level Python web framework for rapid development and clean design."
      },
    ],
    "AI/ML": [
      {
        name: "Machine Learning",
        icon: TechIcons.MachineLearning,
        color: "#FF6F00",
        type: "Domain",
        description: "Building intelligent systems that learn from data and improve over time."
      },
      {
        name: "Deep Learning",
        icon: TechIcons.DeepLearning,
        color: "#FF4081",
        type: "Domain",
        description: "Neural network architectures for complex pattern recognition and AI solutions."
      },
      {
        name: "NLP",
        icon: TechIcons.NLP,
        color: "#00BCD4",
        type: "Specialty",
        description: "Natural Language Processing for text analysis, chatbots, and language understanding."
      },
      {
        name: "Computer Vision",
        icon: TechIcons.ComputerVision,
        color: "#9C27B0",
        type: "Specialty",
        description: "Image and video analysis, object detection, and visual recognition systems."
      },
    ],
    Database: [
      {
        name: "MongoDB",
        icon: TechIcons.MongoDB,
        color: "#47A248",
        type: "NoSQL",
        description: "Flexible document-based database for modern scalable applications."
      },
      {
        name: "SQL",
        icon: TechIcons.SQL,
        color: "#4479A1",
        type: "Query Language",
        description: "Standard language for managing and manipulating relational databases."
      },
    ],
    "Tools & DevOps": [
      {
        name: "Git",
        icon: TechIcons.Git,
        color: "#F05032",
        type: "Version Control",
        description: "Distributed version control system for tracking changes in source code."
      },
      {
        name: "Docker",
        icon: TechIcons.Docker,
        color: "#2496ED",
        type: "Container",
        description: "Platform for developing, shipping, and running applications in containers."
      },
      {
        name: "Linux",
        icon: TechIcons.Linux,
        color: "#FCC624",
        type: "OS",
        description: "Open-source operating system powering servers and development environments."
      },
      {
        name: "Power BI",
        icon: TechIcons.PowerBI,
        color: "#F2C811",
        type: "Analytics",
        description: "Business analytics tool for interactive visualizations and business intelligence."
      },
      {
        name: "Advanced Excel",
        icon: TechIcons.Excel,
        color: "#217346",
        type: "Analytics",
        description: "Advanced spreadsheet capabilities for data analysis and reporting."
      },
    ],
  };

  // Section icons and colors
  const sectionConfig = {
    Frontend: { icon: "🎨", bgColor: "bg-blue-100", textColor: "text-blue-600", borderHover: "hover:border-blue-200" },
    Backend: { icon: "⚙️", bgColor: "bg-indigo-100", textColor: "text-indigo-600", borderHover: "hover:border-indigo-200" },
    "AI/ML": { icon: "🧠", bgColor: "bg-purple-100", textColor: "text-purple-600", borderHover: "hover:border-purple-200" },
    Database: { icon: "🗄️", bgColor: "bg-emerald-100", textColor: "text-emerald-600", borderHover: "hover:border-emerald-200" },
    "Tools & DevOps": { icon: "🛠️", bgColor: "bg-orange-100", textColor: "text-orange-600", borderHover: "hover:border-orange-200" },
  };

  type SectionName = keyof typeof sectionConfig;

  // Filter sections based on active filter
  const filteredSections = (activeFilter === "All"
    ? Object.entries(categorizedTechnologies)
    : Object.entries(categorizedTechnologies).filter(([key]) => key === activeFilter)
  ).filter((entry): entry is [SectionName, (typeof categorizedTechnologies)[SectionName]] => entry[0] in sectionConfig);

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-linear-to-b from-slate-50 via-white to-white dark:from-[#0a0a0a] dark:via-[#0f0f0f] dark:to-[#0a0a0a] pt-8 pb-20 lg:pb-28">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-500px h-500px bg-linear-to-br from-purple-100 to-indigo-100 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-full blur-3xl opacity-50" />
          <div className="absolute top-1/2 -left-40 w-400px h-400px bg-linear-to-br from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-full blur-3xl opacity-40" />
        </div>

        <Breadcrumbs />
        <div className="relative max-w-1440px mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <RevealOnScroll className="flex flex-col items-start gap-6">


              <Badge variant="purple" dot animated>
                Our Tech Stack
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                Powered by
                <br />
                <span className="bg-linear-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Modern Technology
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                Empowering your enterprise with cutting-edge tools, scalable frameworks, and future-proof architectures.
              </p>

              {/* Quick Stats */}
              <div className="flex gap-8 mt-4">
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-purple-600">21+</span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">Technologies</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-blue-600">5</span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">Categories</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-cyan-600">100%</span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">Industry Standard</span>
                </div>
              </div>
            </RevealOnScroll>

            {/* Right Image */}
            <RevealOnScroll animation="fade-left" className="relative hidden lg:block">
              <div className="relative">
                {/* Main Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <MediaImage
                    src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Technology and coding"
                    className="w-full h-450px object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 via-transparent to-transparent" />
                </div>

                {/* Floating Tech Icons */}
                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-white/10 rounded-xl shadow-xl dark:shadow-black/20 p-4 border border-slate-100 dark:border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-linear-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center p-2">
                      {TechIcons.React}
                    </div>
                    <div className="w-12 h-12 bg-linear-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center p-2">
                      {TechIcons.NodeJS}
                    </div>
                    <div className="w-12 h-12 bg-linear-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center p-2">
                      {TechIcons.Python}
                    </div>
                  </div>
                </div>

                {/* Floating Card */}
                <div className="absolute -top-4 -right-4 bg-white dark:bg-white/10 rounded-xl shadow-xl dark:shadow-black/20 p-4 border border-slate-100 dark:border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-linear-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">Latest Tech</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Always up-to-date</p>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -z-10 top-8 -right-8 w-full h-full bg-linear-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl" />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Technologies Container */}
      <section className="py-12 md:py-16 bg-white dark:bg-transparent">
        <div className="max-w-1440px mx-auto px-4 md:px-8 lg:px-12">
          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`flex h-10 items-center justify-center px-6 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === filter
                  ? "bg-linear-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25"
                  : "bg-white dark:bg-transparent border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:border-purple-300 dark:hover:border-purple-500/50 hover:bg-purple-50 dark:hover:bg-purple-500/10"
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Technology Sections */}
          {filteredSections.map(([sectionName, techs]) => (
            <section key={sectionName} className="mb-16">
              {/* Section Header */}
              <div className="mb-8 flex items-center gap-4">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${sectionConfig[sectionName].bgColor} ${sectionConfig[sectionName].textColor} text-2xl`}>
                  {sectionConfig[sectionName].icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{sectionName}</h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{techs.length} technologies</p>
                </div>
              </div>

              {/* Tech Cards Grid */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {techs.map((tech, index) => (
                  <div key={index} className="relative rounded-xl p-[1px] group">
                    <div className="absolute inset-0 rounded-xl">
                      <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                    </div>
                    <div
                      className={`relative h-full flex flex-col gap-4 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-zinc-900 p-6 transition-all duration-300 ${sectionConfig[sectionName].borderHover} hover:shadow-xl dark:shadow-black/30 hover:-translate-y-1`}
                    >
                      {/* Header with Icon and Badge */}
                      <div className="flex items-center justify-between">
                        <div
                          className="w-14 h-14 rounded-xl p-2.5 transition-transform duration-300 group-hover:scale-110"
                          style={{ backgroundColor: `${tech.color}15` }}
                        >
                          {tech.icon}
                        </div>
                        <span className="rounded-full bg-slate-100 dark:bg-white/10 px-3 py-1 text-xs font-semibold text-slate-600 dark:text-slate-300">
                          {tech.type}
                        </span>
                      </div>

                      {/* Content */}
                      <div>
                        <h3
                          className="text-lg font-bold text-slate-900 transition-colors duration-300"
                          onMouseEnter={(e) => { e.currentTarget.style.color = tech.color; }}
                          onMouseLeave={(e) => { e.currentTarget.style.color = ""; }}
                        >
                          {tech.name}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                          {tech.description}
                        </p>
                      </div>

                      {/* Hover indicator */}
                      <div
                        className="h-1 w-0 group-hover:w-full transition-all duration-300 rounded-full"
                        style={{ backgroundColor: tech.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50 dark:bg-white/[0.02]">
        <div className="max-w-1440px mx-auto px-4 md:px-8 lg:px-12">
          <RevealOnScroll className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">
              Why Our Tech Stack Matters
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              We carefully select technologies that deliver performance, scalability, and maintainability
            </p>
          </RevealOnScroll>

          <RevealStagger className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "99.9%", label: "Uptime Guaranteed", icon: "⚡" },
              { value: "10x", label: "Faster Development", icon: "🚀" },
              { value: "50%", label: "Cost Reduction", icon: "💰" },
              { value: "24/7", label: "Support Available", icon: "🛡️" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-sm">
                <span className="text-3xl">{stat.icon}</span>
                <span className="text-3xl md:text-4xl font-black bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  {stat.value}
                </span>
                <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">{stat.label}</span>
              </div>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* All Technologies Overview */}
      <section className="py-20 bg-white dark:bg-transparent">
        <div className="max-w-1440px mx-auto px-4 md:px-8 lg:px-12">
          <RevealOnScroll className="text-center mb-12">
            <Badge variant="blue" className="mb-6">Complete Stack</Badge>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">
              All Technologies at a Glance
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              A comprehensive view of our entire technology ecosystem
            </p>
          </RevealOnScroll>

          {/* Technology Grid with Icons */}
          <RevealStagger className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-10 gap-4 md:gap-6">
            {technologies.map((tech, i) => (
              <TechCard
                key={i}
                name={tech.name}
                color={tech.color}
                icon={tech.icon}
              />
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        {/* Floating orbs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />

        <div className="relative max-w-3xl mx-auto px-4 md:px-8 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Ready to build
            <span className="bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"> scalable solutions?</span>
          </h2>
          <p className="text-lg text-purple-100 leading-relaxed max-w-xl mx-auto mb-10">
            Let's discuss how our technology stack can empower your next enterprise project and drive innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact"
                variant="white"
                size="lg"
                icon={
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                }
              >
                Get Started
              </Button>
            <Button href="/services"
                variant="outline"
                size="lg"
                icon={
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                }
                className="border-white/30 hover:bg-white/10"
              >
                Explore Services
              </Button>
          </div>
        </div>
      </section>
    </>
  );
};

