// src/pages/Home.jsx
import React from "react";
import { Button, Card, Badge, SectionTitle, TechCard } from "../components/ui";
import { technologies } from "../data/technologies";

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
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: "Cloud Architecture",
    description: "Secure cloud migration, serverless computing, and multi-cloud management strategies.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Custom Software",
    description: "Tailored software solutions, API integrations, and legacy system modernization.",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "AI & Machine Learning",
    description: "Predictive modeling, automation bots, and natural language processing integration.",
    gradient: "from-violet-500 to-pink-500",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Data Analytics",
    description: "Actionable insights from your data with real-time dashboards and reporting tools.",
    gradient: "from-emerald-500 to-teal-500",
  },
];

const projects = [
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["FinTech", "Mobile App"],
    title: "Global Payment Infrastructure",
    description: "Re-engineering a legacy payment gateway to support multi-currency transactions with 99.99% uptime.",
    stats: { value: "10K+", label: "Transactions/sec" },
  },
  {
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
    tags: ["IoT", "Manufacturing"],
    title: "Smart Factory Automation",
    description: "Implementing IoT sensors and predictive maintenance algorithms to reduce downtime by 40%.",
    stats: { value: "40%", label: "Downtime Reduced" },
  },
];

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900">

      <main className="flex-1">

{/* Hero Section with fixed alignment */}
<section className="relative w-full overflow-hidden  bg-linear-to-b from-slate-50 via-white to-white">
  {/* Background decorative elements */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute -top-40 -right-40 w-500px h-500px  bg-linear-to-br from-blue-100 to-indigo-100 rounded-full blur-3xl opacity-50" />
    <div className="absolute top-1/2 -left-40 w-400px h-400px  bg-linear-to-br from-purple-100 to-pink-100 rounded-full blur-3xl opacity-40" />
    <div className="absolute bottom-0 right-1/3 w-300px h-300px  bg-linear-to-br from-cyan-100 to-blue-100 rounded-full blur-3xl opacity-30" />
  </div>

  <div className="relative max-w-1440px mx-auto px-4 md:px-8 lg:px-12 py-16 lg:py-20">
    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

      {/* Left: Text Content - 5 columns */}
      <div className="flex flex-col gap-8 order-2 lg:order-1 lg:col-span-5">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">
            Innovating
            <br />
            <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Tomorrow
            </span>
            <br />
            with Smart
            <br />
            Technology
          </h1>
          <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
            Enterprise-grade digital transformation solutions designed for
            scalability, security, and peak performance.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <Button variant="primary" size="lg" icon={<ArrowIcon />}>
            Schedule a Consultation
          </Button>
          <Button variant="outline" size="lg" icon={<PlayIcon />} iconPosition="left">
            Watch Demo
          </Button>
        </div>
      </div>

      {/* Right: Image - 7 columns */}
      <div className="relative order-1 lg:order-2 lg:col-span-7 lg:-mt-10">
        <div className="relative w-full">
          {/* Glow effect */}
          <div className="absolute -inset-4 bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-3xl blur-2xl opacity-20" />

          {/* Floating stat cards - smaller and better positioned */}
          <div
            className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl p-3 border border-slate-100"
            style={{ animation: 'bounce 3s infinite' }}
          >
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <span className="block text-xl font-black text-slate-900">99%</span>
                <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wide">Uptime</span>
              </div>
            </div>
          </div>

          <div
            className="absolute bottom-4 right-4 z-20 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl p-3 border border-slate-100"
            style={{ animation: 'bounce 4s infinite 1s' }}
          >
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-linear-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <span className="block text-xl font-black text-emerald-600">+40%</span>
                <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wide">Growth</span>
              </div>
            </div>
          </div>

          {/* Main Image - larger and fills the space */}
          <div className="relative aspect-16/10 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-900/10">
            <img
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
        <section id="services" className="relative w-full py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <SectionTitle
              badge="Our Expertise"
              title="Enterprise Solutions for the"
              highlightedText="Modern Age"
              description="Scalable and secure technologies tailored specifically for your business growth and operational efficiency."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, i) => (
                <Card key={i} className="group">
                  <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br ${service.gradient} text-white shadow-lg mb-5`}>
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <button className="inline-flex items-center gap-1 text-sm font-semibold text-slate-600 group-hover:text-blue-600 transition-colors">
                    Learn more
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="technologies" className="relative w-full py-24 bg-white">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />
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
        <section id="projects" className="relative w-full py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
              <div>
                <div className="mb-4">
                  <Badge variant="green">Case Studies</Badge>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900">
                  Selected Projects
                </h2>
              </div>
              <Button variant="outline" size="md" icon={<ArrowIcon />}>
                View All Projects
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project, i) => (
                <div
                  key={i}
                  className="group relative rounded-3xl overflow-hidden bg-white border border-slate-200 hover:border-transparent shadow-sm hover:shadow-2xl transition-all duration-500"
                >
                  <div className="relative h-64 lg:h-72 overflow-hidden">
                    <img
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
                        <span key={j} className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <button className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 group/btn">
                      Read Case Study
                      <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
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
        <section className="relative w-full py-24 bg-white">
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
                  <Button variant="white" size="lg" icon={<ArrowIcon />}>
                    Get Started Now
                  </Button>
                  <Button
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

      </main>


    </div>
  );
};

export default Home;



