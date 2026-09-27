import type { Training } from "@/content/types";
import MediaImage from "@/components/media-image";
import { Button, Badge, RevealOnScroll, Breadcrumbs } from "@/components/ui";
import SmartRoadmap from "@/components/smart-roadmap";
import { CheckCircle2, Clock, BarChart, Users, Star, BookOpen, Key, DollarSign } from "lucide-react";

export function TrainingDetailView({ training }: { training: Training }) {
    return (
        <>

            {/* Hero Section */}
            <section className="relative pt-8 pb-20 bg-slate-50 dark:bg-[#0a0a0a] overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-b from-blue-50/50 to-transparent dark:from-blue-900/10 dark:to-transparent pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
                    <Breadcrumbs />

                    <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
                        <RevealOnScroll className="flex flex-col gap-6">
                            <div className="flex flex-wrap gap-3">
                                <Badge variant="blue">{training.category}</Badge>
                                <Badge variant="outline" className="border-yellow-500/50 text-yellow-600 dark:text-yellow-400">
                                    <Star className="w-3.5 h-3.5 mr-1 fill-current" /> {training.rating} Rating
                                </Badge>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-tight">
                                {training.title}
                            </h1>

                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
                                {training.shortDescription}
                            </p>

                            <div className="flex flex-wrap gap-6 text-sm text-slate-600 dark:text-slate-400 py-4 border-y border-slate-200 dark:border-white/10">
                                <div className="flex items-center gap-2">
                                    <Clock className="w-5 h-5 text-blue-600" />
                                    <span>{training.duration}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <BarChart className="w-5 h-5 text-purple-600" />
                                    <span>{training.level}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Users className="w-5 h-5 text-emerald-600" />
                                    <span>{training.students} Enrolled</span>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4 mt-2">
                                <Button href="/contact" size="lg" className="bg-blue-600 hover:bg-blue-700 text-white min-w-[180px]">
                                        Enroll Now
                                    </Button>
                                <Button href="#curriculum" variant="outline" size="lg">
                                        View Curriculum
                                    </Button>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll animation="fade-left" className="relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl dark:shadow-blue-900/20 aspect-video lg:aspect-square max-h-[500px]">
                                <MediaImage
                                    src={training.heroImage}
                                    alt={training.title}
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent" />

                                {/* Float Card */}
                                <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 text-white">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-wider text-blue-200">Course Fee</p>
                                            <p className="text-2xl font-bold">{training.price}</p>
                                        </div>
                                        <div className="bg-white/20 p-2 rounded-lg">
                                            <DollarSign className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            {/* Overview & What you'll learn */}
            <section className="py-20 bg-white dark:bg-[#0a0a0a]">
                <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-12">
                            <RevealOnScroll>
                                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                                    <BookOpen className="w-8 h-8 text-blue-600" />
                                    Course Overview
                                </h2>
                                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed whitespace-pre-line mb-8">
                                    {training.fullDescription}
                                </p>

                                <div className="mb-12">
                                    <SmartRoadmap topic={training.title} category={training.category} />
                                </div>
                            </RevealOnScroll>

                            <RevealOnScroll id="curriculum">
                                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-8">
                                    Curriculum & Syllabus
                                </h2>
                                <div className="grid gap-4">
                                    {training.topics.map((topic, index) => (
                                        <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 hover:border-blue-500/30 transition-colors">
                                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center font-bold text-sm">
                                                {index + 1}
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{topic}</h3>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </RevealOnScroll>

                            <RevealOnScroll>
                                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-8">
                                    Key Outcomes
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {training.outcomes.map((outcome, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                                            <p className="text-slate-600 dark:text-slate-400">{outcome}</p>
                                        </div>
                                    ))}
                                </div>
                            </RevealOnScroll>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-8">
                                {/* Technologies */}
                                <div className="bg-slate-50 dark:bg-white/5 p-6 rounded-2xl border border-slate-200 dark:border-white/10">
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                                        <Key className="w-5 h-5 text-purple-500" />
                                        Technologies Covered
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {training.technologies.map((tech, i) => (
                                            <span key={i} className="px-3 py-1 bg-white dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA Box */}
                                <div className="bg-linear-to-br from-blue-900 to-indigo-900 p-8 rounded-2xl text-white text-center shadow-xl">
                                    <h3 className="text-xl font-bold mb-4">Ready to start learning?</h3>
                                    <p className="text-blue-100 mb-8 text-sm">Join {training.students} students currently enrolled in this course.</p>
                                    <Button href="/contact" className="w-full bg-white text-blue-900 hover:bg-blue-50 font-bold border-none">
                                            Get Syllabus & Pricing
                                        </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Programs or Call to Action could go here */}
        </>
    );
};

