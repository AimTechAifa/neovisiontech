// src/pages/Contact.jsx
import React from "react";
import { Button, Badge, RevealOnScroll, RevealStagger, Breadcrumbs } from "../components/ui";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { servicesData } from "../data/servicesData";
import { trainingPrograms } from "../data/trainingsData";
import { toast } from "sonner";
import SEO from "../components/SEO";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    inquiry_type: "services", // 'services' or 'training'
    selected_option: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleInquiryTypeChange = (type) => {
    setFormData(prev => ({
      ...prev,
      inquiry_type: type,
      selected_option: "" // Reset option when type changes
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // EmailJS Configuration
    // Service ID: service_oleawv6 (Provided by User)
    // Template ID: template_geiyxdp
    // Public Key: uWBmiP3N7yVSPkTRu

    emailjs
      .sendForm(
        "service_oleawv6",
        "template_geiyxdp",
        form.current,
        { publicKey: "uWBmiP3N7yVSPkTRu" }
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Message sent successfully! We'll get back to you soon.");
          setFormData({
            user_name: "",
            user_email: "",
            user_phone: "",
            inquiry_type: "services",
            selected_option: "",
            message: ""
          });
        },
        (error) => {
          setLoading(false);
          console.error("FAILED...", error.text);
          toast.error("Failed to send message. Please try again later.");
        }
      );
  };
  return (
    <>
      <SEO
        title="Contact Us | NeoVisionTech"
        description="Get in touch with NeoVisionTech for your next project. We are ready to help you with web development, mobile apps, and AI solutions."
        canonical="https://neovisiontech.com/contact"
      />
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
                  href="mailto:contact@neovisiontech.in"
                  className="inline-flex items-center gap-2 h-11 px-5 rounded-lg bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/20 transition-colors text-sm font-medium"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  contact@neovisiontech.in
                </a>
                <a
                  href="tel:+919644435690"
                  className="inline-flex items-center gap-2 h-11 px-5 rounded-lg bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/20 transition-colors text-sm font-medium"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +91 96444 35690
                </a>
              </div>
            </RevealOnScroll>

            {/* Right Image */}
            <RevealOnScroll animation="fade-left" className="relative hidden lg:block">
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
            </RevealOnScroll>
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
                <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {/* Row 1: Name & Email */}
                  <div className="flex flex-col md:flex-row gap-6">
                    <label className="flex flex-col flex-1">
                      <span className="text-slate-900 dark:text-white text-sm font-semibold mb-2">Full Name</span>
                      <input
                        type="text"
                        name="user_name"
                        value={formData.user_name}
                        onChange={handleChange}
                        required
                        className="form-input w-full rounded-lg border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-white/5 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 h-12 px-4 text-base placeholder:text-slate-500 dark:placeholder:text-slate-400 text-slate-900 dark:text-white transition-all"
                        placeholder="John Doe"
                      />
                    </label>
                    <label className="flex flex-col flex-1">
                      <span className="text-slate-900 dark:text-white text-sm font-semibold mb-2">Email Address</span>
                      <input
                        type="email"
                        name="user_email"
                        value={formData.user_email}
                        onChange={handleChange}
                        required
                        className="form-input w-full rounded-lg border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-white/5 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 h-12 px-4 text-base placeholder:text-slate-500 dark:placeholder:text-slate-400 text-slate-900 dark:text-white transition-all"
                        placeholder="john@example.com"
                      />
                    </label>
                  </div>

                  {/* Row 2: Phone & Inquiry Type */}
                  <div className="flex flex-col md:flex-row gap-6">
                    <label className="flex flex-col flex-1">
                      <span className="text-slate-900 dark:text-white text-sm font-semibold mb-2">Phone Number</span>
                      <input
                        type="tel"
                        name="user_phone"
                        value={formData.user_phone}
                        onChange={handleChange}
                        required
                        className="form-input w-full rounded-lg border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-white/5 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 h-12 px-4 text-base placeholder:text-slate-500 dark:placeholder:text-slate-400 text-slate-900 dark:text-white transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </label>
                  </div>

                  {/* Inquiry Type Selection */}
                  <div className="flex flex-col gap-3">
                    <span className="text-slate-900 dark:text-white text-sm font-semibold">What are you looking for?</span>
                    <div className="flex flex-wrap gap-4">
                      <label className={`flex items-center gap-3 px-5 py-3 rounded-lg border cursor-pointer transition-all ${formData.inquiry_type === 'services' ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-500 dark:border-blue-400' : 'bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 hover:border-blue-300'}`}>
                        <input
                          type="radio"
                          name="inquiry_type"
                          value="services"
                          checked={formData.inquiry_type === 'services'}
                          onChange={() => handleInquiryTypeChange('services')}
                          className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-slate-900 dark:text-white font-medium">IT Services</span>
                      </label>
                      <label className={`flex items-center gap-3 px-5 py-3 rounded-lg border cursor-pointer transition-all ${formData.inquiry_type === 'training' ? 'bg-purple-50 dark:bg-purple-900/20 border-purple-500 dark:border-purple-400' : 'bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 hover:border-purple-300'}`}>
                        <input
                          type="radio"
                          name="inquiry_type"
                          value="training"
                          checked={formData.inquiry_type === 'training'}
                          onChange={() => handleInquiryTypeChange('training')}
                          className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                        />
                        <span className="text-slate-900 dark:text-white font-medium">Industrial Training</span>
                      </label>
                    </div>
                  </div>

                  {/* Dynamic Dropdown */}
                  <label className="flex flex-col w-full">
                    <span className="text-slate-900 dark:text-white text-sm font-semibold mb-2">
                      {formData.inquiry_type === 'services' ? 'Select Service Requirement' : 'Select Training Program'}
                    </span>
                    <select
                      name="selected_option"
                      value={formData.selected_option}
                      onChange={handleChange}
                      required
                      className="form-select w-full rounded-lg border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-white/5 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 h-12 px-4 text-base text-slate-900 dark:text-white transition-all appearance-none"
                    >
                      <option value="" disabled>Select an option</option>
                      {formData.inquiry_type === 'services' ? (
                        servicesData.map((service, index) => (
                          <option key={index} value={service.title} className="dark:bg-slate-900">
                            {service.title}
                          </option>
                        ))
                      ) : (
                        trainingPrograms.map((program, index) => (
                          <option key={index} value={program.title} className="dark:bg-slate-900">
                            {program.title}
                          </option>
                        ))
                      )}
                    </select>
                  </label>

                  {/* Message Area */}
                  <label className="flex flex-col w-full">
                    <span className="text-slate-900 dark:text-white text-sm font-semibold mb-2">Message</span>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="form-textarea w-full rounded-lg border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-white/5 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 min-h-140px p-4 text-base placeholder:text-slate-500 dark:placeholder:text-slate-400 text-slate-900 dark:text-white transition-all resize-y"
                      placeholder="Tell us more about your requirements..."
                    ></textarea>
                  </label>

                  {/* Submit Action */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full md:w-auto min-w-160px h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                          </svg>
                        </>
                      )}
                    </Button>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-3">
                      By submitting this form, you agree to our <a className="underline hover:text-blue-600" href="#">Privacy Policy</a>.
                    </p>
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
                    <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-1">Office & Training Center</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Lalbihara, Near Rajasthan Sweet House,<br />
                      Kanpur Road, Bamrauli,<br />
                      Prayagraj, Uttar Pradesh, India
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
                    <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-1">Email Us</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-1">
                      General inquiries:
                    </p>
                    <a className="text-blue-600 font-medium hover:underline" href="mailto:contact@neovisiontech.in">contact@neovisiontech.in</a>
                    <p className="text-slate-600 dark:text-slate-400 mt-2 mb-1">
                      Technical support:
                    </p>
                    <a className="text-blue-600 font-medium hover:underline" href="mailto:support@neovisiontech.in">support@neovisiontech.in</a>
                    <p className="text-slate-600 dark:text-slate-400 mt-2 mb-1">
                      CEO:
                    </p>
                    <a className="text-blue-600 font-medium hover:underline" href="mailto:naushad@neovisiontech.in">naushad@neovisiontech.in</a>
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
                    <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-1">Call Us</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-1">
                      Mon-Fri from 9am to 6pm IST
                    </p>
                    <a className="text-blue-600 font-medium hover:underline block" href="tel:+919644435690">+91 96444 35690</a>
                    <a className="text-blue-600 font-medium hover:underline block mt-1" href="tel:+917974492357">+91 79744 92357</a>
                  </div>
                </div>
              </div>

              {/* Map Section */}
              <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-sm mt-4 relative h-64 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.2!2d81.7337!3d25.4358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399acb00c33e9d57%3A0x7c9e3cd8e36a7b4e!2sGrand%20Trunk%20Rd%2C%20Bamrauli%2C%20Prayagraj%2C%20Uttar%20Pradesh%20211012!5e0!3m2!1sen!2sin!4v1703927000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="NeoVisionTech Office Location - Bamrauli, Prayagraj"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-slate-50 dark:bg-white/[0.02]">
        <div className="max-w-1440px mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-12">
            <Badge variant="blue" className="mb-4">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">
              What Sets Us Apart
            </h2>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-white/5 p-6 rounded-xl border border-slate-200 dark:border-white/10 shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Data Security</h3>
              <p className="text-slate-600 dark:text-slate-400">Enterprise-grade security with industry best practices for all client data.</p>
            </div>

            <div className="bg-white dark:bg-white/5 p-6 rounded-xl border border-slate-200 dark:border-white/10 shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Clear Terms</h3>
              <p className="text-slate-600 dark:text-slate-400">Transparent contracts with no hidden fees or complicated terms.</p>
            </div>

            <div className="bg-white dark:bg-white/5 p-6 rounded-xl border border-slate-200 dark:border-white/10 shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Fast Response</h3>
              <p className="text-slate-600 dark:text-slate-400">Dedicated support team with quick turnaround times.</p>
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

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-slate-50 dark:bg-white/5 p-6 rounded-xl border border-slate-200 dark:border-white/10 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">What industries do you specialize in?</h3>
              <p className="text-slate-600 dark:text-slate-400">We work across multiple sectors including finance, healthcare, retail, manufacturing, and education with specialized teams dedicated to each vertical.</p>
            </div>

            <div className="bg-slate-50 dark:bg-white/5 p-6 rounded-xl border border-slate-200 dark:border-white/10 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Do you offer custom development services?</h3>
              <p className="text-slate-600 dark:text-slate-400">Yes, we provide end-to-end custom software development with dedicated teams, agile methodology, and a focus on your specific business requirements.</p>
            </div>

            <div className="bg-slate-50 dark:bg-white/5 p-6 rounded-xl border border-slate-200 dark:border-white/10 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">What support options are available?</h3>
              <p className="text-slate-600 dark:text-slate-400">We offer tiered support packages including standard, premium, and enterprise levels with dedicated account managers.</p>
            </div>

            <div className="bg-slate-50 dark:bg-white/5 p-6 rounded-xl border border-slate-200 dark:border-white/10 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">How is pricing structured?</h3>
              <p className="text-slate-600 dark:text-slate-400">We offer flexible pricing models including subscription-based, project-based, and time-and-materials. Each solution is tailored to your specific needs.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;