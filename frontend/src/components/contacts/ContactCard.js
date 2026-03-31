import { motion } from "framer-motion";
import { Phone, Mail, Building2, Pencil, Trash2 } from "lucide-react";

export default function ContactCard({ contact, index, onEdit, onDelete }) {
  return (
    <motion.div
      data-testid={`contact-card-${index}`}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, borderColor: "var(--brand)" }}
      className="group p-5 bg-white dark:bg-[#050505] border border-black/[0.08] dark:border-white/[0.08] transition-all duration-300 relative"
    >
      {/* Edit / Delete Controls */}
      <div className="absolute top-3 right-3 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <button
          data-testid={`contact-edit-${index}`}
          onClick={(e) => { e.stopPropagation(); onEdit(contact); }}
          className="w-7 h-7 flex items-center justify-center text-[#5c5c5c] dark:text-[#a1a1aa] hover:text-[var(--brand)] hover:bg-[var(--brand-glow)] transition-all duration-150"
        >
          <Pencil size={13} />
        </button>
        <button
          data-testid={`contact-delete-${index}`}
          onClick={(e) => { e.stopPropagation(); onDelete(contact.id); }}
          className="w-7 h-7 flex items-center justify-center text-[#5c5c5c] dark:text-[#a1a1aa] hover:text-[var(--brand)] hover:bg-[var(--brand-glow)] transition-all duration-150"
        >
          <Trash2 size={13} />
        </button>
      </div>

      {/* Avatar + Name */}
      <div className="flex items-center gap-4 mb-3">
        <div className="w-12 h-12 overflow-hidden border border-black/[0.08] dark:border-white/[0.08] flex-shrink-0 group-hover:border-[var(--brand)]/30 transition-colors duration-300">
          <img
            src={contact.avatar}
            alt={contact.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(contact.name)}&backgroundColor=ff3b30&textColor=ffffff`;
            }}
          />
        </div>
        <div className="min-w-0">
          <h3 className="font-heading text-base text-[#0a0a0a] dark:text-white truncate">
            {contact.name}
          </h3>
          {contact.company && (
            <p data-testid={`contact-company-${index}`} className="flex items-center gap-1 font-body text-xs text-[var(--brand)] font-bold truncate">
              <Building2 size={11} />
              {contact.company}
            </p>
          )}
        </div>
      </div>

      {/* Bio */}
      {contact.bio && (
        <p className="font-body text-xs text-[#5c5c5c] dark:text-[#a1a1aa] leading-relaxed mb-3 line-clamp-2">
          {contact.bio}
        </p>
      )}

      {/* Contact Info */}
      <div className="space-y-1.5 pt-3 border-t border-black/[0.04] dark:border-white/[0.06]">
        <div className="flex items-center gap-2">
          <Phone size={12} className="text-[#5c5c5c] dark:text-[#a1a1aa] flex-shrink-0" />
          <span className="font-body text-xs text-[#5c5c5c] dark:text-[#a1a1aa] truncate">{contact.phone}</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail size={12} className="text-[#5c5c5c] dark:text-[#a1a1aa] flex-shrink-0" />
          <span className="font-body text-xs text-[#5c5c5c] dark:text-[#a1a1aa] truncate">{contact.email}</span>
        </div>
      </div>
    </motion.div>
  );
}
