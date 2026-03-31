import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Plus, User, Building2, Phone, Mail, FileText, Image, Save, X } from "lucide-react";

export default function ContactForm({ onAdd, editingContact, onUpdate, onCancelEdit }) {
  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", bio: "", avatar: "" });
  const [errors, setErrors] = useState({});

  // Pre-fill form when editing
  useEffect(() => {
    if (editingContact) {
      setForm({
        name: editingContact.name || "",
        company: editingContact.company || "",
        phone: editingContact.phone || "",
        email: editingContact.email || "",
        bio: editingContact.bio || "",
        avatar: editingContact.avatar || "",
      });
      setErrors({});
    }
  }, [editingContact]);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(form.email)) errs.email = "Invalid email";
    if (!form.phone.trim()) errs.phone = "Phone is required";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    if (editingContact) {
      onUpdate({
        ...editingContact,
        ...form,
        avatar: form.avatar || `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(form.name)}&backgroundColor=ff3b30&textColor=ffffff`,
      });
    } else {
      const contact = {
        ...form,
        id: Date.now().toString(),
        avatar: form.avatar || `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(form.name)}&backgroundColor=ff3b30&textColor=ffffff`,
      };
      onAdd(contact);
    }
    setForm({ name: "", company: "", phone: "", email: "", bio: "", avatar: "" });
    setErrors({});
  };

  const handleCancel = () => {
    setForm({ name: "", company: "", phone: "", email: "", bio: "", avatar: "" });
    setErrors({});
    onCancelEdit();
  };

  const inputClass = (field) =>
    `w-full pl-11 pr-4 py-3 bg-white dark:bg-[#050505] border ${
      errors[field] ? "border-[var(--brand)]" : "border-black/[0.08] dark:border-white/[0.08]"
    } font-body text-sm text-[#0a0a0a] dark:text-white placeholder-[#9ca3af] dark:placeholder-[#5c5c5c] focus:outline-none focus:border-[var(--brand)] transition-colors duration-150`;

  return (
    <motion.form
      onSubmit={handleSubmit}
      data-testid="contact-manager-form"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="p-6 lg:p-8 bg-white dark:bg-[#050505] border border-black/[0.08] dark:border-white/[0.08]"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-heading text-lg text-[#0a0a0a] dark:text-white">
          {editingContact ? "Edit Contact" : "Add New Contact"}
        </h3>
        {editingContact && (
          <button
            type="button"
            data-testid="cm-cancel-edit-btn"
            onClick={handleCancel}
            className="inline-flex items-center gap-1.5 font-body text-[10px] uppercase tracking-[0.1em] px-3 py-1.5 border border-black/[0.12] dark:border-white/[0.12] text-[#5c5c5c] dark:text-[#a1a1aa] hover:border-[var(--brand)] hover:text-[var(--brand)] transition-all"
          >
            <X size={12} /> Cancel
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="relative">
            <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5c5c5c] dark:text-[#a1a1aa]" />
            <input data-testid="cm-name-input" type="text" value={form.name}
              onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: "" }); }}
              placeholder="Full Name *" className={inputClass("name")} />
          </div>
          {errors.name && <p className="font-body text-xs text-[var(--brand)] mt-1">{errors.name}</p>}
        </div>
        <div>
          <div className="relative">
            <Building2 size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5c5c5c] dark:text-[#a1a1aa]" />
            <input data-testid="cm-company-input" type="text" value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              placeholder="Company / Job Title" className={inputClass("company")} />
          </div>
        </div>
        <div>
          <div className="relative">
            <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5c5c5c] dark:text-[#a1a1aa]" />
            <input data-testid="cm-phone-input" type="text" value={form.phone}
              onChange={(e) => { setForm({ ...form, phone: e.target.value }); setErrors({ ...errors, phone: "" }); }}
              placeholder="Phone Number *" className={inputClass("phone")} />
          </div>
          {errors.phone && <p className="font-body text-xs text-[var(--brand)] mt-1">{errors.phone}</p>}
        </div>
        <div>
          <div className="relative">
            <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5c5c5c] dark:text-[#a1a1aa]" />
            <input data-testid="cm-email-input" type="text" value={form.email}
              onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: "" }); }}
              placeholder="Email *" className={inputClass("email")} />
          </div>
          {errors.email && <p className="font-body text-xs text-[var(--brand)] mt-1">{errors.email}</p>}
        </div>
        <div className="md:col-span-2">
          <div className="relative">
            <Image size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5c5c5c] dark:text-[#a1a1aa]" />
            <input data-testid="cm-avatar-input" type="text" value={form.avatar}
              onChange={(e) => setForm({ ...form, avatar: e.target.value })}
              placeholder="Avatar URL (optional)" className={inputClass("avatar")} />
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="relative">
            <FileText size={16} className="absolute left-4 top-4 text-[#5c5c5c] dark:text-[#a1a1aa]" />
            <textarea data-testid="cm-bio-input" value={form.bio}
              onChange={(e) => setForm({ ...form, bio: e.target.value })}
              placeholder="Short bio / description" rows={3}
              className={`${inputClass("bio")} resize-none`} />
          </div>
        </div>
      </div>

      <motion.button
        data-testid="cm-add-contact-btn"
        type="submit"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="mt-6 w-full md:w-auto inline-flex items-center justify-center gap-2 font-body text-xs uppercase tracking-[0.1em] px-8 py-3 bg-[var(--brand)] text-white hover:bg-[var(--brand-hover)] transition-colors duration-150"
      >
        {editingContact ? <><Save size={14} /> Update Contact</> : <><Plus size={14} /> Add Contact</>}
      </motion.button>
    </motion.form>
  );
}
