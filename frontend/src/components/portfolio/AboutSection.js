import { motion } from "framer-motion";
import { Code2, MapPin } from "lucide-react";
import USER_CONFIG from "@/config/user";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function AboutSection() {
  return (
    <section id="about" data-testid="about-section" className="py-24 lg:py-32 px-6 bg-[#f5f5f5] dark:bg-[#121212]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left - Avatar + Identity */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} custom={0} variants={fadeUp}
          >
            <p className="section-label mb-4">// who am i</p>
            <h2 className="font-heading text-[clamp(2rem,6vw,3rem)] text-[#0a0a0a] dark:text-white mb-8">
              About Me
            </h2>

            {/* 3D Avatar */}
            <div className="flex items-center gap-5 mb-8">
              <motion.div
                className="avatar-3d avatar-glow relative"
                whileHover={{ rotateY: 15, rotateX: -5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <div className="w-20 h-20 bg-[var(--brand)] flex items-center justify-center relative overflow-hidden"
                  style={{ perspective: "800px" }}>
                  {/* Dev face with code symbols */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand)] via-[#ff6b60] to-[#cc2d22]" />
                  <div className="relative z-10 flex flex-col items-center">
                    <span className="font-heading text-white text-2xl">JP</span>
                  </div>
                  {/* Floating code particles */}
                  <motion.span
                    animate={{ y: [-5, 5, -5], opacity: [0.3, 0.7, 0.3] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="absolute top-1 right-1 text-[8px] font-body text-white/50"
                  >{`</>`}</motion.span>
                  <motion.span
                    animate={{ y: [5, -5, 5], opacity: [0.4, 0.8, 0.4] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                    className="absolute bottom-1 left-1 text-[8px] font-body text-white/40"
                  >{`{}`}</motion.span>
                </div>
              </motion.div>
              <div>
                <h3 className="font-heading text-xl text-[#0a0a0a] dark:text-white">{USER_CONFIG.name}</h3>
                <p className="font-body text-sm text-[#5c5c5c] dark:text-[#a1a1aa] flex items-center gap-1.5">
                  <MapPin size={12} /> {USER_CONFIG.location}
                </p>
              </div>
            </div>

            {/* Skill Tags */}
            <div className="flex flex-wrap gap-2">
              {["AI/ML", "Full Stack", "IoT", "Computer Vision", "Deep Learning", "DevOps"].map((tag) => (
                <span
                  key={tag}
                  className="skill-tag-hover px-3 py-2 border border-black/[0.12] dark:border-white/[0.12] font-body text-xs uppercase tracking-[0.1em] text-[#5c5c5c] dark:text-[#a1a1aa] cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right - Bio Text */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} custom={2} variants={fadeUp}
          >
            <h3 className="font-heading text-lg text-[#0a0a0a] dark:text-white mb-4">About</h3>
            <p className="font-body text-sm text-[#5c5c5c] dark:text-[#a1a1aa] leading-[1.8] mb-4">
              {USER_CONFIG.bio}
            </p>
            <p className="font-body text-sm text-[#5c5c5c] dark:text-[#a1a1aa] leading-[1.8] mb-6">
              {USER_CONFIG.bioExtended}
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: `${USER_CONFIG.projects.length}+`, label: "Projects" },
                { value: USER_CONFIG.education[0].grade.split(": ")[1], label: "CGPA" },
                { value: `${USER_CONFIG.certifications.length}+`, label: "Certs" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -3, borderColor: "var(--brand)" }}
                  className="p-4 border border-black/[0.08] dark:border-white/[0.08] transition-all duration-300"
                >
                  <p className="font-heading text-2xl text-[#0a0a0a] dark:text-white">{stat.value}</p>
                  <p className="font-body text-xs text-[#5c5c5c] dark:text-[#a1a1aa] uppercase tracking-[0.1em]">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
