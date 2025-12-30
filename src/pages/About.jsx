// src/pages/About.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, Badge, RevealOnScroll, RevealStagger, Breadcrumbs } from "../components/ui";
import SEO from "../components/SEO";

const About = () => {
  // Team members data
  const teamMembers = [
    {
      name: "Mohammed Noushad Siddqui",
      role: "CEO & Founder",
      image: "/ceo-image.png",
    },
    {
      name: "Mohd Shamsher Siddiqui ",
      role: "Managing Director",
      image: "/md-image.png",
    },
    {
      name: " Dinesh Adabala ",
      role: "Sr. Java Developer",
      // image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    },
    {
      name: "Mohd Naveed ",
      role: "Full Stack Developer ",
      // image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    }
  ];

  const stats = [
    { value: "500+", label: "Projects Delivered" },
    { value: "50+", label: "Enterprise Clients" },
    { value: "10", label: "Years Experience" }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#0a0a0a] text-slate-900 dark:text-white">
      <SEO
        title="About Us | NeoVisionTech"
        description="Learn about NeoVisionTech, our mission, vision, and the expert team driving digital transformation across industries."
        canonical="https://neovisiontech.com/about"
      />


      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full overflow-hidden bg-linear-to-b from-slate-50 via-white to-white dark:from-[#0a0a0a] dark:via-[#0f0f0f] dark:to-[#0a0a0a] pt-8">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-500px h-500px  bg-linear-to-br from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-full blur-3xl opacity-50" />
            <div className="absolute top-1/2 -left-40 w-400px h-400px  bg-linear-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-full blur-3xl opacity-40" />
          </div>

          <Breadcrumbs />

          <div className="relative max-w-1440px mx-auto px-4 md:px-8 lg:px-12 pb-16 lg:pb-20">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left: Text Content */}
              <div className="flex flex-col gap-8 order-2 lg:order-1 lg:col-span-5">
                <RevealOnScroll className="flex flex-col gap-6">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                    Innovating for
                    <br />
                    <span className=" bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      Tomorrow
                    </span>
                  </h1>
                  <p className="text-lg text-slate-600 dark:text-slate-300 max-w-lg leading-relaxed">
                    NeoVisionTech partners with global enterprises to drive digital transformation through scalable, intelligent infrastructure. We build the systems that power the future.
                  </p>
                </RevealOnScroll>

                <div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/services">
                      <Button
                        variant="primary"
                        size="lg"
                        icon={
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        }
                      >
                        View Our Solutions
                      </Button>
                    </Link>
                    <Link to="/contact">
                      <Button
                        variant="white"
                        size="lg"
                        icon={
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        }
                      >
                        Get in Touch
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right: Image */}
              <RevealOnScroll animation="fade-left" className="relative order-1 lg:order-2 lg:col-span-7">
                <div className="relative w-full">
                  {/* Glow effect */}
                  <div className="absolute -inset-4  bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-3xl blur-2xl opacity-20 dark:opacity-40" />

                  <div className="relative aspect-16/10 rounded-3xl overflow-hidden shadow-2xl dark:shadow-black/40 ring-1 ring-slate-900/10 dark:ring-white/10">
                    <img
                      alt="Modern bright corporate office interior"
                      className="w-full h-full object-cover"
                      src="https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1"
                    />
                    <div className="absolute inset-0  bg-linear-to-t from-slate-900/30 via-transparent to-transparent" />
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="w-full bg-slate-50 dark:bg-white/[0.02] py-16 lg:py-24">
          <div className="max-w-1440px mx-auto px-4 md:px-8 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <RevealOnScroll className="flex flex-col gap-6">
                <div>
                  <Badge variant="blue" className="mb-6">Our Story</Badge>
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">
                    From Startup to Global Partner
                  </h2>
                  <div className="w-20 h-1  bg-linear-to-r from-blue-600 to-indigo-600 rounded-full mb-6"></div>
                </div>

                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                  From a garage startup to a global technology partner, our journey has been defined by a relentless pursuit of innovation. We help businesses navigate complexity and build resilient digital futures.
                </p>
                <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                  Founded in 2014, NeoVisionTech began with a simple premise: enterprise software shouldn't be cumbersome. Over the last decade, we have expanded our footprint across three continents, serving Fortune 500 companies and agile startups alike. Our growth is a testament to our core belief that technology serves people, not the other way around.
                </p>
              </RevealOnScroll>

              <RevealOnScroll animation="fade-left" className="relative">
                <div className="relative group">
                  {/* Decorative element */}
                  <div className="absolute -bottom-6 -left-6 w-32 h-32  bg-linear-to-br from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl -z-10"></div>
                  <div className="absolute -top-6 -right-6 w-24 h-24  bg-linear-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl -z-10"></div>

                  <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-xl">
                    <img
                      alt="Collaborative team meeting in modern tech office"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                    />
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="w-full py-16 lg:py-24 bg-white dark:bg-transparent">
          <div className="max-w-1440px mx-auto px-4 md:px-8 lg:px-12">
            <div className="flex flex-col gap-12">
              <RevealOnScroll>
                <Badge variant="purple" className="mb-6">Philosophy</Badge>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">
                  Driven by Purpose and Precision
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
                  We don't just write code; we architect solutions that stand the test of time.
                </p>
              </RevealOnScroll>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Mission Card */}
                <Card className="group hover:shadow-xl p-8">
                  <div className="w-14 h-14 rounded-2xl  bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Our Mission</h3>
                  <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                    At Neo Vision Tech, our mission is to unleash the transformative power of cutting-edge technology, crafting innovative and scalable solutions that revolutionize everyday life and fuel unstoppable business growth. We're dedicated to delivering unparalleled excellence through IoT, AI, Cloud, and software innovations, all while championing sustainability and empowering communities to flourish in the vibrant digital age.
                  </p>
                </Card>

                {/* Vision Card */}
                <Card className="group hover:shadow-xl p-8">
                  <div className="w-14 h-14 rounded-2xl  bg-linear-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Our Vision</h3>
                  <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                    We envision a future where digital infrastructure becomes as seamless and essential as the air we breathe—intelligent, adaptive, and universally accessible. Our goal is to democratize advanced technology, enabling businesses of every size to compete globally without barriers. By bridging the gap between human potential and artificial intelligence, we aspire to create a connected ecosystem where innovation thrives, efficiency is maximized, and technical friction is a relic of the past.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative w-full py-16 overflow-hidden  bg-linear-to-br from-slate-900 via-blue-900 to-indigo-900">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />

          <div className="relative max-w-1440px mx-auto px-4 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {stats.map((stat, i) => (
                <div key={i} className="group">
                  <p className="text-5xl lg:text-6xl font-black text-white mb-2 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </p>
                  <p className="text-blue-200 text-lg font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="w-full py-20 bg-white dark:bg-transparent">
          <div className="max-w-1440px mx-auto px-4 md:px-8 lg:px-12">
            <div className="flex flex-col gap-12">
              <RevealOnScroll>
                <Badge variant="green" className="mb-6">Leadership</Badge>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">Meet Our Team</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
                  Our diverse team brings together decades of experience in software engineering, product design, and strategic consulting.
                </p>
              </RevealOnScroll>

              <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member, i) => (
                  <div key={i} className="group">
                    <div className="relative overflow-hidden rounded-2xl mb-4">
                      <div className="aspect-square w-full bg-slate-200">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="absolute inset-0  bg-linear-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{member.name}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{member.role}</p>
                  </div>
                ))}
              </RevealStagger>
            </div>
          </div>
        </section>

        {/* Careers CTA */}
        <section className="w-full py-20 bg-slate-50 dark:bg-white/[0.02]">
          <div className="max-w-1440px mx-auto px-4 md:px-8 lg:px-12">
            <div className="relative rounded-3xl overflow-hidden  bg-linear-to-br from-slate-900 via-blue-900 to-indigo-900 p-10 lg:p-16">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

              <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex flex-col gap-4 max-w-xl">
                  <h2 className="text-3xl md:text-4xl font-black text-white">
                    Ready to make an
                    <span className=" bg-linear-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent"> impact?</span>
                  </h2>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    We are always looking for visionary talent to join our team. Explore career opportunities at NeoVisionTech.
                  </p>
                </div>
                <Link to="/contact">
                  <Button
                    variant="white"
                    size="lg"
                    icon={
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    }
                  >
                    View Open Positions
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>


    </div>
  );
};

export default About;