'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  GraduationCap, MapPin, Phone, Mail, Globe,
  Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowRight
} from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Courses', href: '/#courses' },
  { label: 'Research', href: '#' },
  { label: 'Admissions', href: '#' },
  { label: 'Campus Life', href: '#' },
];

const programs = [
  'Computer Science',
  'Business Administration',
  'Medical Sciences',
  'Engineering',
  'Law & Governance',
  'Arts & Humanities',
];

const socials = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold-500/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center text-black shadow-gold">
                <GraduationCap size={24} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading text-xl font-black tracking-[3px] gold-text">HEMA</span>
                <span className="text-[10px] tracking-[2px] uppercase text-gray-400">University</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Shaping tomorrow's leaders through world-class education, innovation, and a commitment to excellence in Frankfurt's heart.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-gold-500 hover:border-gold-500/40 hover:bg-gold-500/5 transition-colors"
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-white text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-gray-400 text-sm hover:text-gold-500 transition-colors group"
                  >
                    <ArrowRight size={13} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-gold-500" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-heading font-semibold text-white text-lg mb-6">Programs</h3>
            <ul className="space-y-3">
              {programs.map((prog) => (
                <li key={prog}>
                  <Link
                    href="#"
                    className="flex items-center gap-2 text-gray-400 text-sm hover:text-gold-500 transition-colors group"
                  >
                    <ArrowRight size={13} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-gold-500" />
                    {prog}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-white text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-gold-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={14} className="text-gold-500" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium">Bockenheimer Landstraße 24</p>
                  <p className="text-gray-400 text-xs mt-0.5">60323 Frankfurt am Main, Germany</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={14} className="text-gold-500" />
                </div>
                <a href="tel:+4969123456" className="text-gray-400 text-sm hover:text-gold-500 transition-colors">
                  +49 (69) 123 456 789
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={14} className="text-gold-500" />
                </div>
                <a href="mailto:info@hemauniversity.de" className="text-gray-400 text-sm hover:text-gold-500 transition-colors">
                  info@hemauniversity.de
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                  <Globe size={14} className="text-gold-500" />
                </div>
                <a href="#" className="text-gray-400 text-sm hover:text-gold-500 transition-colors">
                  www.hemauniversity.de
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Hema University, Frankfurt, Germany. All rights reserved. <span className="mx-1.5 text-white/10">|</span> Designed &amp; Developed with ❤️ by <span className="text-gold-400 font-semibold">Hema Singh</span>
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Use', 'Sitemap'].map((item) => (
              <Link key={item} href="#" className="text-gray-500 text-xs hover:text-gold-500 transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
