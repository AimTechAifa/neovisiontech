

// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = {
    Product: [
      { name: "Features", path: "/features" },
      { name: "Pricing", path: "/pricing" },
      { name: "Case Studies", path: "/projects" },
      { name: "Reviews", path: "/reviews" },
      { name: "Updates", path: "/updates" },
    ],
    Company: [
      { name: "About", path: "/about" },
      { name: "Careers", path: "/careers" },
      { name: "Press", path: "/press" },
      { name: "Partners", path: "/partners" },
      { name: "Contact", path: "/contact" },
    ],
    Resources: [
      { name: "Blog", path: "/blog" },
      { name: "Documentation", path: "/docs" },
      { name: "Help Center", path: "/help" },
      { name: "API", path: "/api" },
      { name: "Community", path: "/community" },
    ],
    Legal: [
      { name: "Privacy", path: "/privacy" },
      { name: "Terms", path: "/terms" },
      { name: "Security", path: "/security" },
      { name: "Cookies", path: "/cookies" },
      { name: "Compliance", path: "/compliance" },
    ],
  };

  const socialLinks = [
    { name: "Twitter", icon: "𝕏", href: "https://twitter.com/" },
    { name: "LinkedIn", icon: "in", href: "https://linkedin.com/" },
    { name: "GitHub", icon: "⌘", href: "https://github.com/" },
    { name: "YouTube", icon: "▶", href: "https://youtube.com/" },
  ];

  return (
    <footer className="w-full bg-slate-900 text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      
      {/* Newsletter Section */}
      <div className="max-w-1440px mx-auto px-4 md:px-8 lg:px-12 py-12 border-b border-slate-800">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start justify-between">
          <div className="max-w-md">
            <h3 className="text-xl font-bold mb-3">Stay updated with our newsletter</h3>
            <p className="text-slate-400 text-sm mb-0">Get the latest news, product updates, and industry insights delivered to your inbox.</p>
          </div>
          
          <div className="w-full md:w-auto">
            <form className="flex w-full md:w-auto max-w-md flex-col sm:flex-row gap-3">
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-1 rounded-lg border-0 bg-slate-800 px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-slate-700 placeholder:text-slate-500 focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-3 text-xs text-slate-500">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-1440px mx-auto px-4 md:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <span className="text-white font-black text-lg">N</span>
              </div>
              <span className="text-xl font-bold">
                Neo<span className="text-blue-400">Vision</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Building the future of enterprise technology with innovative solutions that scale.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <span className="text-sm font-bold">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links], i) => (
            <div key={i}>
              <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">
                {category}
              </h4>
              <ul className="space-y-3" aria-label={`${category} navigation`}>
                {links.map((link, j) => (
                  <li key={j}>
                    <Link
                      to={link.path}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-1440px mx-auto px-4 md:px-8 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              © 2024 NeoVisionTech. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                All systems operational
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-sm text-slate-500 hover:text-slate-400">Privacy</a>
                <a href="#" className="text-sm text-slate-500 hover:text-slate-400">Terms</a>
                <a href="#" className="text-sm text-slate-500 hover:text-slate-400">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;