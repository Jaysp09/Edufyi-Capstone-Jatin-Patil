import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import USER_CONFIG from "@/config/user";

export default function Footer() {
  return (
    <footer data-testid="footer" className="py-8 px-6 border-t border-black/[0.06] dark:border-white/[0.06]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-[#5c5c5c] dark:text-[#a1a1aa]">
            &copy; {new Date().getFullYear()} {USER_CONFIG.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="/contact-manager"
              data-testid="footer-contact-manager-link"
              className="font-body text-xs uppercase tracking-[0.1em] text-[var(--brand)] hover:text-[var(--brand-hover)] transition-colors"
            >
              Contact Manager (Project 2)
            </a>
          </div>

          <div className="flex items-center gap-4">
            {[
              { href: USER_CONFIG.github, icon: Github, testId: "footer-github" },
              { href: USER_CONFIG.linkedin, icon: Linkedin, testId: "footer-linkedin" },
              { href: `mailto:${USER_CONFIG.email}`, icon: Mail, testId: "footer-email" },
            ].map(({ href, icon: Icon, testId }) => (
              <a key={testId} data-testid={testId} href={href} target="_blank" rel="noopener noreferrer"
                className="text-[#5c5c5c] dark:text-[#a1a1aa] hover:text-[var(--brand)] transition-colors duration-150">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
