// src/pages/Projects.jsx
import React, { useState } from "react";
import { Button, Badge } from "../components/ui";
import { technologies } from "../data/technologies";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Web Development", "Mobile Apps", "IoT", "AI/ML", "E-commerce"];

  const projects = [
    {
      id: 1,
      category: "Web Development",
      title: "E-Commerce Platform Redesign",
      description: "Complete overhaul of an outdated e-commerce platform with modern UI/UX and improved performance.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      challenge: "Slow Load Times",
      solution: "React + Next.js",
      result: "+85% Speed",
    },
    {
      id: 2,
      category: "Mobile Apps",
      title: "Healthcare Patient Portal",
      description: "Cross-platform mobile app for patients to manage appointments, view records, and communicate with doctors.",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800",
      challenge: "Poor Accessibility",
      solution: "React Native",
      result: "50K+ Users",
    },
    {
      id: 3,
      category: "IoT",
      title: "Smart Factory Monitoring",
      description: "Real-time IoT dashboard for monitoring manufacturing equipment and predictive maintenance alerts.",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
      challenge: "Manual Monitoring",
      solution: "IoT Sensors + AI",
      result: "-40% Downtime",
    },
    {
      id: 4,
      category: "AI/ML",
      title: "AI-Powered Customer Support",
      description: "Intelligent chatbot system using NLP to handle customer queries and reduce support ticket volume.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      challenge: "High Ticket Volume",
      solution: "NLP Chatbot",
      result: "70% Automation",
    },
    {
      id: 5,
      category: "E-commerce",
      title: "Multi-Vendor Marketplace",
      description: "Scalable marketplace platform supporting thousands of vendors with integrated payment processing.",
      image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800",
      challenge: "Scaling Issues",
      solution: "Microservices",
      result: "+200% Growth",
    },
    {
      id: 6,
      category: "Web Development",
      title: "Real Estate Portal",
      description: "Property listing platform with advanced search, virtual tours, and mortgage calculator integration.",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
      challenge: "Complex Search",
      solution: "Elasticsearch",
      result: "10K Listings",
    },
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-linear-to-b from-slate-50 via-white to-white py-20 lg:py-28">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-500px h-500px bg-linear-to-br from-blue-100 to-indigo-100 rounded-full blur-3xl opacity-50" />
          <div className="absolute top-1/2 -left-40 w-400px h-400px bg-linear-to-br from-purple-100 to-pink-100 rounded-full blur-3xl opacity-40" />
        </div>

        <div className="relative max-w-1440px mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="flex flex-col items-start gap-6">
              <Badge variant="green" dot animated>
                Case Studies
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
                Engineering
                <br />
                <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Success Stories
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl">
                Explore how we help industry leaders achieve operational excellence through custom technology solutions and digital transformation.
              </p>
              
              {/* Quick Stats */}
              <div className="flex gap-8 mt-4">
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-blue-600">150+</span>
                  <span className="text-sm text-slate-500">Projects</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-indigo-600">98%</span>
                  <span className="text-sm text-slate-500">Success Rate</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-purple-600">50+</span>
                  <span className="text-sm text-slate-500">Clients</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative hidden lg:block">
              <div className="relative">
                {/* Main Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Team collaboration on projects"
                    className="w-full h-450px object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/30 via-transparent to-transparent" />
                </div>

                {/* Floating Card 1 */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-linear-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">Projects Delivered</p>
                      <p className="text-xs text-slate-500">On time, every time</p>
                    </div>
                  </div>
                </div>

                {/* Floating Card 2 */}
                <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-4 border border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-linear-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">+85% Growth</p>
                      <p className="text-xs text-slate-500">Average client ROI</p>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -z-10 top-8 -right-8 w-full h-full bg-linear-to-br from-blue-100 to-indigo-100 rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Container */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-1440px mx-auto px-4 md:px-8 lg:px-12">
          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`flex h-10 items-center justify-center px-6 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25"
                    : "bg-white border border-slate-200 text-slate-600 hover:border-blue-300 hover:bg-blue-50"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="group flex flex-col rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative w-full h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/50 via-transparent to-transparent" />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-sm text-xs font-bold text-slate-900 uppercase tracking-wider shadow-sm">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6 md:p-8 gap-6">
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 py-4 border-t border-b border-dashed border-slate-200">
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Challenge
                      </span>
                      <span className="text-sm font-medium text-slate-900">
                        {project.challenge}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Solution
                      </span>
                      <span className="text-sm font-medium text-slate-900">
                        {project.solution}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Result
                      </span>
                      <span className="text-sm font-bold text-emerald-600">
                        {project.result}
                      </span>
                    </div>
                  </div>

                  {/* CTA Link */}
                  <div className="mt-auto">
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-blue-600 group-hover:gap-3 transition-all"
                    >
                      Read Case Study
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-1440px mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
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
                <span className="text-sm text-slate-600 font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Used Section */}
      <section className="py-20 bg-white">
        <div className="max-w-1440px mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-12">
            <Badge variant="purple" className="mb-6">Technologies</Badge>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              Built with Modern Stack
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We use cutting-edge technologies to deliver high-performance solutions
            </p>
          </div>

          {/* Technology Grid with Icons */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-4 md:gap-6">
            {technologies.map((tech, i) => (
              <div
                key={i}
                className="group flex flex-col items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 hover:shadow-lg hover:bg-white transition-all duration-300 cursor-pointer"
              >
                <div 
                  className="w-12 h-12 md:w-14 md:h-14 p-2 rounded-xl transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${tech.color}15` }}
                >
                  {tech.icon}
                </div>
                <span className="text-xs md:text-sm font-medium text-slate-700 text-center leading-tight">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
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

export default Projects;