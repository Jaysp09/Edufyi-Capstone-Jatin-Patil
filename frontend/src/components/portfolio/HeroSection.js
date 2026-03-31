import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronRight } from "lucide-react";
import USER_CONFIG from "@/config/user";

export default function HeroSection() {
  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative min-h-screen flex items-center pt-20 grid-bg noise-overlay"
    >
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="section-label mb-4"
        >
          // welcome to my portfolio
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-[clamp(3rem,10vw,5rem)] leading-[0.9] text-[#0a0a0a] dark:text-white mb-6"
        >
          {USER_CONFIG.name}
        </motion.h1>

        {/* Subtitle Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center gap-4 flex-wrap mb-6"
        >
          <span className="font-heading text-2xl text-[var(--brand)]">
            {USER_CONFIG.role}
          </span>
          <span className="text-[#5c5c5c] dark:text-[#a1a1aa]">|</span>
          <span className="font-body text-sm text-[#5c5c5c] dark:text-[#a1a1aa]">
            {USER_CONFIG.location}
          </span>
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="font-body text-sm text-[#5c5c5c] dark:text-[#a1a1aa] max-w-[600px] leading-[1.8] mb-8"
        >
          {USER_CONFIG.tagline}
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex gap-4 mb-8"
        >
          {[
            { href: USER_CONFIG.github, icon: Github, testId: "hero-github-link" },
            { href: USER_CONFIG.linkedin, icon: Linkedin, testId: "hero-linkedin-link" },
            { href: `mailto:${USER_CONFIG.email}`, icon: Mail, testId: "hero-email-link" },
          ].map(({ href, icon: Icon, testId }) => (
            <a
              key={testId}
              data-testid={testId}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center border border-black/[0.12] dark:border-white/[0.12] text-[#5c5c5c] dark:text-[#a1a1aa] hover:border-[var(--brand)] hover:text-[var(--brand)] transition-all duration-150"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap gap-4"
        >
          <a
            data-testid="hero-projects-btn"
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.1em] px-6 py-3.5 bg-[var(--brand)] text-white hover:bg-[var(--brand-hover)] transition-colors duration-150"
          >
            View Projects <ChevronRight size={14} />
          </a>
          <a
            data-testid="hero-contact-btn"
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.1em] px-6 py-3.5 border border-black/[0.12] dark:border-white/[0.12] text-[#0a0a0a] dark:text-white hover:border-[var(--brand)] hover:text-[var(--brand)] transition-all duration-150"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
