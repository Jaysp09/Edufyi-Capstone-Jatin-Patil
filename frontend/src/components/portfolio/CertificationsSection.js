import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Download, Eye, X, ExternalLink, FileText } from "lucide-react";
import USER_CONFIG from "@/config/user";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

function CertCard({ cert, index, onPreview }) {
  const hasDoc = !!cert.documentUrl;

  return (
    <motion.div
      initial="hidden" whileInView="visible" viewport={{ once: true }} custom={index} variants={fadeUp}
      whileHover={{ y: -4, borderColor: "var(--brand)" }}
      data-testid={`cert-card-${index}`}
      className="group p-5 bg-white dark:bg-[#050505] border border-black/[0.08] dark:border-white/[0.08] transition-all duration-300 cursor-pointer"
      onClick={() => hasDoc && onPreview(cert)}
    >
      {cert.badgeUrl ? (
        <div className="w-16 h-16 mb-3 overflow-hidden">
          <img src={cert.badgeUrl} alt={cert.title} className="w-full h-full object-contain" />
        </div>
      ) : (
        <div className="w-16 h-16 bg-[var(--brand-glow)] flex items-center justify-center mb-3 group-hover:bg-[rgba(255,59,48,0.2)] transition-colors">
          {cert.type === "conference" ? <FileText size={28} className="text-[var(--brand)]" /> : <Award size={28} className="text-[var(--brand)]" />}
        </div>
      )}
      <h3 className="font-heading text-sm text-[#0a0a0a] dark:text-white group-hover:text-[var(--brand)] transition-colors mb-0.5">
        {cert.title}
      </h3>
      <p className="font-body text-xs text-[var(--brand)] font-bold">{cert.issuer}</p>
      <p className="font-body text-xs text-[#5c5c5c] dark:text-[#a1a1aa] mt-1">{cert.date}</p>

      {hasDoc && (
        <div className="flex gap-2 mt-3">
          <button
            data-testid={`cert-view-${index}`}
            onClick={(e) => { e.stopPropagation(); onPreview(cert); }}
            className="inline-flex items-center gap-1 font-body text-[10px] uppercase tracking-[0.1em] px-2.5 py-1 border border-[var(--brand)]/30 text-[var(--brand)] hover:bg-[var(--brand-glow)] transition-colors"
          >
            <Eye size={10} /> View
          </button>
          <a
            href={cert.documentUrl}
            download
            target="_blank"
            rel="noopener noreferrer"
            data-testid={`cert-download-${index}`}
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1 font-body text-[10px] uppercase tracking-[0.1em] px-2.5 py-1 border border-black/[0.08] dark:border-white/[0.08] text-[#5c5c5c] dark:text-[#a1a1aa] hover:border-[var(--brand)] hover:text-[var(--brand)] transition-colors"
          >
            <Download size={10} /> Download
          </a>
        </div>
      )}
    </motion.div>
  );
}

export default function CertificationsSection() {
  const [preview, setPreview] = useState(null);

  return (
    <section id="certifications" data-testid="certifications-section" className="py-24 lg:py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} custom={0} variants={fadeUp}
          className="mb-8"
        >
          <p className="section-label mb-4">// credentials & achievements</p>
          <h2 className="font-heading text-[clamp(2rem,6vw,3rem)] text-[#0a0a0a] dark:text-white">
            Certifications
          </h2>
        </motion.div>

        {/* Resume Card */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
          className="mb-8 p-5 border border-[var(--brand)]/20 bg-[var(--brand-glow)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[var(--brand-glow)] border border-[var(--brand)]/20 flex items-center justify-center">
              <FileText size={22} className="text-[var(--brand)]" />
            </div>
            <div>
              <h3 className="font-heading text-lg text-[#0a0a0a] dark:text-white">My Resume</h3>
              <p className="font-body text-xs text-[#5c5c5c] dark:text-[#a1a1aa]">Full resume with all details</p>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              data-testid="resume-view-btn"
              onClick={() => setPreview({ title: "Resume - Jatin S. Patil", documentUrl: USER_CONFIG.resumeUrl })}
              className="inline-flex items-center gap-1.5 font-body text-xs uppercase tracking-[0.1em] px-4 py-2 border border-black/[0.12] dark:border-white/[0.12] text-[#0a0a0a] dark:text-white hover:border-[var(--brand)] hover:text-[var(--brand)] transition-all duration-150"
            >
              <Eye size={13} /> View
            </button>
            <a
              href={USER_CONFIG.resumeUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              data-testid="resume-download-link"
              className="inline-flex items-center gap-1.5 font-body text-xs uppercase tracking-[0.1em] px-4 py-2 bg-[var(--brand)] text-white hover:bg-[var(--brand-hover)] transition-colors duration-150"
            >
              <Download size={13} /> Download
            </a>
          </div>
        </motion.div>

        {/* Cert Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {USER_CONFIG.certifications.map((cert, idx) => (
            <CertCard key={cert.title} cert={cert} index={idx} onPreview={setPreview} />
          ))}
        </div>
      </div>

      {/* Preview Modal */}
      <AnimatePresence>
        {preview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setPreview(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl h-[80vh] bg-white dark:bg-[#0a0a0a] border border-black/[0.08] dark:border-white/[0.08] overflow-hidden"
            >
              <div className="flex items-center justify-between p-4 border-b border-black/[0.06] dark:border-white/[0.06]">
                <h3 className="font-heading text-base text-[#0a0a0a] dark:text-white">{preview.title}</h3>
                <div className="flex items-center gap-2">
                  <a href={preview.documentUrl} download target="_blank" rel="noopener noreferrer" data-testid="modal-download-btn"
                    className="inline-flex items-center gap-1 font-body text-[10px] uppercase tracking-[0.1em] px-3 py-1.5 bg-[var(--brand)] text-white hover:bg-[var(--brand-hover)] transition-colors">
                    <Download size={11} /> Download
                  </a>
                  <a href={preview.documentUrl} target="_blank" rel="noopener noreferrer" data-testid="modal-open-new-tab"
                    className="inline-flex items-center gap-1 font-body text-[10px] uppercase tracking-[0.1em] px-3 py-1.5 border border-black/[0.08] dark:border-white/[0.08] text-[#5c5c5c] dark:text-[#a1a1aa]">
                    <ExternalLink size={11} /> New Tab
                  </a>
                  <button data-testid="modal-close-btn" onClick={() => setPreview(null)}
                    className="w-8 h-8 flex items-center justify-center text-[#5c5c5c] dark:text-[#a1a1aa] hover:text-[var(--brand)] transition-colors">
                    <X size={18} />
                  </button>
                </div>
              </div>
              <iframe src={preview.documentUrl} title={preview.title} className="w-full h-[calc(100%-56px)]" style={{ border: "none" }} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
