// src/pages/ServiceDetail.jsx
import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Button, Badge, RevealOnScroll, RevealStagger, GlassCard, Breadcrumbs } from "../components/ui";
import { getServiceBySlug, servicesData } from "../data/servicesData";
import { ArrowRight, CheckCircle2, ArrowLeft } from "lucide-react";
import SEO from "../components/SEO";

const ServiceDetail = () => {
    const { slug } = useParams();
    const service = getServiceBySlug(slug);

    // Redirect to services page if service not found
    if (!service) {
        return <Navigate to="/services" replace />;
    }

    // Get related services (same category, excluding current)
    const relatedServices = servicesData
        .filter(s => s.category === service.category && s.slug !== service.slug)
        .slice(0, 3);

    return (
        <div className="min-h-screen">
            <SEO
                title={service.metaTitle}
                description={service.metaDescription}
                canonical={`https://neovisiontech.com/services/${service.slug}`}
                ogImage={service.heroImage}
            />
            {/* Hero Section */}
            <section className="relative w-full overflow-hidden bg-linear-to-b from-slate-50 via-white to-white dark:from-[#0a0a0a] dark:via-[#0f0f0f] dark:to-[#0a0a0a] pt-8 pb-20 lg:pb-28">
                {/* Background decorative elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-500px h-500px bg-linear-to-br from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-full blur-3xl opacity-50" />
                    <div className="absolute top-1/2 -left-40 w-400px h-400px bg-linear-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-full blur-3xl opacity-40" />
                </div>

                <Breadcrumbs items={[
                    { label: "Home", path: "/" },
                    { label: "Services", path: "/services" },
                    { label: service.title, path: null }
                ]} />

                <div className="relative max-w-1440px mx-auto px-4 md:px-8 lg:px-12">


                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Left Content */}
                        <RevealOnScroll className="flex flex-col items-start gap-6">
                            <Badge variant="blue">{service.category}</Badge>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                                {service.title}
                            </h1>
                            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                                {service.shortDescription}
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link to="/contact">
                                    <Button variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                                        Get Started
                                    </Button>
                                </Link>
                                <Link to="/projects">
                                    <Button variant="outline" size="lg" className="dark:border-white/10 dark:text-white">
                                        View Projects
                                    </Button>
                                </Link>
                            </div>
                        </RevealOnScroll>

                        {/* Right Image */}
                        <RevealOnScroll animation="fade-left" className="relative hidden lg:block">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-3xl blur-2xl opacity-20 dark:opacity-40" />
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                    <img
                                        src={service.heroImage}
                                        alt={service.title}
                                        className="w-full h-400px object-cover"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 via-transparent to-transparent" />
                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            {/* Full Description */}
            <section className="py-20 bg-white dark:bg-transparent">
                <div className="max-w-1440px mx-auto px-4 md:px-8 lg:px-12">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <RevealOnScroll className="lg:col-span-2">
                            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-6">
                                Overview
                            </h2>
                            <div className="prose prose-lg dark:prose-invert max-w-none">
                                {service.fullDescription.split('\n\n').map((para, i) => (
                                    <p key={i} className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                                        {para}
                                    </p>
                                ))}
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll animation="fade-left">
                            <div className="bg-slate-50 dark:bg-white/5 rounded-2xl p-6 border border-slate-200 dark:border-white/10">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Technologies Used</h3>
                                <div className="flex flex-wrap gap-2">
                                    {service.technologies.map((tech, i) => (
                                        <span key={i} className="px-3 py-1.5 rounded-lg bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 text-sm font-medium text-slate-700 dark:text-slate-300">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-slate-50 dark:bg-white/[0.02]">
                <div className="max-w-1440px mx-auto px-4 md:px-8 lg:px-12">
                    <RevealOnScroll className="text-center mb-12">
                        <Badge variant="green" className="mb-4">Benefits</Badge>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">
                            Why Choose This Service
                        </h2>
                    </RevealOnScroll>

                    <RevealStagger className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {service.benefits.map((benefit, i) => (
                            <GlassCard key={i} className="p-6">
                                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4">
                                    <CheckCircle2 className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{benefit.title}</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">{benefit.description}</p>
                            </GlassCard>
                        ))}
                    </RevealStagger>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-20 bg-white dark:bg-transparent">
                <div className="max-w-1440px mx-auto px-4 md:px-8 lg:px-12">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <RevealOnScroll>
                            <Badge variant="purple" className="mb-4">Applications</Badge>
                            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6">
                                Use Cases & Applications
                            </h2>
                            <div className="grid grid-cols-2 gap-4">
                                {service.useCases.map((useCase, i) => (
                                    <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                                        <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{useCase}</span>
                                    </div>
                                ))}
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll animation="fade-left">
                            <div className="bg-linear-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-2xl p-8 text-white">
                                <h3 className="text-2xl font-bold mb-6">Our Process</h3>
                                <div className="space-y-4">
                                    {service.process.map((step, i) => (
                                        <div key={i} className="flex items-start gap-4">
                                            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0 text-sm font-bold">
                                                {i + 1}
                                            </div>
                                            <div>
                                                <h4 className="font-bold mb-1">{step.step}</h4>
                                                <p className="text-sm text-blue-100">{step.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-20 bg-slate-50 dark:bg-white/[0.02]">
                <div className="max-w-1440px mx-auto px-4 md:px-8 lg:px-12">
                    <RevealOnScroll className="text-center mb-12">
                        <Badge variant="blue" className="mb-4">FAQs</Badge>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">
                            Frequently Asked Questions
                        </h2>
                    </RevealOnScroll>

                    <RevealStagger className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {service.faqs.map((faq, i) => (
                            <div key={i} className="bg-white dark:bg-white/5 p-6 rounded-xl border border-slate-200 dark:border-white/10">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">{faq.question}</h3>
                                <p className="text-slate-600 dark:text-slate-400">{faq.answer}</p>
                            </div>
                        ))}
                    </RevealStagger>
                </div>
            </section>

            {/* Related Services */}
            {relatedServices.length > 0 && (
                <section className="py-20 bg-white dark:bg-transparent">
                    <div className="max-w-1440px mx-auto px-4 md:px-8 lg:px-12">
                        <RevealOnScroll className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">
                                Related Services
                            </h2>
                        </RevealOnScroll>

                        <RevealStagger className="grid md:grid-cols-3 gap-6">
                            {relatedServices.map((s, i) => (
                                <Link key={i} to={`/services/${s.slug}`}>
                                    <GlassCard className="p-6 h-full hover:border-blue-500/50 transition-colors">
                                        <Badge variant="blue" className="mb-4">{s.category}</Badge>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{s.title}</h3>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">{s.shortDescription}</p>
                                    </GlassCard>
                                </Link>
                            ))}
                        </RevealStagger>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="py-20 bg-linear-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />

                <div className="relative max-w-3xl mx-auto px-4 md:px-8 lg:px-12 text-center">
                    <RevealOnScroll>
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                            Ready to Get Started?
                        </h2>
                        <p className="text-lg text-blue-100 mb-8">
                            Let's discuss how {service.title.toLowerCase()} can transform your business.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact">
                                <Button variant="white" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                                    Contact Us Today
                                </Button>
                            </Link>
                            <Link to="/services">
                                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" icon={<ArrowLeft className="w-5 h-5" />}>
                                    View All Services
                                </Button>
                            </Link>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetail;
