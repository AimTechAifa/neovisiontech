import type { Project } from "@/content/types";
import Link from "next/link";
import MediaImage from "@/components/media-image";
import { Button, Badge, RevealOnScroll, RevealStagger, GlassCard, Breadcrumbs } from "@/components/ui";
import { ArrowRight, ArrowLeft, ExternalLink, CheckCircle2, Quote } from "lucide-react";

export function ProjectDetailView({
    project,
    relatedProjects,
}: {
    project: Project;
    relatedProjects: Project[];
}) {

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative w-full overflow-hidden bg-linear-to-b from-slate-50 via-white to-white dark:from-[#0a0a0a] dark:via-[#0f0f0f] dark:to-[#0a0a0a] pt-8 pb-20 lg:pb-28">
                {/* Background decorative elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-500px h-500px bg-linear-to-br from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-full blur-3xl opacity-50" />
                    <div className="absolute top-1/2 -left-40 w-400px h-400px bg-linear-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-full blur-3xl opacity-40" />
                </div>

                <Breadcrumbs items={[
                    { label: "Home", path: "/" },
                    { label: "Projects", path: "/projects" },
                    { label: project.title, path: null }
                ]} />

                <div className="relative max-w-1440px mx-auto px-4 md:px-8 lg:px-12">


                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Left Content */}
                        <RevealOnScroll className="flex flex-col items-start gap-6">
                            <div className="flex flex-wrap gap-2">
                                <Badge variant="blue">{project.category}</Badge>
                                <Badge variant="purple">{project.platform}</Badge>
                            </div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                                {project.title}
                            </h1>
                            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                                {project.shortDescription}
                            </p>

                            {/* Project Meta */}
                            <div className="flex flex-wrap gap-6 text-sm">
                                <div>
                                    <span className="text-slate-500 dark:text-slate-400">Industry</span>
                                    <p className="font-semibold text-slate-900 dark:text-white">{project.industry}</p>
                                </div>
                                <div>
                                    <span className="text-slate-500 dark:text-slate-400">Duration</span>
                                    <p className="font-semibold text-slate-900 dark:text-white">{project.duration}</p>
                                </div>
                                <div>
                                    <span className="text-slate-500 dark:text-slate-400">Year</span>
                                    <p className="font-semibold text-slate-900 dark:text-white">{project.year}</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                {project.storeType !== 'none' && project.storeLink && (
                                    <Button href={project.storeLink} variant="primary" size="lg" icon={<ExternalLink className="w-5 h-5" />}>
                                            {project.storeType === 'appstore' ? 'View on App Store' :
                                                project.storeType === 'playstore' ? 'View on Play Store' : 'View Live Project'}
                                        </Button>
                                )}
                                <Button href="/contact" variant="outline" size="lg" className="dark:border-white/10 dark:text-white">
                                        Start Similar Project
                                    </Button>
                            </div>
                        </RevealOnScroll>

                        {/* Right Image */}
                        <RevealOnScroll animation="fade-left" className="relative hidden lg:block">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-3xl blur-2xl opacity-20 dark:opacity-40" />
                                <div className="relative h-400px rounded-2xl overflow-hidden shadow-2xl">
                                    <MediaImage
                                        src={project.heroImage}
                                        alt={project.title}
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 via-transparent to-transparent" />
                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            {/* Results Section */}
            <section className="py-16 bg-linear-to-br from-slate-900 via-blue-900 to-indigo-900">
                <div className="max-w-1440px mx-auto px-4 md:px-8 lg:px-12">
                    <RevealStagger className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {project.results.map((result, i) => (
                            <div key={i} className="group">
                                <p className="text-4xl lg:text-5xl font-black text-white mb-2 group-hover:scale-110 transition-transform">
                                    {result.value}
                                </p>
                                <p className="text-sm text-blue-200 font-medium">{result.metric}</p>
                                <p className="text-xs text-blue-300 mt-1">{result.description}</p>
                            </div>
                        ))}
                    </RevealStagger>
                </div>
            </section>

            {/* Challenge & Solution */}
            <section className="py-20 bg-white dark:bg-transparent">
                <div className="max-w-1440px mx-auto px-4 md:px-8 lg:px-12">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Challenge */}
                        <RevealOnScroll>
                            <Badge variant="red" className="mb-4">The Challenge</Badge>
                            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-6">
                                Understanding the Problem
                            </h2>
                            <div className="prose dark:prose-invert max-w-none">
                                {project.challenge.split('\n\n').map((para, i) => (
                                    <p key={i} className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                                        {para}
                                    </p>
                                ))}
                            </div>
                        </RevealOnScroll>

                        {/* Solution */}
                        <RevealOnScroll animation="fade-left">
                            <Badge variant="green" className="mb-4">Our Solution</Badge>
                            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-6">
                                How We Solved It
                            </h2>
                            <div className="prose dark:prose-invert max-w-none">
                                {project.solution.split('\n\n').map((para, i) => (
                                    <p key={i} className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                                        {para}
                                    </p>
                                ))}
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            {/* Features & Tech Stack */}
            <section className="py-20 bg-slate-50 dark:bg-white/[0.02]">
                <div className="max-w-1440px mx-auto px-4 md:px-8 lg:px-12">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Key Features */}
                        <RevealOnScroll>
                            <Badge variant="blue" className="mb-4">Features</Badge>
                            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-6">
                                Key Features Delivered
                            </h2>
                            <div className="space-y-4">
                                {project.features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10">
                                        <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                                        <span className="font-medium text-slate-700 dark:text-slate-300">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </RevealOnScroll>

                        {/* Technologies */}
                        <RevealOnScroll animation="fade-left">
                            <Badge variant="purple" className="mb-4">Tech Stack</Badge>
                            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-6">
                                Technologies Used
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                {project.technologies.map((tech, i) => (
                                    <span key={i} className="px-4 py-2 rounded-lg bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 text-sm font-semibold text-slate-700 dark:text-slate-300">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Testimonial */}
                            {project.testimonial && (
                                <div className="mt-8 bg-linear-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-2xl p-6 text-white">
                                    <Quote className="w-8 h-8 text-blue-400 mb-4" />
                                    <p className="text-lg italic mb-4">{project.testimonial.quote}</p>
                                    <div>
                                        <p className="font-bold">{project.testimonial.author}</p>
                                        <p className="text-sm text-blue-200">{project.testimonial.company}</p>
                                    </div>
                                </div>
                            )}
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            {/* Related Projects */}
            {relatedProjects.length > 0 && (
                <section className="py-20 bg-white dark:bg-transparent">
                    <div className="max-w-1440px mx-auto px-4 md:px-8 lg:px-12">
                        <RevealOnScroll className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">
                                Similar Projects
                            </h2>
                        </RevealOnScroll>

                        <RevealStagger className="grid md:grid-cols-3 gap-6">
                            {relatedProjects.map((p, i) => (
                                <Link key={i} href={`/projects/${p.slug}`}>
                                    <GlassCard className="p-0 overflow-hidden h-full hover:border-blue-500/50 transition-colors">
                                        <div className="relative h-48 overflow-hidden">
                                            <MediaImage src={p.heroImage} alt={p.title} className="w-full h-full object-cover" />
                                            <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent" />
                                            <Badge variant="blue" className="absolute top-4 left-4">{p.category}</Badge>
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{p.title}</h3>
                                            <p className="text-sm text-slate-600 dark:text-slate-400">{p.shortDescription}</p>
                                        </div>
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
                            Ready to Build Something Amazing?
                        </h2>
                        <p className="text-lg text-blue-100 mb-8">
                            Let's create a success story for your business like we did for {project.title.split(' – ')[0]}.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button href="/contact" variant="white" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                                    Start Your Project
                                </Button>
                            <Button href="/projects" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" icon={<ArrowLeft className="w-5 h-5" />}>
                                    View All Projects
                                </Button>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>
        </div>
    );
};

