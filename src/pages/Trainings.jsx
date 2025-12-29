// src/pages/Trainings.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Button, Badge } from "../components/ui";

const Trainings = () => {
    const trainingPrograms = [
        {
            title: "Full Stack Web Development",
            duration: "6 Months",
            level: "Beginner to Advanced",
            icon: "💻",
            color: "blue",
            topics: ["HTML/CSS/JS", "React.js", "Node.js", "MongoDB", "REST APIs"],
            price: "₹45,000"
        },
        {
            title: "Mobile App Development",
            duration: "4 Months",
            level: "Intermediate",
            icon: "📱",
            color: "indigo",
            topics: ["React Native", "Flutter", "Firebase", "App Deployment"],
            price: "₹38,000"
        },
        {
            title: "AI & Machine Learning",
            duration: "5 Months",
            level: "Advanced",
            icon: "🤖",
            color: "purple",
            topics: ["Python", "TensorFlow", "Deep Learning", "NLP", "Computer Vision"],
            price: "₹55,000"
        },
        {
            title: "Data Science & Analytics",
            duration: "4 Months",
            level: "Intermediate",
            icon: "📊",
            color: "emerald",
            topics: ["Python", "Pandas", "SQL", "Power BI", "Statistics"],
            price: "₹42,000"
        },
        {
            title: "DevOps & Cloud",
            duration: "3 Months",
            level: "Intermediate",
            icon: "☁️",
            color: "cyan",
            topics: ["Docker", "Kubernetes", "AWS", "CI/CD", "Linux"],
            price: "₹35,000"
        },
        {
            title: "UI/UX Design",
            duration: "3 Months",
            level: "Beginner",
            icon: "🎨",
            color: "pink",
            topics: ["Figma", "Adobe XD", "User Research", "Prototyping", "Design Systems"],
            price: "₹32,000"
        },
    ];

    const locations = [
        { city: "Mumbai", state: "Maharashtra", students: "500+" },
        { city: "Bangalore", state: "Karnataka", students: "800+" },
        { city: "Pune", state: "Maharashtra", students: "400+" },
        { city: "Hyderabad", state: "Telangana", students: "600+" },
        { city: "Delhi", state: "NCR", students: "700+" },
        { city: "Chennai", state: "Tamil Nadu", students: "350+" },
    ];

    const benefits = [
        {
            icon: "🎓",
            title: "Industry Expert Trainers",
            description: "Learn from professionals with 10+ years of industry experience"
        },
        {
            icon: "💼",
            title: "100% Placement Assistance",
            description: "Dedicated placement support with our partner companies"
        },
        {
            icon: "🏆",
            title: "Certification",
            description: "Industry-recognized certification upon course completion"
        },
        {
            icon: "👥",
            title: "Live Projects",
            description: "Work on real-world projects to build your portfolio"
        },
        {
            icon: "⏰",
            title: "Flexible Timings",
            description: "Weekend and weekday batches available"
        },
        {
            icon: "💻",
            title: "Modern Infrastructure",
            description: "State-of-the-art labs with latest technology"
        },
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="relative w-full overflow-hidden bg-linear-to-b from-slate-50 via-white to-white dark:from-[#0a0a0a] dark:via-[#0f0f0f] dark:to-[#0a0a0a] py-20 lg:py-28">
                {/* Background decorative elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-500px h-500px bg-linear-to-br from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-full blur-3xl opacity-50" />
                    <div className="absolute top-1/2 -left-40 w-400px h-400px bg-linear-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-full blur-3xl opacity-40" />
                </div>

                <div className="relative max-w-1440px mx-auto px-4 md:px-8 lg:px-12">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="flex flex-col items-start gap-6">
                            <Badge variant="green" dot animated>
                                Training Programs
                            </Badge>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                                Upskill Your Career with
                                <br />
                                <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                    Industry-Ready Training
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                                Expert-led training programs across India. Master in-demand technologies with hands-on projects, placement support, and industry-recognized certifications.
                            </p>

                            {/* Quick Stats */}
                            <div className="flex gap-8 mt-4">
                                <div className="flex flex-col">
                                    <span className="text-3xl font-black text-blue-600">3000+</span>
                                    <span className="text-sm text-slate-500 dark:text-slate-400">Students Trained</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-3xl font-black text-indigo-600">15+</span>
                                    <span className="text-sm text-slate-500 dark:text-slate-400">Courses</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-3xl font-black text-purple-600">6</span>
                                    <span className="text-sm text-slate-500 dark:text-slate-400">Cities</span>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <Link to="/contact">
                                    <Button variant="primary" size="lg" icon={
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    }>
                                        Enroll Now
                                    </Button>
                                </Link>
                                <Link to="/trainings">
                                    <Button variant="outline" size="lg" icon={
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    }>
                                        View All Courses
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="relative hidden lg:block">
                            <div className="relative">
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl dark:shadow-black/40">
                                    <img
                                        src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                                        alt="Students in training"
                                        className="w-full h-450px object-cover"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 via-transparent to-transparent" />
                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute -z-10 top-8 -right-8 w-full h-full bg-linear-to-br from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Training Programs */}
            <section className="py-20 bg-white dark:bg-transparent">
                <div className="max-w-1440px mx-auto px-4 md:px-8 lg:px-12">
                    <div className="text-center mb-12">
                        <Badge variant="purple" className="mb-6">Popular Courses</Badge>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">
                            Industry-Focused Training Programs
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Choose from our comprehensive range of courses designed by industry experts
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {trainingPrograms.map((program, i) => (
                            <div
                                key={i}
                                className="group flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-xl dark:shadow-black/30 hover:border-slate-300 dark:hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="p-6 flex flex-col gap-4">
                                    {/* Icon and Level */}
                                    <div className="flex items-center justify-between">
                                        <div className="text-4xl">{program.icon}</div>
                                        <Badge variant={program.color}>{program.level}</Badge>
                                    </div>

                                    {/* Title and Duration */}
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                                            {program.title}
                                        </h3>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-2">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            {program.duration}
                                        </p>
                                    </div>

                                    {/* Topics */}
                                    <div>
                                        <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
                                            What You'll Learn
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {program.topics.map((topic, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-2 py-1 rounded-md bg-slate-100 dark:bg-white/5 text-xs font-medium text-slate-700 dark:text-slate-300"
                                                >
                                                    {topic}
                                                </span>
                                            ))}
                                        </div>
                                    </div>


                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* Benefits */}
            <section className="py-20 bg-white dark:bg-transparent">
                <div className="max-w-1440px mx-auto px-4 md:px-8 lg:px-12">
                    <div className="text-center mb-12">
                        <Badge variant="emerald" className="mb-6">Why Choose Us</Badge>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">
                            Benefits of Training with NeoVisionTech
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Comprehensive training with industry-best practices and support
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((benefit, i) => (
                            <div
                                key={i}
                                className="flex items-start gap-4 p-6 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10"
                            >
                                <div className="text-3xl shrink-0">{benefit.icon}</div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">
                                        {benefit.description}
                                    </p>
                                </div>
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
                        <span className="bg-linear-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent"> transform your career?</span>
                    </h2>
                    <p className="text-lg text-blue-100 leading-relaxed max-w-xl mx-auto mb-10">
                        Join thousands of students who have successfully launched their careers with our training programs. Get started today!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                                Start Learning Today
                            </Button>
                        </Link>
                        <Link to="/contact">
                            <Button
                                variant="outline"
                                size="lg"
                                icon={
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                    </svg>
                                }
                                className="border-white/30 hover:bg-white/10"
                            >
                                Talk to Expert
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Trainings;

