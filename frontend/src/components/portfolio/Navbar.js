import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X, Download } from "lucide-react";
import { useTheme } from "@/context/ThemeProvider";
import USER_CONFIG from "@/config/user";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ onAdminClick }) {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = NAV_ITEMS.map((item) => item.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      data-testid="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-[#050505]/95 backdrop-blur-md border-b border-black/[0.08] dark:border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollTo("#home"); }}
            data-testid="nav-logo"
            className="font-heading text-xl text-[#0a0a0a] dark:text-white hover:text-[var(--brand)] transition-colors duration-150"
          >
            JP
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                data-testid={`nav-${item.label.toLowerCase()}`}
                onClick={() => scrollTo(item.href)}
                className={`relative font-body text-xs uppercase tracking-[0.1em] transition-colors duration-150 ${
                  activeSection === item.href.replace("#", "")
                    ? "text-[#0a0a0a] dark:text-white"
                    : "text-[#5c5c5c] dark:text-[#a1a1aa] hover:text-[#0a0a0a] dark:hover:text-white"
                }`}
              >
                {item.label}
                {activeSection === item.href.replace("#", "") && (
                  <motion.span
                    layoutId="navUnderline"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-[var(--brand)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <button
              data-testid="admin-nav-btn"
              onClick={onAdminClick}
              className="hidden lg:block font-body text-xs uppercase tracking-[0.05em] px-4 py-2 border border-black/[0.12] dark:border-white/[0.12] text-[#5c5c5c] dark:text-[#a1a1aa] hover:border-[var(--brand)] hover:text-[var(--brand)] transition-all duration-150"
            >
              Admin
            </button>
            <button
              data-testid="theme-toggle-btn"
              onClick={toggleTheme}
              className="w-10 h-10 flex items-center justify-center border border-black/[0.12] dark:border-white/[0.12] hover:border-[var(--brand)] hover:text-[var(--brand)] transition-all duration-150 text-[#0a0a0a] dark:text-white"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <a
              data-testid="resume-download-btn"
              href={USER_CONFIG.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 font-body text-xs uppercase tracking-[0.1em] px-4 py-2.5 bg-[var(--brand)] text-white hover:bg-[var(--brand-hover)] transition-colors duration-150"
            >
              <Download size={13} />
              Resume
            </a>
            <button
              data-testid="mobile-menu-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center border border-black/[0.12] dark:border-white/[0.12] text-[#0a0a0a] dark:text-white"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-[#050505] border-b border-black/[0.08] dark:border-white/[0.06]"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.href}
                  data-testid={`mobile-nav-${item.label.toLowerCase()}`}
                  onClick={() => scrollTo(item.href)}
                  className={`text-left px-3 py-3 font-body text-xs uppercase tracking-[0.1em] transition-colors ${
                    activeSection === item.href.replace("#", "")
                      ? "text-[var(--brand)]"
                      : "text-[#5c5c5c] dark:text-[#a1a1aa]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                data-testid="mobile-admin-btn"
                onClick={() => { setMobileOpen(false); onAdminClick(); }}
                className="text-left px-3 py-3 font-body text-xs uppercase tracking-[0.05em] text-[#5c5c5c] dark:text-[#a1a1aa]"
              >
                Admin
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
