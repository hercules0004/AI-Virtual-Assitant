"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [apiMessage, setApiMessage] = useState("");

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) tempErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email)) tempErrors.email = "Invalid email format";

    const phoneRegex = /^\+?[0-9]{7,15}$/;
    if (!formData.phone) tempErrors.phone = "Phone number is required";
    else if (!phoneRegex.test(formData.phone.replace(/[\s\-()]/g, ""))) tempErrors.phone = "Invalid phone number";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
        setApiMessage(data.error || "An error occurred while submitting.");
      }
    } catch (err) {
      setStatus("error");
      setApiMessage("Failed to connect. Please try again.");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="bg-neutral-950 border border-neutral-800 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl relative z-10"
          >
            <div className="p-6 border-b border-neutral-900 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-white">Get in Touch</h2>
                <p className="text-xs text-neutral-500 mt-0.5">Managed by Harshit Kumar</p>
              </div>
              <button onClick={onClose} className="p-1 rounded-lg text-neutral-400 hover:bg-neutral-900 hover:text-white transition">
                <X className="w-5 h-5" />
              </button>
            </div>

            {status === "success" ? (
              <div className="p-8 text-center flex flex-col items-center">
                <CheckCircle2 className="w-16 h-16 text-emerald-500 mb-4 stroke-[1.5]" />
                <h3 className="text-lg font-bold text-white mb-2">Submission Successful</h3>
                <p className="text-sm text-neutral-400 max-w-xs mb-6">Your message has been received and routed to Harshit Kumar.</p>
                <button onClick={onClose} className="w-full sm:w-auto bg-neutral-900 text-white px-6 py-2.5 rounded-xl text-sm border border-neutral-800 hover:bg-neutral-800 transition font-medium">
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                {status === "error" && (
                  <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-xs rounded-xl flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{apiMessage}</span>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-medium text-neutral-400 mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full bg-neutral-900 border rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition ${errors.name ? "border-red-500" : "border-neutral-800"}`}
                    placeholder="Enter your name"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-400 mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full bg-neutral-900 border rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition ${errors.email ? "border-red-500" : "border-neutral-800"}`}
                      placeholder="name@domain.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-neutral-400 mb-1.5">Phone Number *</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full bg-neutral-900 border rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition ${errors.phone ? "border-red-500" : "border-neutral-800"}`}
                      placeholder="+1 (555) 000-0000"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-400 mb-1.5">Message / Requirements</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition resize-none"
                    placeholder="Describe your inquiry (optional)..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full mt-2 bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-800 text-white font-medium py-3 rounded-xl transition flex items-center justify-center gap-2 text-sm shadow-lg shadow-indigo-600/20"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Submit Inquiry
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
