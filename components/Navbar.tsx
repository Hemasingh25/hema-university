'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Menu, X, MapPin, ChevronRight } from 'lucide-react';
import { useModal } from './ModalProvider';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/#courses', label: 'Courses' },
  { href: '/#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openApplyModal } = useModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-navy-800/95 backdrop-blur-2xl border-b border-gold-500/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center gap-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{ rotate: 12, scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            className="w-11 h-11 rounded-xl bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center text-black shadow-gold"
          >
            <GraduationCap size={22} />
          </motion.div>
          <div className="flex flex-col leading-none">
            <span className="font-heading text-xl font-black tracking-[3px] gold-text">HEMA</span>
            <span className="text-[10px] font-normal tracking-[2.5px] uppercase text-gray-400">University</span>
          </div>
        </Link>

        {/* Location Badge */}
        <div className="hidden md:flex items-center gap-1.5 text-[11px] text-gold-500 bg-gold-500/10 border border-gold-500/20 rounded-full px-3 py-1.5">
          <MapPin size={11} />
          <span>Frankfurt, Germany</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 ml-auto">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                pathname === link.href
                  ? 'text-white bg-white/5'
                  : 'text-white/65 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
              {pathname === link.href && (
                <motion.div
                  layoutId="nav-active"
                  className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-gradient-to-r from-gold-500 to-gold-400"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <button
            id="apply-now-btn"
            onClick={openApplyModal}
            className="btn-gold ml-4 !py-2.5 !px-6 text-xs flex items-center gap-1.5"
          >
            Apply Now <ChevronRight size={14} />
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <button
          id="hamburger-btn"
          className="md:hidden ml-auto p-2 rounded-xl text-white hover:bg-white/10 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <AnimatePresence mode="wait" initial={false}>
            {menuOpen ? (
              <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <X size={22} />
              </motion.div>
            ) : (
              <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <Menu size={22} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-navy-800/98 backdrop-blur-2xl border-t border-white/5"
          >
            <div className="px-6 py-5 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block px-4 py-3 rounded-xl text-white/80 hover:text-gold-500 hover:bg-gold-500/5 transition-all font-medium"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.28 }} className="mt-2">
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    openApplyModal();
                  }}
                  className="btn-gold w-full justify-center flex items-center gap-1.5"
                >
                  Apply Now <ChevronRight size={16} />
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
