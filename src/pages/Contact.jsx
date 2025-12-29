// src/pages/Contact.jsx
import React from "react";
import { Button, Badge } from "../components/ui";

const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-linear-to-b from-slate-50 via-white to-white dark:from-[#0a0a0a] dark:via-[#0f0f0f] dark:to-[#0a0a0a] py-20 lg:py-28">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-500px h-500px bg-linear-to-br from-purple-100 to-indigo-100 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-full blur-3xl opacity-50" />
          <div className="absolute top-1/2 -left-40 w-400px h-400px bg-linear-to-br from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-full blur-3xl opacity-40" />
        </div>

        <div className="relative max-w-1440px mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="flex flex-col items-start gap-6">
              {/* Breadcrumbs */}
              {/* <nav className="flex items-center gap-2 text-sm text-slate-500">
                <a href="/" className="hover:text-blue-600 transition-colors">Home</a>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span className="font-medium text-slate-900">Contact Us</span>
              </nav> */}

              <Badge variant="blue" dot animated>
                Get in Touch
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                Let's Build the
                <br />
                <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Future Together
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                Reach out to our enterprise team for inquiries, technical support, or strategic partnership opportunities. We usually respond within 24 hours.
              </p>

              {/* Quick Contact Buttons */}
              <div className="flex flex-wrap gap-4 mt-4">
                <a
                  href="mailto:enterprise@neovisiontech.com"
                  className="inline-flex items-center gap-2 h-11 px-5 rounded-lg bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/20 transition-colors text-sm font-medium"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  enterprise@neovisiontech.com
                </a>
                <a
                  href="tel:+15550123456"
                  className="inline-flex items-center gap-2 h-11 px-5 rounded-lg bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/20 transition-colors text-sm font-medium"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +1 (555) 012-3456
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative hidden lg:block">
              <div className="relative">
                {/* Main Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Team collaboration meeting"
                    className="w-full h-450px object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 via-transparent to-transparent" />
                </div>

                {/* Floating Chat Card */}
                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-white/10 rounded-xl shadow-xl dark:shadow-black/20 p-4 border border-slate-100 dark:border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-linear-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">24/7 Support</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">We're here to help</p>
                    </div>
                  </div>
                </div>

                {/* Floating Response Card */}
                <div className="absolute -top-4 -right-4 bg-white dark:bg-white/10 rounded-xl shadow-xl dark:shadow-black/20 p-4 border border-slate-100 dark:border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-linear-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">Fast Response</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Within 24 hours</p>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -z-10 top-8 -right-8 w-full h-full bg-linear-to-br from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white dark:bg-transparent">
        <div className="max-w-1440px mx-auto px-4 md:px-8 lg:px-12">
          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Contact Form (Span 7) */}
            <div className="lg:col-span-7">
              <div className="bg-white dark:bg-white/5 rounded-xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-white/10">
                <form className="flex flex-col gap-6">
                  {/* Row 1 */}
                  <div className="flex flex-col md:flex-row gap-6">
                    <label className="flex flex-col flex-1">
                      <span className="text-slate-900 dark:text-white text-sm font-semibold mb-2">Full Name</span>
                      <input
                        type="text"
                        className="form-input w-full rounded-lg border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-white/5 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 h-12 px-4 text-base placeholder:text-slate-500 dark:placeholder:text-slate-400 text-slate-900 dark:text-white transition-all"
                        placeholder="Jane Doe"
                      />
                    </label>
                    <label className="flex flex-col flex-1">
                      <span className="text-slate-900 text-sm font-semibold mb-2">Work Email</span>
                      <input
                        type="email"
                        className="form-input w-full rounded-lg border-slate-300 bg-slate-50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 h-12 px-4 text-base placeholder:text-slate-500 text-slate-900 transition-all"
                        placeholder="jane@company.com"
                      />
                    </label>
                  </div>

                  {/* Row 2 */}
                  <div className="flex flex-col md:flex-row gap-6">
                    <label className="flex flex-col flex-1">
                      <span className="text-slate-900 text-sm font-semibold mb-2">Company Name</span>
                      <input
                        type="text"
                        className="form-input w-full rounded-lg border-slate-300 bg-slate-50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 h-12 px-4 text-base placeholder:text-slate-500 text-slate-900 transition-all"
                        placeholder="Acme Corp"
                      />
                    </label>
                    <label className="flex flex-col flex-1">
                      <span className="text-slate-900 text-sm font-semibold mb-2">Job Title</span>
                      <input
                        type="text"
                        className="form-input w-full rounded-lg border-slate-300 bg-slate-50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 h-12 px-4 text-base placeholder:text-slate-500 text-slate-900 transition-all"
                        placeholder="CTO"
                      />
                    </label>
                  </div>

                  {/* Row 3 */}
                  <div className="flex flex-col md:flex-row gap-6">
                    <label className="flex flex-col flex-1">
                      <span className="text-slate-900 text-sm font-semibold mb-2">Inquiry Type</span>
                      <select className="form-select w-full rounded-lg border-slate-300 bg-slate-50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 h-12 px-4 text-base text-slate-900 transition-all appearance-none pr-10">
                        <option disabled selected value="">Select an option</option>
                        <option value="sales">Enterprise Sales</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="support">Technical Support</option>
                        <option value="press">Media & Press</option>
                      </select>
                    </label>
                    <label className="flex flex-col flex-1">
                      <span className="text-slate-900 text-sm font-semibold mb-2">Company Size</span>
                      <select className="form-select w-full rounded-lg border-slate-300 bg-slate-50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 h-12 px-4 text-base text-slate-900 transition-all appearance-none">
                        <option disabled selected value="">Select size</option>
                        <option value="1-50">1 - 50 employees</option>
                        <option value="51-200">51 - 200 employees</option>
                        <option value="201-1000">201 - 1000 employees</option>
                        <option value="1000+">1000+ employees</option>
                      </select>
                    </label>
                  </div>

                  {/* Message Area */}
                  <label className="flex flex-col w-full">
                    <span className="text-slate-900 text-sm font-semibold mb-2">How can we help?</span>
                    <textarea
                      className="form-textarea w-full rounded-lg border-slate-300 bg-slate-50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 min-h-140px p-4 text-base placeholder:text-slate-500 text-slate-900 transition-all resize-y"
                      placeholder="Tell us more about your project needs..."
                    ></textarea>
                  </label>

                  {/* Submit Action */}
                  <div className="pt-2">
                    <Button
                      className="w-full md:w-auto min-w-160px h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold flex items-center justify-center gap-2"
                      icon={
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                        </svg>
                      }
                    >
                      Send Message
                    </Button>
                    <p className="text-xs text-slate-500 mt-3">By submitting this form, you agree to our <a className="underline hover:text-blue-600" href="#">Privacy Policy</a>.</p>
                  </div>
                </form>
              </div>
            </div>

            {/* Right Column: Info Sidebar (Span 5) */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              {/* Contact Info Blocks */}
              <div className="flex flex-col gap-8 px-2 md:px-6">
                {/* Address */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-slate-200 text-blue-600">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-1">Headquarters</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      123 Innovation Drive,<br />
                      Tech Valley, CA 94043<br />
                      United States
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-slate-200 text-blue-600">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-bold text-lg mb-1">Email Us</h3>
                    <p className="text-slate-600 mb-1">
                      For general inquiries:
                    </p>
                    <a className="text-blue-600 font-medium hover:underline" href="mailto:hello@neovisiontech.com">hello@neovisiontech.com</a>
                    <p className="text-slate-600 mt-2 mb-1">
                      For enterprise sales:
                    </p>
                    <a className="text-blue-600 font-medium hover:underline" href="mailto:enterprise@neovisiontech.com">enterprise@neovisiontech.com</a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-slate-200 text-blue-600">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-bold text-lg mb-1">Call Us</h3>
                    <p className="text-slate-600 mb-1">
                      Mon-Fri from 8am to 6pm PST.
                    </p>
                    <a className="text-blue-600 font-medium hover:underline" href="tel:+15550123456">+1 (555) 012-3456</a>
                  </div>
                </div>
              </div>

              {/* Map Section */}
              <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm mt-4 relative group h-64 w-full">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAG94YMWTGGulWk1t9rVXX_4boCz9Lq-n2u1RM9HIq1Xmuxnyqd4MgYDF3dvijgRbJxPKwJK877jkhuYp3DOPa52jOgYNttHhqfAQw0fakxde1UhJGwnJlt4O3lKDpfjvOOgNXVnDs0S76Th6TGOpDjPWV0mETh3xZ8YNQt2LFI2L4wGsQ5yrXNWoazUIsnNQINKOdr5lxFA3jAo8XzWngOtSAzn9z1KIj0CxiO2Vpo2IrdiOH6Ywl2AG5bivqXD4eBfx6sZsDIMg"
                  alt="Map location of NeoVisionTech Headquarters"
                  className="object-cover w-full h-full grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transform -translate-y-2 group-hover:translate-y-0 transition-transform">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm font-bold">View on Map</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-slate-50 dark:bg-white/[0.02]">
        <div className="max-w-1440px mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-12">
            <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold uppercase tracking-wider mb-8">Trusted by industry leaders for data security & reliability</p>

            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              {/* Using Icon based placeholders for logos */}
              <div className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
                Pyramid
              </div>
              <div className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                InfiniteLoop
              </div>
              <div className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                HexaTech
              </div>
              <div className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                BoltShift
              </div>
              <div className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                GlobalBank
              </div>
            </div>
          </div>

          {/* Additional Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white dark:bg-white/5 p-6 rounded-xl border border-slate-200 dark:border-white/10 shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Data Security</h3>
              <p className="text-slate-600 dark:text-slate-400">Enterprise-grade security with ISO 27001 and SOC 2 compliance for all client data.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-purple-100 text-purple-600 rounded-full mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Clear Terms</h3>
              <p className="text-slate-600">Transparent contracts and SLAs with no hidden fees or complicated terms.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-emerald-100 text-emerald-600 rounded-full mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Fast Response</h3>
              <p className="text-slate-600">Dedicated account managers and support team with 99.9% uptime guarantee.</p>
            </div>
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
            Ready for
            <span className="bg-linear-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent"> rapid response?</span>
          </h2>
          <p className="text-lg text-blue-100 leading-relaxed max-w-xl mx-auto mb-10">
            Fill out our contact form and get a personalized solution designed for your specific business requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="white"
              size="lg"
              icon={
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              }
            >
              Schedule a Demo
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30  hover:bg-white/10 hover:border-white/50"
              icon={
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              }
            >
              Call Sales
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-transparent">
        <div className="max-w-1440px mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <Badge variant="green" className="mb-4">FAQs</Badge>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Find quick answers to common questions about our services, pricing, and support
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-50 dark:bg-white/5 p-6 rounded-xl border border-slate-200 dark:border-white/10">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">What industries do you specialize in?</h3>
              <p className="text-slate-600 dark:text-slate-400">We work across multiple sectors including finance, healthcare, retail, manufacturing, and government, with specialized teams dedicated to each vertical.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Do you offer custom development services?</h3>
              <p className="text-slate-600">Yes, we provide end-to-end custom software development with dedicated teams, agile methodology, and a focus on your specific business requirements.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">What support options are available?</h3>
              <p className="text-slate-600">We offer tiered support packages including standard (8/5), premium (16/7), and enterprise (24/7) with dedicated account managers and SLAs.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">How is pricing structured?</h3>
              <p className="text-slate-600">We offer flexible pricing models including subscription-based, project-based, and time-and-materials. Each solution is tailored to your specific needs.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;