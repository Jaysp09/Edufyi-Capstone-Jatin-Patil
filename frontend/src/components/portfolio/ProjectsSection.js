import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Github, ExternalLink, X, ArrowLeft, ChevronRight } from "lucide-react";
import USER_CONFIG from "@/config/user";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
};

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const lines = project.fullDescription.split("\n").filter((l) => l.trim());

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[800px] max-h-[90vh] overflow-y-auto bg-white dark:bg-[#050505] border border-black/[0.08] dark:border-white/[0.08]"
      >
        {/* Close */}
        <button
          data-testid="project-modal-close"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-[#5c5c5c] dark:text-[#a1a1aa] hover:text-[var(--brand)] transition-colors"
        >
          <X size={24} />
        </button>

        {/* Image */}
        <div className="relative w-full h-[300px] overflow-hidden">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-8">
          <h2 className="font-heading text-3xl text-[#0a0a0a] dark:text-white mb-1">{project.title}</h2>
          <p className="font-body text-sm text-[var(--brand)] mb-4">{project.subtitle}</p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tools.map((t) => (
              <span key={t} className="px-2 py-1 border border-black/[0.08] dark:border-white/[0.08] font-body text-[10px] uppercase tracking-[0.1em] text-[#5c5c5c] dark:text-[#a1a1aa]">
                {t}
              </span>
            ))}
          </div>

          {/* Full Description */}
          <div className="font-body text-sm text-[#5c5c5c] dark:text-[#a1a1aa] leading-[1.8] space-y-2">
            {lines.map((line, i) => {
              if (line.startsWith("- ")) {
                return <li key={i} className="ml-4 list-disc">{line.substring(2)}</li>;
              }
              if (line.endsWith(":")) {
                return <h4 key={i} className="font-heading text-base text-[#0a0a0a] dark:text-white mt-4 mb-1">{line}</h4>;
              }
              return <p key={i}>{line}</p>;
            })}
          </div>

          {/* Actions */}
          <div className="flex gap-4 mt-8 pt-6 border-t border-black/[0.06] dark:border-white/[0.06]">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="project-modal-github"
                className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.1em] px-5 py-3 bg-[var(--brand)] text-white hover:bg-[var(--brand-hover)] transition-colors duration-150"
              >
                <Github size={14} /> View on GitHub
              </a>
            )}
            <button
              onClick={onClose}
              data-testid="project-modal-back"
              className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.1em] px-5 py-3 border border-black/[0.12] dark:border-white/[0.12] text-[#0a0a0a] dark:text-white hover:border-[var(--brand)] hover:text-[var(--brand)] transition-all duration-150"
            >
              <ArrowLeft size={14} /> Back
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" data-testid="projects-section" className="py-24 lg:py-32 px-6 bg-[#f5f5f5] dark:bg-[#121212]">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} custom={0} variants={fadeUp}
          className="mb-12"
        >
          <p className="section-label mb-4">// what i've built</p>
          <h2 className="font-heading text-[clamp(2rem,6vw,3rem)] text-[#0a0a0a] dark:text-white">
            Projects
          </h2>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {USER_CONFIG.projects.map((project, idx) => (
            <motion.article
              key={project.title}
              initial="hidden" whileInView="visible" viewport={{ once: true }} custom={idx + 1} variants={fadeUp}
              data-testid={`project-card-${idx}`}
              onClick={() => setSelectedProject(project)}
              className="project-card-interactive group cursor-pointer bg-white dark:bg-[#050505] border border-black/[0.08] dark:border-white/[0.08] hover:border-[var(--brand)] overflow-hidden"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 flex items-center justify-center transition-all duration-300">
                  <span className="font-body text-sm uppercase tracking-[0.1em] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                    <Eye size={16} /> View Details
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl text-[#0a0a0a] dark:text-white group-hover:text-[var(--brand)] transition-colors duration-150 mb-1">
                  {project.title}
                </h3>
                <p className="font-body text-sm text-[var(--brand)] mb-3">{project.subtitle}</p>
                <p className="font-body text-sm text-[#5c5c5c] dark:text-[#a1a1aa] leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Feature Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.highlights.slice(0, 2).map((h, i) => (
                    <span key={i} className="px-2 py-1 bg-[var(--brand-glow)] text-[var(--brand)] font-body text-[10px] uppercase">
                      {h.split(",")[0].substring(0, 30)}...
                    </span>
                  ))}
                </div>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-black/[0.06] dark:border-white/[0.06]">
                  {project.tools.slice(0, 4).map((tool) => (
                    <span key={tool} className="px-2 py-1 border border-black/[0.08] dark:border-white/[0.08] font-body text-[10px] uppercase tracking-[0.1em] text-[#5c5c5c] dark:text-[#a1a1aa]">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
