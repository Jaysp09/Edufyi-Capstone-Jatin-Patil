import { Github, Linkedin, Mail } from "lucide-react";
import USER_CONFIG from "@/config/user";

export default function FooterSimple() {
  return (
    <footer className="py-8 px-6 border-t border-black/[0.06] dark:border-white/[0.06]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Copyright */}
          <p className="font-body text-sm text-[#5c5c5c] dark:text-[#a1a1aa]">
            &copy; {new Date().getFullYear()} {USER_CONFIG.name}. All rights reserved.
          </p>

          {/* ❌ NO CONTACT MANAGER LINK HERE */}

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[
              { href: USER_CONFIG.github, icon: Github },
              { href: USER_CONFIG.linkedin, icon: Linkedin },
              { href: `mailto:${USER_CONFIG.email}`, icon: Mail },
            ].map(({ href, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5c5c5c] dark:text-[#a1a1aa] hover:text-[var(--brand)] transition-colors duration-150"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}