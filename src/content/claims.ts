import { CONTENT_UPDATED_AT } from "@/content/revision";

/**
 * Marketing claims copied from the previous site. Several contradict each other
 * (founding year versus "5+ years", 500+ versus 150+ projects, 15+ versus 21
 * courses, uptime). Compliance wording is a capability, not a certification.
 * They stay out of JSON-LD. The owner must verify every figure.
 * Do not copy these strings into JSON-LD.
 */
export const publishedClaims = {
  foundingYear: "2014",
  aboutFoundingParagraph:
    "Founded in 2014, NeoVisionTech began with a simple premise: enterprise software shouldn't be cumbersome. Over the last decade, we have expanded our footprint across three continents, serving Fortune 500 companies and agile startups alike. Our growth is a testament to our core belief that technology serves people, not the other way around.",
  aboutStats: [
    { value: "500+", label: "Projects Delivered" },
    { value: "50+", label: "Enterprise Clients" },
    { value: "10", label: "Years Experience" },
  ],
  projectHeroStats: [
    { value: "150+", label: "Projects" },
    { value: "98%", label: "Success Rate" },
    { value: "50+", label: "Clients" },
  ],
  projectFooterStats: [
    { value: "150+", label: "Projects Completed" },
    { value: "50+", label: "Happy Clients" },
    { value: "98%", label: "Success Rate" },
    { value: "5+", label: "Years Experience" },
  ],
  projectRoiLabel: "+85% Growth",
  homepagePromo: "Limited spots for Q1 2025",
  homepageUptime: { value: "99%", label: "Uptime" },
  homepageGrowth: { value: "+40%", label: "Growth" },
  trustBadges: [
    { icon: "🔒", text: "Designed for SOC 2-style controls" },
    { icon: "⚡", text: "Uptime targets agreed per engagement" },
    { icon: "🌍", text: "GDPR-aligned system design" },
  ],
  trainingHeroStats: [
    { value: "3000+", label: "Students Trained" },
    { value: "15+", label: "Courses" },
    { value: "6", label: "Cities" },
  ],
  technologyOutcomes: [
    { value: "99.9%", label: "Uptime target, not a certificate", icon: "⚡" },
    { value: "10x", label: "Faster Development", icon: "🚀" },
    { value: "50%", label: "Cost Reduction", icon: "💰" },
    { value: "24/7", label: "Support Available", icon: "🛡️" },
  ],
  privacyUpdatedLabel: "December 29, 2025",
  privacyUpdatedAt: CONTENT_UPDATED_AT,
} as const;
