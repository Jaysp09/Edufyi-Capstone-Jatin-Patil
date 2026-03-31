import { AnimatePresence } from "framer-motion";
import ContactCard from "@/components/contacts/ContactCard";
import { Users } from "lucide-react";

export default function ContactList({ contacts, onEdit, onDelete }) {
  if (contacts.length === 0) {
    return (
      <div data-testid="contact-list-empty" className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-16 h-16 bg-[var(--brand-glow)] flex items-center justify-center mb-4">
          <Users size={28} className="text-[var(--brand)]/40" />
        </div>
        <p className="font-heading text-lg text-[#0a0a0a] dark:text-white mb-1">No contacts yet</p>
        <p className="font-body text-sm text-[#5c5c5c] dark:text-[#a1a1aa]">
          Add your first contact using the form above
        </p>
      </div>
    );
  }

  return (
    <div data-testid="contact-list-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <AnimatePresence mode="popLayout">
        {contacts.map((contact, idx) => (
          <ContactCard key={contact.id} contact={contact} index={idx} onEdit={onEdit} onDelete={onDelete} />
        ))}
      </AnimatePresence>
    </div>
  );
}
