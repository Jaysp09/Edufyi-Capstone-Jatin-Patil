import { motion } from "framer-motion";
import USER_CONFIG from "@/config/user";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function SkillsSection() {
  const categories = Object.entries(USER_CONFIG.skills);

  return (
    <section id="skills" data-testid="skills-section" className="py-24 lg:py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} custom={0} variants={fadeUp}
          className="mb-12"
        >
          <p className="section-label mb-4">// tech stack</p>
          <h2 className="font-heading text-[clamp(2rem,6vw,3rem)] text-[#0a0a0a] dark:text-white">
            Skills
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map(([category, skills], catIdx) => (
            <motion.div
              key={category}
              initial="hidden" whileInView="visible" viewport={{ once: true }} custom={catIdx + 1} variants={fadeUp}
              whileHover={{ borderColor: "var(--brand)" }}
              className="p-5 border border-black/[0.08] dark:border-white/[0.08] transition-all duration-300 group"
            >
              <h3 className="font-body text-xs uppercase tracking-[0.1em] text-[var(--brand)] font-bold mb-4 group-hover:text-[var(--brand-hover)] transition-colors">
                {category}
              </h3>
              <ul className="space-y-1.5">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="font-body text-sm text-[#5c5c5c] dark:text-[#a1a1aa] hover:text-[#0a0a0a] dark:hover:text-white transition-colors duration-150 cursor-default"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
