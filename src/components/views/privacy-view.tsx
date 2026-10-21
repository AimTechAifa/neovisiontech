// src/pages/PrivacyPolicy.jsx
import { publishedClaims } from "@/content/claims";
import { Badge, Breadcrumbs } from "@/components/ui";

export function PrivacyView() {
    return (
        <div className="pt-24 pb-16 min-h-screen bg-slate-50 dark:bg-[#0a0a0a]">
            <Breadcrumbs />
            <div className="max-w-4xl mx-auto px-4 md:px-8">
                <div className="text-center mb-12">
                    <Badge variant="blue" className="mb-4">Legal</Badge>
                    <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400">
                        Last updated: {publishedClaims.privacyUpdatedLabel}
                    </p>
                </div>

                <div className="bg-white dark:bg-white/5 rounded-2xl p-8 md:p-12 shadow-sm border border-slate-200 dark:border-white/10 prose prose-slate dark:prose-invert max-w-none">
                    <p className="text-lg leading-relaxed mb-8">
                        This Privacy Policy explains how we collect, use, disclose, and protect your information when you visit our website or use our services.
                    </p>

                    <section className="mb-8">
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">1. Information We Collect</h2>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            We may collect personal information such as name, email address, phone number, and other details you voluntarily provide. We may also collect non-personal information such as browser type, IP address, and usage data.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">2. How We Use Your Information</h2>
                        <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-300">
                            <li>To provide and maintain our services</li>
                            <li>To communicate with you</li>
                            <li>To improve our website and services</li>
                            <li>To comply with legal obligations</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">3. Sharing of Information</h2>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            We do not sell or rent your personal data. Information may be shared only when required by law or to protect our legal rights.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">4. Data Security</h2>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            We implement reasonable security measures to protect your data. However, no method of transmission over the internet is completely secure.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">5. Children's Privacy</h2>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            Our services are not intended for children under the age of 13.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">6. Changes to This Policy</h2>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            We may update this Privacy Policy from time to time. Changes will be posted on this page.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">7. Contact Us</h2>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            If you have any questions about this Privacy Policy, please contact us at:
                            <br />
                            <a href="mailto:contact@neovisiontech.in" className="text-blue-600 hover:underline">contact@neovisiontech.in</a>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

