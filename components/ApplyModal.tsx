'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, GraduationCap, CheckCircle2, Loader2, ArrowRight } from 'lucide-react';

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const programs = [
  'Computer Science & AI',
  'Business & Management',
  'Medical Sciences',
  'Engineering',
  'Law & Governance',
  'Arts & Humanities',
];

export default function ApplyModal({ isOpen, onClose }: ApplyModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [program, setProgram] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !program) return;

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleResetClose = () => {
    onClose();
    // Reset form after exit animation completes
    setTimeout(() => {
      setName('');
      setEmail('');
      setProgram('');
      setMessage('');
      setIsSubmitted(false);
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleResetClose}
            className="absolute inset-0 bg-navy-950/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-lg rounded-3xl bg-[#0b101c] border border-gold-500/25 p-8 shadow-gold-lg overflow-hidden z-10"
          >
            {/* Background Glow Blobs */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-gold-500/10 rounded-full blur-[60px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-36 h-36 bg-blue-500/5 rounded-full blur-[60px] pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={handleResetClose}
              className="absolute top-6 right-6 p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-colors z-20"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="form-step"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-500">
                      <GraduationCap size={20} />
                    </div>
                    <div>
                      <h2 className="font-heading text-xl font-bold text-white">Admissions Portal</h2>
                      <p className="text-gray-400 text-xs">Hema University · Frankfurt</p>
                    </div>
                  </div>

                  <h3 className="text-white text-base font-semibold mb-2">Apply for Academic Year 2025</h3>
                  <p className="text-gray-400 text-xs leading-relaxed mb-6">
                    Please submit your application details below. Our admissions board will review your profile and respond via email.
                  </p>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="modal-name" className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">
                        Full Name
                      </label>
                      <input
                        id="modal-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold-500/50 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="modal-email" className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">
                        Email Address
                      </label>
                      <input
                        id="modal-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold-500/50 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="modal-program" className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">
                        Select Program
                      </label>
                      <select
                        id="modal-program"
                        required
                        value={program}
                        onChange={(e) => setProgram(e.target.value)}
                        className="w-full bg-[#0d1325] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-500/50 transition-colors cursor-pointer"
                      >
                        <option value="" disabled className="text-gray-500">
                          Select a program
                        </option>
                        {programs.map((p) => (
                          <option key={p} value={p}>
                            {p}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="modal-message" className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">
                        Cover Note / Profile (Optional)
                      </label>
                      <textarea
                        id="modal-message"
                        rows={3}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell us about your educational background..."
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold-500/50 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-6 btn-gold justify-center !py-3.5 shadow-lg flex items-center gap-2 hover:-translate-y-0.5 transition-transform"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={16} className="animate-spin text-black" />
                          <span>Processing Application...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Application</span>
                          <ArrowRight size={16} />
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success-step"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-8 flex flex-col items-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                    className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 mb-6"
                  >
                    <CheckCircle2 size={36} />
                  </motion.div>

                  <h3 className="font-heading text-2xl font-bold text-white mb-3">Application Submitted!</h3>
                  <p className="text-gray-300 text-sm leading-relaxed max-w-sm mb-8">
                    Congratulations <span className="text-gold-400 font-semibold">{name}</span>, your request to join the <span className="text-white font-medium">{program}</span> department has been successfully received.
                  </p>

                  <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 w-full mb-8 text-left text-xs leading-relaxed text-gray-400">
                    <div className="font-semibold text-white mb-1">What's Next?</div>
                    <ul className="list-disc pl-4 space-y-1.5">
                      <li>Confirmation email sent to <span className="text-white">{email}</span>.</li>
                      <li>Admissions advisor review will take 2-3 business days.</li>
                      <li>We will invite you for a virtual interview via Zoom.</li>
                    </ul>
                  </div>

                  <button
                    onClick={handleResetClose}
                    className="btn-gold !px-8 !py-3 hover:-translate-y-0.5 transition-transform"
                  >
                    Close Admissions Portal
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
