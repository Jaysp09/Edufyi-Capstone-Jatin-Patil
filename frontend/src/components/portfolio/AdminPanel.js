import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, User, LogOut, Mail, Clock, MessageSquare, Trash2, AlertCircle, X } from "lucide-react";
import USER_CONFIG from "@/config/user";

export default function AdminPanel({ isOpen, onClose }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (isLoggedIn) {
      const stored = JSON.parse(localStorage.getItem("jp-contact-messages") || "[]");
      setMessages(stored.reverse());
    }
  }, [isLoggedIn]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === USER_CONFIG.admin.username && password === USER_CONFIG.admin.password) {
      setIsLoggedIn(true);
      setLoginError("");
    } else {
      setLoginError("Invalid username or password");
    }
  };

  const handleLogout = () => { setIsLoggedIn(false); setUsername(""); setPassword(""); };

  const handleDelete = (id) => {
    const updated = messages.filter((m) => m.id !== id);
    setMessages(updated);
    const stored = JSON.parse(localStorage.getItem("jp-contact-messages") || "[]");
    localStorage.setItem("jp-contact-messages", JSON.stringify(stored.filter((m) => m.id !== id)));
  };

  const formatDate = (iso) => new Date(iso).toLocaleString("en-US", { year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 z-[90] bg-white dark:bg-[#050505] overflow-y-auto"
      >
        <div className="max-w-[1200px] mx-auto px-6 pt-24 pb-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-heading text-3xl text-[#0a0a0a] dark:text-white">Admin Panel</h2>
            <button data-testid="admin-close-btn" onClick={() => { onClose(); setIsLoggedIn(false); setUsername(""); setPassword(""); }}
              className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.05em] px-4 py-2 border border-black/[0.12] dark:border-white/[0.12] text-[#5c5c5c] dark:text-[#a1a1aa] hover:border-[var(--brand)] hover:text-[var(--brand)] transition-all duration-150">
              <X size={14} /> Close
            </button>
          </div>

          {!isLoggedIn ? (
            <div className="max-w-[400px] mx-auto">
              <div className="border border-black/[0.08] dark:border-white/[0.08] p-8">
                <div className="w-16 h-16 bg-[var(--brand-glow)] flex items-center justify-center mx-auto mb-6">
                  <Lock size={28} className="text-[var(--brand)]" />
                </div>
                <h3 className="font-heading text-xl text-center text-[#0a0a0a] dark:text-white mb-6">Admin Login</h3>

                <form onSubmit={handleLogin} data-testid="admin-login-form" className="space-y-4">
                  <div>
                    <label className="block font-body text-xs uppercase tracking-[0.1em] text-[#5c5c5c] dark:text-[#a1a1aa] mb-2">Username</label>
                    <input data-testid="admin-username-input" type="text" value={username}
                      onChange={(e) => { setUsername(e.target.value); setLoginError(""); }}
                      placeholder="Enter username"
                      className="w-full px-4 py-3 bg-white dark:bg-[#050505] border border-black/[0.08] dark:border-white/[0.08] font-body text-sm text-[#0a0a0a] dark:text-white focus:outline-none focus:border-[var(--brand)] transition-colors" />
                  </div>
                  <div>
                    <label className="block font-body text-xs uppercase tracking-[0.1em] text-[#5c5c5c] dark:text-[#a1a1aa] mb-2">Password</label>
                    <input data-testid="admin-password-input" type="password" value={password}
                      onChange={(e) => { setPassword(e.target.value); setLoginError(""); }}
                      placeholder="Enter password"
                      className="w-full px-4 py-3 bg-white dark:bg-[#050505] border border-black/[0.08] dark:border-white/[0.08] font-body text-sm text-[#0a0a0a] dark:text-white focus:outline-none focus:border-[var(--brand)] transition-colors" />
                  </div>
                  {loginError && <p data-testid="admin-login-error" className="font-body text-xs text-[var(--brand)]">{loginError}</p>}
                  <button data-testid="admin-login-btn" type="submit"
                    className="w-full py-3 font-body text-xs uppercase tracking-[0.1em] bg-[var(--brand)] text-white hover:bg-[var(--brand-hover)] transition-colors">
                    Login
                  </button>
                </form>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between mb-6">
                <p className="font-body text-sm text-[#5c5c5c] dark:text-[#a1a1aa]">{messages.length} message{messages.length !== 1 ? "s" : ""} received</p>
                <button data-testid="admin-logout-btn" onClick={handleLogout}
                  className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.05em] px-4 py-2 border border-black/[0.12] dark:border-white/[0.12] text-[#5c5c5c] dark:text-[#a1a1aa] hover:border-[var(--brand)] hover:text-[var(--brand)] transition-all">
                  <LogOut size={14} /> Logout
                </button>
              </div>

              {messages.length === 0 ? (
                <div className="text-center py-16 border border-black/[0.06] dark:border-white/[0.06]">
                  <MessageSquare size={40} className="text-[#5c5c5c]/30 mx-auto mb-4" />
                  <p className="font-body text-sm text-[#5c5c5c] dark:text-[#a1a1aa]">No messages yet</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {messages.map((msg, idx) => (
                    <motion.div key={msg.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }}
                      data-testid={`admin-message-${idx}`}
                      className="group flex justify-between gap-4 p-5 border border-black/[0.06] dark:border-white/[0.06] hover:border-[rgba(255,59,48,0.3)] transition-colors">
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <span className="font-heading text-lg text-[#0a0a0a] dark:text-white">{msg.name}</span>
                          <span className="font-body text-xs text-[#5c5c5c] dark:text-[#a1a1aa]">{msg.email}</span>
                        </div>
                        <p className="font-body text-sm text-[#5c5c5c] dark:text-[#a1a1aa] whitespace-pre-wrap mb-2">{msg.message}</p>
                        <p className="font-body text-xs text-[#5c5c5c] dark:text-[#a1a1aa]">{formatDate(msg.timestamp)}</p>
                      </div>
                      <button data-testid={`admin-delete-msg-${idx}`} onClick={() => handleDelete(msg.id)}
                        className="opacity-0 group-hover:opacity-100 self-start p-2 text-[#5c5c5c] hover:text-[var(--brand)] transition-all">
                        <Trash2 size={16} />
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
