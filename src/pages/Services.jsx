// src/pages/Services.jsx
import React from "react";
import Layout from "../components/Layout";
import { Button, Card, Badge } from "../components/ui";

const Services = () => {
  const coreServices = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Web Design & Development",
      description: "Web design focuses on the visual layout and user experience.",
      image: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
      link: "#web-dev",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Mobile App Development",
      description: "Designing and developing apps for iOS and Android devices",
      image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
      link: "#mobile-dev",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "IoT Solutions",
      description: "Smart IoT solutions for connected, efficient business operations.",
      image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
      link: "#iot",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: "Home Automation",
      description: "Control your home smartly, easily, and efficiently anytime.",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
      link: "#automation",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "MVP Development",
      description: "Building minimal viable products for fast launch and validation.",
      image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
      link: "#mvp",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      ),
      title: "Digital Marketing",
      description: "Promoting brands online through SEO, social media & ads.",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
      link: "#marketing",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      title: "UI/UX & Graphic Design",
      description: "Creating interfaces and visually engaging digital experiences.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
      link: "#design",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Industrial Training",
      description: "Hands-on training for industry skills and career growth.",
      image: "https://images.pexels.com/photos/1181373/pexels-photo-1181373.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
      link: "#training",
    },
  ];

  const detailedServices = [
    {
      id: "web-dev",
      category: "Development",
      title: "Professional Web Design & Development",
      description: "We create stunning, responsive websites that not only look great but drive results. Our web solutions combine modern design principles with robust development practices to deliver exceptional user experiences.",
      image: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1200",
      benefits: [
        "Responsive Design for All Devices",
        "SEO-Optimized Architecture",
        "Fast Loading Performance",
      ],
      useCases: ["E-commerce Platforms", "Corporate Websites", "Landing Pages"],
      imagePosition: "right",
    },
    {
      id: "mobile-dev",
      category: "Mobile",
      title: "Native & Cross-Platform Mobile Apps",
      description: "Build powerful mobile applications for iOS and Android. We specialize in creating intuitive, high-performance apps that engage users and drive business growth.",
      image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=1200",
      benefits: [
        "Native iOS & Android Development",
        "Cross-Platform with React Native",
        "App Store Optimization",
      ],
      useCases: ["Enterprise Apps", "Consumer Apps", "Social Platforms"],
      imagePosition: "left",
    },
    {
      id: "iot",
      category: "IoT & Smart Tech",
      title: "Smart IoT Solutions for Business",
      description: "Connect and control your devices with intelligent IoT solutions. We design and implement scalable IoT ecosystems that transform operations and create new opportunities.",
      image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=1200",
      benefits: [
        "Real-time Monitoring & Control",
        "Predictive Maintenance Systems",
        "Secure Device Management",
      ],
      useCases: ["Smart Manufacturing", "Asset Tracking", "Energy Management"],
      imagePosition: "right",
    },
  ];

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
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Text Content */}
            <div className="flex flex-col gap-8 order-2 lg:order-1 lg:col-span-5">
              <div className="flex flex-col gap-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                  Transforming Enterprise through
                  <br />
                  <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Innovation
                  </span>
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                  Comprehensive technology solutions designed for scale and security. We help businesses navigate the complex digital landscape with precision engineering.
                </p>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative order-1 lg:order-2 lg:col-span-7">
              <div className="relative w-full">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-3xl blur-2xl opacity-20" />

                <div className="relative aspect-16/10 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-900/10">
                  <img
                    alt="Modern coding workspace with multiple monitors"
                    className="w-full h-full object-cover"
                    src="https://images.pexels.com/photos/2061168/pexels-photo-2061168.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/30 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-1440px mx-auto px-4 md:px-8 lg:px-12">
          <div className="mb-12">
            <Badge variant="purple" className="mb-6">Core Capabilities</Badge>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              Full-Stack Solutions
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              Scalable, secure, and future-proof solutions tailored for modern businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreServices.map((service, i) => (
              <Card key={i} className="group p-0 overflow-hidden hover:shadow-xl hover:border-blue-200 transition-all duration-300">
                {/* Service Image */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-slate-900/20 to-transparent" />
                  {/* Icon overlay */}
                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <a
                    href={service.link}
                    className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 group-hover:gap-2 transition-all"
                  >
                    Learn more
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {detailedServices.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-24 ${index % 2 === 0 ? 'bg-slate-50' : 'bg-white'} border-t border-slate-100`}
        >
          <div className="max-w-1440px mx-auto px-4 md:px-8 lg:px-12">
            <div className={`flex flex-col lg:flex-row gap-16 items-center ${service.imagePosition === 'left' ? 'lg:flex-row-reverse' : ''}`}>
              {/* Content */}
              <div className={`w-full lg:w-1/2 ${service.imagePosition === 'left' ? 'order-2 lg:order-1' : ''}`}>
                <Badge variant="green" className="mb-4">
                  {service.category}
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6 leading-tight">
                  {service.title}
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
                    Key Benefits
                  </h4>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-slate-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
                    Common Use Cases
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.useCases.map((useCase, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm text-slate-700 font-medium hover:border-blue-300 hover:bg-blue-50 transition-colors"
                      >
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className={`w-full lg:w-1/2 ${service.imagePosition === 'left' ? 'order-1 lg:order-2' : ''}`}>
                <div className="relative group">
                  <div className="absolute -inset-4 bg-linear-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
                  <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/30 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Process Section */}
      <section className="py-20 bg-linear-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        <div className="relative max-w-1440px mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Our Development Process
            </h2>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              A proven methodology that delivers results on time and within budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your vision" },
              { step: "02", title: "Design", desc: "Creating the blueprint" },
              { step: "03", title: "Development", desc: "Building with precision" },
              { step: "04", title: "Deployment", desc: "Launching to production" },
            ].map((phase, i) => (
              <div key={i} className="relative">
                <div className="text-center">
                  <div className="text-6xl font-black text-white/10 mb-4">{phase.step}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{phase.title}</h3>
                  <p className="text-blue-200 text-sm">{phase.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 right-0 w-8 h-0.5 bg-linear-to-r from-blue-400 to-transparent transform translate-x-full -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-1440px mx-auto px-4 md:px-8 lg:px-12">
          <div className="relative rounded-3xl overflow-hidden bg-linear-to-br from-slate-900 via-blue-900 to-indigo-900 p-10 lg:p-16">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />

            <div className="relative text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                Ready to modernize your
                <span className="bg-linear-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent"> infrastructure?</span>
              </h2>
              <p className="text-lg text-slate-300 mb-10 leading-relaxed">
                Schedule a consultation with our solutions architects to discuss your specific needs and how we can help you scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="white" 
                  size="lg"
                  icon={
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  }
                >
                  Schedule Consultation
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white/30  hover:bg-white/10 hover:border-white/50"
                  icon={
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  }
                >
                  View Case Studies
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;