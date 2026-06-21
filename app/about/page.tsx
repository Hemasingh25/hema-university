'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  Target, Eye, Heart, Globe, Users, Award, BookOpen,
  MapPin, ChevronRight, Lightbulb, Shield, Leaf, Star
} from 'lucide-react';
import { useModal } from '@/components/ModalProvider';

/* ===== Animation Helpers ===== */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} className={className}>
      {children}
    </motion.div>
  );
}

/* ===== Data ===== */
const milestones = [
  { year: '1972', title: 'University Founded', desc: 'Hema University established in Frankfurt with 3 founding faculties and 200 students.' },
  { year: '1985', title: 'International Expansion', desc: 'Launched international exchange programs with 40 universities across 15 countries.' },
  { year: '1999', title: 'Research Centre Opening', desc: 'State-of-the-art Hema Research Centre inaugurated, driving breakthrough discoveries.' },
  { year: '2010', title: 'Digital Transformation', desc: 'Launched AI and Technology faculties, pioneering digital education in Germany.' },
  { year: '2018', title: 'Sustainability Campus', desc: 'Awarded Germany\'s Greenest Campus — 100% renewable energy, carbon-neutral by 2020.' },
  { year: '2024', title: '#12 in Europe', desc: 'Ranked among Europe\'s top 15 universities by the Global University Rankings.' },
];

const values = [
  { icon: Lightbulb, title: 'Innovation', desc: 'We embrace new ideas and cutting-edge research that challenges the boundaries of knowledge.' },
  { icon: Heart, title: 'Inclusivity', desc: 'A welcoming community for all — 95 nationalities united by a shared pursuit of excellence.' },
  { icon: Shield, title: 'Integrity', desc: 'Upholding the highest ethical standards in all academic, research, and community endeavors.' },
  { icon: Globe, title: 'Global Impact', desc: 'Our graduates and research create positive change in communities around the world.' },
  { icon: Leaf, title: 'Sustainability', desc: 'Committed to environmental responsibility as a pillar of our campus and curriculum.' },
  { icon: Star, title: 'Excellence', desc: 'Consistently ranked among Europe\'s finest — excellence is not a goal, it\'s our standard.' },
];

const leadership = [
  { name: 'Prof. Dr. Hema Larsson', role: 'President & Rector', dept: 'Office of the President', initial: 'H' },
  { name: 'Prof. Dr. Klaus Weber', role: 'Vice-Rector, Research', dept: 'Research & Innovation', initial: 'K' },
  { name: 'Prof. Dr. Aisha Mohammed', role: 'Vice-Rector, Academics', dept: 'Academic Affairs', initial: 'A' },
  { name: 'Prof. Dr. Stefan Richter', role: 'Dean, Technology', dept: 'Faculty of Technology', initial: 'S' },
];

export default function AboutPage() {
  const { openApplyModal } = useModal();
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1325] via-navy-800 to-navy-800" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-gold-500/8 blur-[120px] rounded-full animate-glow" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-500/6 blur-[100px] rounded-full animate-glow" style={{ animationDelay: '2s' }} />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-12 gap-12 items-center text-center lg:text-left">
            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/25 rounded-full px-5 py-2 mb-8"
              >
                <MapPin size={12} className="text-gold-500" />
                <span className="text-gold-400 text-xs font-medium tracking-widest uppercase">Frankfurt, Germany · Est. 1972</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="font-heading text-4xl md:text-6xl font-black leading-tight mb-6"
              >
                About <span className="text-gradient">Hema</span><br />
                <span className="text-white">University</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mb-10"
              >
                For over 50 years, we have been Frankfurt's beacon of academic excellence — nurturing curious minds, driving innovation, and shaping leaders for a complex world.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
              >
                <Link href="/#courses" id="about-explore-btn" className="btn-gold text-sm">
                  Explore Programs <ChevronRight size={16} />
                </Link>
                <Link href="/#contact" id="about-contact-btn" className="btn-outline text-sm">
                  Contact Us
                </Link>
              </motion.div>
            </div>

            {/* Right Column - Image Frame */}
            <div className="lg:col-span-5 flex justify-center w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group bg-navy-900"
              >
                <div className="absolute inset-0 border border-gold-500/25 rounded-3xl group-hover:border-gold-500/50 transition-colors duration-500 z-25 pointer-events-none" />
                <Image
                  src="/about_building.png"
                  alt="Hema University Main Building"
                  fill
                  sizes="(max-w-768px) 100vw, 420px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 z-10"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent opacity-90 z-20" />
                <div className="absolute bottom-6 left-6 right-6 z-30 text-left">
                  <span className="text-gold-400 text-[10px] font-bold tracking-widest uppercase mb-1.5 block">Administrative Center</span>
                  <h3 className="font-heading text-lg font-bold text-white leading-snug">Classic Architecture</h3>
                  <p className="text-gray-400 text-xs mt-1">Historic landmarks blended with modern research labs</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MISSION & VISION ===== */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {[
            {
              icon: Target,
              label: 'Our Mission',
              title: 'Empowering Minds, Transforming Futures',
              text: 'Our mission is to provide a transformative education that equips students with the knowledge, skills, and values to lead in a rapidly changing world. We foster critical thinking, ethical leadership, and a passion for lifelong learning across all our programs.',
            },
            {
              icon: Eye,
              label: 'Our Vision',
              title: 'A Global Hub of Excellence',
              text: 'We envision Hema University as one of the world\'s top 10 universities by 2030 — a global hub where breakthrough research, diverse perspectives, and unwavering commitment to humanity\'s progress converge in the heart of Europe.',
            },
          ].map(({ icon: Icon, label, title, text }, i) => (
            <AnimatedSection key={label}>
              <motion.div
                variants={fadeUp}
                custom={i}
                className="glass-card p-10 h-full relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 blur-[60px] rounded-full group-hover:bg-gold-500/10 transition-all duration-500" />
                <div className="w-14 h-14 rounded-2xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-gold-500/20 transition-all duration-300">
                  <Icon size={26} className="text-gold-500" />
                </div>
                <span className="section-label">{label}</span>
                <h3 className="font-heading text-2xl font-bold text-white mb-4">{title}</h3>
                <div className="gold-divider" />
                <p className="text-gray-400 leading-relaxed">{text}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ===== QUICK STATS ===== */}
      <section className="py-16 px-6 bg-navy-900/60 border-y border-white/[0.04]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Users, value: '25,000+', label: 'Students' },
            { icon: BookOpen, value: '180+', label: 'Programs' },
            { icon: Globe, value: '95', label: 'Countries' },
            { icon: Award, value: '50+', label: 'Years of Excellence' },
          ].map(({ icon: Icon, value, label }, i) => (
            <AnimatedSection key={label}>
              <motion.div variants={fadeUp} custom={i} className="text-center py-4">
                <Icon size={28} className="text-gold-500 mx-auto mb-3" />
                <div className="font-heading text-3xl font-black gold-text mb-1">{value}</div>
                <div className="text-gray-400 text-sm">{label}</div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ===== HISTORY TIMELINE ===== */}
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <motion.div variants={fadeUp}>
              <span className="section-label">Our Story</span>
              <h2 className="section-title">A Legacy of <span className="gold-text">Excellence</span></h2>
              <div className="gold-divider mx-auto" />
              <p className="section-subtitle mx-auto text-center max-w-xl mt-4">
                From a small Frankfurt campus in 1972 to a globally recognized institution — our journey is one of passion, perseverance, and purpose.
              </p>
            </motion.div>
          </AnimatedSection>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-gold-500/50 via-gold-500/20 to-transparent hidden md:block" />
            <div className="space-y-12">
              {milestones.map(({ year, title, desc }, i) => (
                <AnimatedSection key={year}>
                  <motion.div
                    variants={fadeUp}
                    custom={i % 2}
                    className={`md:grid md:grid-cols-2 md:gap-12 flex flex-col gap-4 items-center`}
                  >
                    {i % 2 === 0 ? (
                      <>
                        <div className="text-right md:pr-12">
                          <div className="glass-card p-6 inline-block text-left w-full group hover:border-gold-500/30">
                            <div className="text-gold-500 text-xs font-bold tracking-widest mb-2">{year}</div>
                            <h4 className="font-heading text-lg font-semibold text-white mb-2 group-hover:text-gold-400 transition-colors">{title}</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                          </div>
                        </div>
                        <div className="hidden md:flex items-center">
                          <div className="w-4 h-4 rounded-full bg-gold-500 border-4 border-navy-800 shadow-gold -ml-2 flex-shrink-0" />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="hidden md:flex items-center justify-end">
                          <div className="w-4 h-4 rounded-full bg-gold-500 border-4 border-navy-800 shadow-gold -mr-2 flex-shrink-0" />
                        </div>
                        <div className="md:pl-12">
                          <div className="glass-card p-6 group hover:border-gold-500/30">
                            <div className="text-gold-500 text-xs font-bold tracking-widest mb-2">{year}</div>
                            <h4 className="font-heading text-lg font-semibold text-white mb-2 group-hover:text-gold-400 transition-colors">{title}</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                          </div>
                        </div>
                      </>
                    )}
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== VALUES ===== */}
      <section className="py-28 px-6 bg-navy-900/50 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gold-500/5 blur-[100px] rounded-full" />
        <div className="max-w-7xl mx-auto relative">
          <AnimatedSection className="text-center mb-16">
            <motion.div variants={fadeUp}>
              <span className="section-label">What We Stand For</span>
              <h2 className="section-title">Our Core <span className="gold-text">Values</span></h2>
              <div className="gold-divider mx-auto" />
            </motion.div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <AnimatedSection key={title}>
                <motion.div
                  variants={fadeUp}
                  custom={i % 3}
                  whileHover={{ y: -5, scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="glass-card p-7 group text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mx-auto mb-5 group-hover:bg-gold-500/20 group-hover:scale-110 transition-all duration-300">
                    <Icon size={24} className="text-gold-500" />
                  </div>
                  <h4 className="font-heading text-lg font-semibold text-white mb-3 group-hover:text-gold-400 transition-colors">{title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LEADERSHIP ===== */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <motion.div variants={fadeUp}>
              <span className="section-label">Our People</span>
              <h2 className="section-title">University <span className="gold-text">Leadership</span></h2>
              <div className="gold-divider mx-auto" />
              <p className="section-subtitle mx-auto text-center max-w-xl mt-4">
                Visionary leaders guiding Hema University toward a future of global impact and academic distinction.
              </p>
            </motion.div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map(({ name, role, dept, initial }, i) => (
              <AnimatedSection key={name}>
                <motion.div
                  variants={fadeUp}
                  custom={i}
                  whileHover={{ y: -6 }}
                  className="glass-card p-7 text-center group"
                >
                  <motion.div
                    whileHover={{ scale: 1.08, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center text-3xl font-black text-black mx-auto mb-5 shadow-gold"
                  >
                    {initial}
                  </motion.div>
                  <h4 className="font-heading text-base font-bold text-white mb-1 group-hover:text-gold-400 transition-colors">{name}</h4>
                  <p className="text-gold-500 text-xs font-semibold tracking-wide mb-1">{role}</p>
                  <p className="text-gray-500 text-xs">{dept}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LOCATION ===== */}
      <section className="py-28 px-6 bg-navy-900/50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <motion.div variants={fadeUp}>
              <span className="section-label">Find Us</span>
              <h2 className="section-title">Located in the Heart of <span className="gold-text">Frankfurt</span></h2>
              <div className="gold-divider" />
              <p className="section-subtitle mb-8">
                Situated in Frankfurt am Main — Germany's financial powerhouse and one of Europe's most vibrant cities — our campus gives students unparalleled access to global industries, culture, and opportunities.
              </p>
              <div className="space-y-4 mb-10">
                {[
                  { label: 'Campus Address', value: 'Bockenheimer Landstraße 24, 60323 Frankfurt am Main, Germany' },
                  { label: 'Public Transport', value: 'U-Bahn: Bockenheimer Warte (U4/U6/U7) — 2 min walk' },
                  { label: 'From Airport', value: 'Frankfurt Airport (FRA) — 25 min by S-Bahn S8/S9' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-gold-500/20 transition-colors">
                    <MapPin size={16} className="text-gold-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-white text-sm font-medium mb-0.5">{label}</div>
                      <div className="text-gray-400 text-xs leading-relaxed">{value}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/#contact" id="location-contact-btn" className="btn-gold inline-flex">
                Get Directions <ChevronRight size={16} />
              </Link>
            </motion.div>
          </AnimatedSection>

          {/* Map Visual */}
          <AnimatedSection>
            <motion.div variants={fadeUp} custom={1} className="glass-card p-2 overflow-hidden">
              <div className="w-full h-80 rounded-xl overflow-hidden relative bg-navy-700">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.1234567890!2d8.6657!3d50.1177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd096f477abec3%3A0x83dca9f3d1b25b24!2sBockenheimer%20Landstra%C3%9Fe%2C%20Frankfurt%20am%20Main!5e0!3m2!1sen!2sde!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.7)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Hema University Location"
                />
              </div>
              <div className="p-4 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-gold-500 animate-pulse" />
                <span className="text-gray-400 text-xs">Hema University · Frankfurt am Main, Germany</span>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <motion.div
              variants={fadeUp}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gold-700 via-gold-600 to-gold-500 p-12 md:p-16 text-center shadow-gold-lg"
            >
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-[80px]" />
              <div className="relative z-10">
                <h2 className="font-heading text-4xl md:text-5xl font-black text-black mb-5">
                  Ready to Join Us?
                </h2>
                <p className="text-black/70 text-lg max-w-xl mx-auto mb-10">
                  Take the first step toward an extraordinary academic journey at Frankfurt's finest university.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <button
                    id="about-cta-apply-btn"
                    onClick={openApplyModal}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-semibold rounded-full text-sm hover:bg-gray-900 transition-all hover:-translate-y-0.5"
                  >
                    Apply for 2025 <ChevronRight size={16} />
                  </button>
                  <Link href="/#contact" id="about-cta-contact-btn"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 text-black font-medium rounded-full text-sm hover:bg-white/30 transition-all backdrop-blur-sm"
                  >
                    Speak to an Advisor
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
