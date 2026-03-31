import { useState, useMemo, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, ArrowLeft, Users, Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "@/context/ThemeProvider";
import ContactForm from "@/components/contacts/ContactForm";
import ContactList from "@/components/contacts/ContactList";
import FooterSimple from "@/components/portfolio/FooterSimple"; // ✅ keep only this

export default function ContactManager() {
  const { theme, toggleTheme } = useTheme();

  // ✅ LOAD FROM localStorage
  const [contacts, setContacts] = useState(() => {
    const saved = localStorage.getItem("contacts");
    return saved ? JSON.parse(saved) : [];
  });

  const [search, setSearch] = useState("");
  const [editingContact, setEditingContact] = useState(null);
  const formRef = useRef(null);

  // ✅ SAVE TO localStorage
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = useMemo(() => {
    if (!search.trim()) return contacts;
    const q = search.toLowerCase();
    return contacts.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        (c.company && c.company.toLowerCase().includes(q))
    );
  }, [contacts, search]);

  const handleAddContact = (contact) => {
    setContacts((prev) => [contact, ...prev]);
  };

  const handleDeleteContact = (id) => {
    setContacts((prev) => prev.filter((c) => c.id !== id));
  };

  const handleEditContact = (contact) => {
    setEditingContact(contact);
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleUpdateContact = (updated) => {
    setContacts((prev) =>
      prev.map((c) => (c.id === updated.id ? updated : c))
    );
    setEditingContact(null);
  };

  const handleCancelEdit = () => {
    setEditingContact(null);
  };

  return (
    <>
      <div
        data-testid="contact-manager-page"
        className="min-h-screen bg-[#f5f5f5] dark:bg-[#050505] transition-colors duration-300"
      >
        {/* Header */}
        <motion.header
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="sticky top-0 z-50 bg-white/95 dark:bg-[#050505]/95 backdrop-blur-md border-b border-black/[0.08] dark:border-white/[0.06]"
        >
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-4">
                <Link
                  to="/"
                  data-testid="cm-back-btn"
                  className="w-10 h-10 flex items-center justify-center border border-black/[0.12] dark:border-white/[0.12] hover:border-[var(--brand)] hover:text-[var(--brand)] transition-all duration-150 text-[#0a0a0a] dark:text-white"
                >
                  <ArrowLeft size={18} />
                </Link>
                <div>
                  <h1 className="font-heading text-xl text-[#0a0a0a] dark:text-white">
                    Contact Manager
                  </h1>
                  <p className="font-body text-[10px] uppercase tracking-[0.1em] text-[#5c5c5c] dark:text-[#a1a1aa]">
                    React Contact Cards Manager SPA
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-[var(--brand-glow)] border border-[var(--brand)]/20">
                  <Users size={14} className="text-[var(--brand)]" />
                  <span className="font-body text-xs font-bold text-[var(--brand)]">
                    {contacts.length} contact
                    {contacts.length !== 1 ? "s" : ""}
                  </span>
                </div>

                <button
                  data-testid="cm-theme-toggle"
                  onClick={toggleTheme}
                  className="w-10 h-10 flex items-center justify-center border border-black/[0.12] dark:border-white/[0.12] hover:border-[var(--brand)] hover:text-[var(--brand)] transition-all duration-150 text-[#0a0a0a] dark:text-white"
                >
                  {theme === "dark" ? (
                    <Sun size={16} />
                  ) : (
                    <Moon size={16} />
                  )}
                </button>
              </div>
            </div>
          </div>
        </motion.header>

        {/* Main */}
        <main className="max-w-[1200px] mx-auto px-6 py-8 lg:py-12">
          <div ref={formRef}>
            <ContactForm
              onAdd={handleAddContact}
              editingContact={editingContact}
              onUpdate={handleUpdateContact}
              onCancelEdit={handleCancelEdit}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 mb-6"
          >
            <div className="relative max-w-md">
              <Search
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5c5c5c] dark:text-[#a1a1aa]"
              />
              <input
                data-testid="cm-search-input"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search contacts by name or company..."
                className="w-full pl-12 pr-4 py-3 bg-white dark:bg-[#050505] border border-black/[0.08] dark:border-white/[0.08] font-body text-sm text-[#0a0a0a] dark:text-white placeholder-[#9ca3af] dark:placeholder-[#5c5c5c] focus:outline-none focus:border-[var(--brand)] transition-colors duration-150"
              />
            </div>

            {search && (
              <p className="mt-2 font-body text-xs text-[#5c5c5c] dark:text-[#a1a1aa]">
                Showing {filteredContacts.length} of {contacts.length} contacts
              </p>
            )}
          </motion.div>

          <ContactList
            contacts={filteredContacts}
            onEdit={handleEditContact}
            onDelete={handleDeleteContact}
          />
        </main>
      </div>

      {/* Footer */}
      <FooterSimple />
    </>
  );
}