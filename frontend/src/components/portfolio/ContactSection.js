import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, User, MessageSquare, CheckCircle, AlertCircle } from "lucide-react";
import USER_CONFIG from "@/config/user";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!EMAIL_REGEX.test(form.email)) errs.email = "Please enter a valid email address";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    const existing = JSON.parse(localStorage.getItem("jp-contact-messages") || "[]");
    const newMessage = { ...form, timestamp: new Date().toISOString(), id: Date.now().toString() };
    existing.push(newMessage);
    localStorage.setItem("jp-contact-messages", JSON.stringify(existing));
    setForm({ name: "", email: "", message: "" });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const inputBase = (field) =>
    `w-full pl-11 pr-4 py-3.5 bg-white dark:bg-[#050505] border ${
      errors[field] ? "border-[var(--brand)]" : "border-black/[0.08] dark:border-white/[0.08]"
    } font-body text-sm text-[#0a0a0a] dark:text-white placeholder-[#9ca3af] dark:placeholder-[#5c5c5c] focus:outline-none focus:border-[var(--brand)] transition-colors duration-150`;

  return (
    <section id="contact" data-testid="contact-section" className="py-24 lg:py-32 px-6 bg-[#f5f5f5] dark:bg-[#121212]">
      <div className="max-w-[500px] mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="mb-8">
          <p className="section-label mb-4">// get in touch</p>
          <h2 className="font-heading text-[clamp(2rem,6vw,3rem)] text-[#0a0a0a] dark:text-white">Contact Me</h2>
        </motion.div>

        {submitted ? (
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
            className="text-center p-10 border border-[var(--brand)] bg-[var(--brand-glow)]">
            <Send size={40} className="text-[var(--brand)] mx-auto mb-4" />
            <h3 className="font-heading text-2xl text-[#0a0a0a] dark:text-white mb-2">Message Sent!</h3>
            <p className="font-body text-sm text-[#5c5c5c] dark:text-[#a1a1aa]">Thank you for reaching out. I'll get back to you soon.</p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            data-testid="contact-form"
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}
            className="space-y-5"
          >
            {/* Name */}
            <div>
              <label className="block font-body text-xs uppercase tracking-[0.1em] text-[#5c5c5c] dark:text-[#a1a1aa] mb-2">Name</label>
              <div className="relative">
                <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5c5c5c] dark:text-[#a1a1aa]" />
                <input data-testid="contact-name-input" type="text" value={form.name}
                  onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: "" }); }}
                  placeholder="Your name" className={inputBase("name")} />
              </div>
              {errors.name && <p data-testid="contact-name-error" className="flex items-center gap-1 mt-1 font-body text-xs text-[var(--brand)]"><AlertCircle size={12} /> {errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block font-body text-xs uppercase tracking-[0.1em] text-[#5c5c5c] dark:text-[#a1a1aa] mb-2">Email</label>
              <div className="relative">
                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5c5c5c] dark:text-[#a1a1aa]" />
                <input data-testid="contact-email-input" type="text" value={form.email}
                  onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: "" }); }}
                  placeholder="your@email.com" className={inputBase("email")} />
              </div>
              {errors.email && <p data-testid="contact-email-error" className="flex items-center gap-1 mt-1 font-body text-xs text-[var(--brand)]"><AlertCircle size={12} /> {errors.email}</p>}
            </div>

            {/* Message */}
            <div>
              <label className="block font-body text-xs uppercase tracking-[0.1em] text-[#5c5c5c] dark:text-[#a1a1aa] mb-2">Message</label>
              <textarea data-testid="contact-message-input" value={form.message}
                onChange={(e) => { setForm({ ...form, message: e.target.value }); setErrors({ ...errors, message: "" }); }}
                placeholder="Your message..." rows={5}
                className={`${inputBase("message")} resize-none`} />
              {errors.message && <p data-testid="contact-message-error" className="flex items-center gap-1 mt-1 font-body text-xs text-[var(--brand)]"><AlertCircle size={12} /> {errors.message}</p>}
            </div>

            <motion.button data-testid="contact-submit-btn" type="submit" whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}
              className="w-full py-3.5 font-body text-xs uppercase tracking-[0.1em] bg-[var(--brand)] text-white hover:bg-[var(--brand-hover)] flex items-center justify-center gap-2 transition-colors duration-150">
              <Send size={14} /> Send Message
            </motion.button>
          </motion.form>
        )}
      </div>
    </section>
  );
}
