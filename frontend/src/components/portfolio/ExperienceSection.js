import { motion, useInView } from "framer-motion";
import { Briefcase, ExternalLink, GraduationCap, MapPin } from "lucide-react";
import { useRef } from "react";
import USER_CONFIG from "@/config/user";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

function TimelineNode({ edu, index, isLast }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden" whileInView="visible" viewport={{ once: true }} custom={index} variants={fadeUp}
      className="relative pl-8 pb-8"
    >
      {/* Vertical line */}
      {!isLast && (
        <div className="absolute left-[5px] top-3 bottom-0 w-px bg-black/[0.08] dark:bg-white/[0.08]">
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="w-full bg-[var(--brand)]"
          />
        </div>
      )}

      {/* Node dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.2, type: "spring" }}
        className="absolute left-0 top-0 w-[12px] h-[12px] border-2 border-[var(--brand)] bg-white dark:bg-[#050505]"
      />

      {/* Content */}
      <motion.div
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2 }}
        className="cursor-default"
      >
        <span className="font-body text-xs text-[var(--brand)] tracking-[0.1em]">{edu.year}</span>
        <h3 className="font-heading text-lg text-[#0a0a0a] dark:text-white mt-1 mb-0.5">{edu.degree}</h3>
        <p className="font-body text-sm text-[#5c5c5c] dark:text-[#a1a1aa]">{edu.institution}</p>
        <div className="flex items-center gap-3 mt-1">
          <span className="font-body text-xs text-[#5c5c5c] dark:text-[#a1a1aa] flex items-center gap-1">
            <MapPin size={10} /> {edu.location}
          </span>
          <span className="font-body text-xs text-[var(--brand)] font-bold">{edu.grade}</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experience" data-testid="experience-section" className="py-24 lg:py-32 px-6 bg-[#f5f5f5] dark:bg-[#121212]">
      <div className="max-w-[1200px] mx-auto">
        {/* Work Experience */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} custom={0} variants={fadeUp}
          className="mb-12"
        >
          <p className="section-label mb-4">// work experience</p>
          <h2 className="font-heading text-[clamp(2rem,6vw,3rem)] text-[#0a0a0a] dark:text-white">
            Experience
          </h2>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-6 mb-20">
          {USER_CONFIG.experience.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial="hidden" whileInView="visible" viewport={{ once: true }} custom={idx + 1} variants={fadeUp}
              whileHover={{ borderColor: "var(--brand)", x: 4 }}
              className="group p-6 lg:p-8 border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#050505] transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-[var(--brand-glow)] flex items-center justify-center flex-shrink-0 group-hover:bg-[rgba(255,59,48,0.2)] transition-colors">
                    <Briefcase size={24} className="text-[var(--brand)]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="font-heading text-xl text-[#0a0a0a] dark:text-white">{exp.role}</h3>
                      {exp.status === "current" && (
                        <span className="px-2 py-0.5 bg-emerald-500/15 text-emerald-500 font-body text-[10px] uppercase tracking-[0.1em] font-bold flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Ongoing
                        </span>
                      )}
                    </div>
                    <p className="font-body text-sm text-[var(--brand)] font-bold">{exp.company}</p>
                    <p className="font-body text-xs text-[#5c5c5c] dark:text-[#a1a1aa] mt-1">Domain: {exp.domain}</p>
                    <p className="font-body text-sm text-[#5c5c5c] dark:text-[#a1a1aa] leading-[1.8] mt-3">
                      {exp.description}
                    </p>
                    <div className="flex gap-3 mt-4">
                      {exp.companyUrl && (
                        <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" data-testid="experience-company-link"
                          className="inline-flex items-center gap-1.5 font-body text-[10px] uppercase tracking-[0.1em] px-3 py-1.5 border border-[var(--brand)]/30 text-[var(--brand)] hover:bg-[var(--brand-glow)] transition-colors">
                          <ExternalLink size={11} /> Website
                        </a>
                      )}
                      {exp.linkedinUrl && (
                        <a href={exp.linkedinUrl} target="_blank" rel="noopener noreferrer" data-testid="experience-linkedin-link"
                          className="inline-flex items-center gap-1.5 font-body text-[10px] uppercase tracking-[0.1em] px-3 py-1.5 border border-black/[0.08] dark:border-white/[0.08] text-[#5c5c5c] dark:text-[#a1a1aa] hover:border-[var(--brand)] hover:text-[var(--brand)] transition-colors">
                          LinkedIn
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <span className="font-body text-xs text-[#5c5c5c] dark:text-[#a1a1aa] flex-shrink-0">{exp.duration}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Academic Background */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} custom={0} variants={fadeUp}
          className="mb-12"
        >
          <p className="section-label mb-4">// academic journey</p>
          <h2 className="font-heading text-[clamp(2rem,6vw,3rem)] text-[#0a0a0a] dark:text-white">
            Education
          </h2>
        </motion.div>

        {/* Timeline Flow */}
        <div className="max-w-[600px]">
          {USER_CONFIG.education.map((edu, idx) => (
            <TimelineNode
              key={edu.degree}
              edu={edu}
              index={idx + 1}
              isLast={idx === USER_CONFIG.education.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
