'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  GraduationCap, Users, BookOpen, Globe, Award, ArrowRight,
  ChevronRight, Star, FlaskConical, Landmark, Scale, Cpu, Stethoscope, Building
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
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ===== Stats ===== */
const stats = [
  { value: '25K+', label: 'Students Enrolled', icon: Users },
  { value: '180+', label: 'Programs Offered', icon: BookOpen },
  { value: '95 Nations', label: 'Global Reach', icon: Globe },
  { value: '#12', label: 'Europe Ranking', icon: Award },
];

/* ===== Courses ===== */
const courses = [
  { icon: Cpu, title: 'Computer Science & AI', desc: 'Cutting-edge programs in machine learning, software engineering, and cybersecurity.', students: '4,200+', badge: 'Top Rated' },
  { icon: Building, title: 'Business & Management', desc: 'MBA and executive programs developed with leading Frankfurt financial institutions.', students: '3,800+', badge: 'Popular' },
  { icon: Stethoscope, title: 'Medical Sciences', desc: "World-class medical education with access to Frankfurt's top hospital networks.", students: '2,100+', badge: 'Research Focus' },
  { icon: FlaskConical, title: 'Engineering', desc: 'From mechanical to aerospace — hands-on learning at state-of-the-art labs.', students: '3,500+', badge: '' },
  { icon: Scale, title: 'Law & Governance', desc: 'Comprehensive law degrees with a focus on EU legislation and international law.', students: '1,900+', badge: '' },
  { icon: Landmark, title: 'Arts & Humanities', desc: 'Interdisciplinary programs blending culture, history, philosophy, and social sciences.', students: '2,400+', badge: '' },
];

/* ===== Features ===== */
const features = [
  { title: 'World-Class Faculty', desc: 'Learn from Nobel laureates, industry leaders, and renowned researchers.' },
  { title: 'Global Network', desc: 'Connect with 150,000+ alumni across 95 countries and leading organizations.' },
  { title: 'Research Excellence', desc: '€500M+ in annual research funding driving breakthrough discoveries.' },
  { title: 'Career Placement', desc: '97% employment rate within 6 months of graduation, globally.' },
];

/* ===== Testimonials ===== */
const testimonials = [
  { name: 'Sofia Müller', role: 'Computer Science, 2023', text: 'Hema University gave me the skills and connections to land my dream job at Google Berlin. The faculty is exceptional.', rating: 5 },
  { name: 'Ravi Sharma', role: 'MBA, 2022', text: "The business program's connection with Frankfurt's financial district was invaluable. I now lead a team at Deutsche Bank.", rating: 5 },
  { name: 'Layla Hassan', role: 'Medical Sciences, 2024', text: 'The research opportunities here are unparalleled. I published my first paper in my second year!', rating: 5 },
];

export default function HomePage() {
  const { openApplyModal } = useModal();
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1325] via-navy-800 to-navy-800" />
        {/* Glow blobs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-[120px] animate-glow" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-blue-500/8 rounded-full blur-[100px] animate-glow" style={{ animationDelay: '1.5s' }} />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
          <div className="grid lg:grid-cols-12 gap-12 items-center text-center lg:text-left">
            {/* Left Column - Copy & Call to Actions */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/25 rounded-full px-5 py-2 mb-8"
              >
                <Star size={12} className="text-gold-500 fill-gold-500" />
                <span className="text-gold-400 text-xs font-medium tracking-widest uppercase">Ranked #12 in Europe 2024</span>
                <Star size={12} className="text-gold-500 fill-gold-500" />
              </motion.div>

              {/* Title */}
              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="font-heading text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-8"
              >
                <span className="text-white">Shape Your</span>
                <br />
                <span className="text-gradient">Future at Hema</span>
                <br />
                <span className="text-white text-3xl md:text-4xl font-semibold">University</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                variants={fadeUp}
                custom={1}
                initial="hidden"
                animate="visible"
                className="text-gray-300 text-base md:text-lg max-w-2xl leading-relaxed mb-12"
              >
                Located in the heart of <span className="text-gold-400 font-medium">Frankfurt, Germany</span> — Europe's financial capital.
                Join 25,000+ students from 95 nations building tomorrow's world.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={fadeUp}
                custom={2}
                initial="hidden"
                animate="visible"
                className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
              >
                <Link href="/about" id="explore-programs-btn" className="btn-gold text-sm">
                  Explore Programs <ChevronRight size={16} />
                </Link>
                <Link href="/about" id="learn-more-btn" className="btn-outline text-sm">
                  Learn More
                </Link>
              </motion.div>
            </div>

            {/* Right Column - Beautiful Image frame */}
            <div className="lg:col-span-5 flex justify-center w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group bg-navy-900"
              >
                {/* Gold glow outline */}
                <div className="absolute inset-0 border border-gold-500/25 rounded-3xl group-hover:border-gold-500/50 transition-colors duration-500 z-25 pointer-events-none" />
                <Image
                  src="/hero_campus.png"
                  alt="Hema University Campus"
                  fill
                  sizes="(max-w-768px) 100vw, 420px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 z-10"
                  priority
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent opacity-90 z-20" />
                {/* Overlay text */}
                <div className="absolute bottom-6 left-6 right-6 z-30 text-left">
                  <span className="text-gold-400 text-[10px] font-bold tracking-widest uppercase mb-1.5 block">Frankfurt Campus</span>
                  <h3 className="font-heading text-lg font-bold text-white leading-snug">Inspiring Academic Environment</h3>
                  <p className="text-gray-400 text-xs mt-1">Main gates and historic Bockenheimer campus</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Floating stats row */}
          <motion.div
            variants={fadeUp}
            custom={3}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 max-w-5xl mx-auto"
          >
            {stats.map(({ value, label, icon: Icon }, i) => (
              <motion.div
                key={label}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="glass-card p-5 text-center group cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-gold-500/20 transition-colors">
                  <Icon size={18} className="text-gold-500" />
                </div>
                <div className="font-heading text-2xl font-bold gold-text">{value}</div>
                <div className="text-gray-400 text-xs mt-1">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500"
        >
          <span className="text-[10px] tracking-[3px] uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-gray-500 to-transparent" />
        </motion.div>
      </section>

      {/* ===== COURSES ===== */}
      <section id="courses" className="py-28 px-6 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-gold-500/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <motion.div variants={fadeUp}>
              <span className="section-label">Academic Excellence</span>
              <h2 className="section-title">World-Class <span className="gold-text">Programs</span></h2>
              <div className="gold-divider mx-auto" />
              <p className="section-subtitle mx-auto text-center max-w-xl mt-4">
                Choose from 180+ programs designed by industry experts to prepare you for the challenges of tomorrow.
              </p>
            </motion.div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map(({ icon: Icon, title, desc, students, badge }, i) => (
              <AnimatedSection key={title}>
                <motion.div
                  variants={fadeUp}
                  custom={i % 3}
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 250 }}
                  className="glass-card p-7 h-full group cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center group-hover:bg-gold-500/20 group-hover:scale-110 transition-all duration-300">
                      <Icon size={22} className="text-gold-500" />
                    </div>
                    {badge && (
                      <span className="text-[10px] font-semibold tracking-wider px-3 py-1 rounded-full bg-gold-500/10 text-gold-400 border border-gold-500/20">
                        {badge}
                      </span>
                    )}
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-white mb-3 group-hover:text-gold-400 transition-colors">
                    {title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">{desc}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <span className="text-xs text-gray-500 flex items-center gap-1.5">
                      <Users size={12} className="text-gold-500" /> {students} students
                    </span>
                    <span className="text-gold-500 text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn More <ArrowRight size={12} />
                    </span>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY HEMA ===== */}
      <section className="py-28 px-6 bg-navy-900/50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]"
          style={{ backgroundImage: 'radial-gradient(rgba(201,168,76,1) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative">
          {/* Left */}
          <AnimatedSection>
            <motion.div variants={fadeUp}>
              <span className="section-label">Why Choose Us</span>
              <h2 className="section-title">Excellence is Our <span className="gold-text">Standard</span></h2>
              <div className="gold-divider" />
              <p className="section-subtitle mb-10">
                For over 50 years, Hema University has been shaping global leaders from our Frankfurt campus — combining European tradition with cutting-edge innovation.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {features.map(({ title, desc }, i) => (
                  <motion.div
                    key={title}
                    variants={fadeUp}
                    custom={i}
                    className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-gold-500/30 hover:bg-white/[0.05] transition-all group"
                  >
                    <div className="w-2 h-2 rounded-full bg-gold-500 mb-3 group-hover:scale-150 transition-transform" />
                    <h4 className="font-semibold text-white text-sm mb-1.5">{title}</h4>
                    <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
                  </motion.div>
                ))}
              </div>
              <Link href="/about" id="about-link-btn" className="btn-gold mt-10 inline-flex">
                Discover More <ArrowRight size={16} />
              </Link>
            </motion.div>
          </AnimatedSection>

          {/* Right — Visual Card & Image */}
          <AnimatedSection>
            <motion.div variants={fadeUp} custom={1} className="relative flex flex-col gap-6 w-full">
              {/* Image Frame */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group bg-navy-900">
                <Image
                  src="/library_interior.png"
                  alt="Hema University Library"
                  fill
                  sizes="(max-w-768px) 100vw, 600px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/20 to-transparent z-10" />
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-gold-400 bg-black/55 px-3 py-1.5 rounded-full border border-gold-500/20 backdrop-blur-sm">
                    State-of-the-Art Facilities
                  </span>
                </div>
              </div>

              {/* Progress Bars Glass Card */}
              <div className="glass-card p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 blur-[50px] rounded-full" />
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center text-black">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <div className="font-heading text-lg font-bold text-white leading-tight">Hema University</div>
                    <div className="text-gold-500 text-[10px] tracking-widest">FRANKFURT · GERMANY</div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: 'Student Satisfaction', value: 98 },
                    { label: 'Research Output', value: 94 },
                    { label: 'Global Placement', value: 97 },
                    { label: 'Faculty Excellence', value: 99 },
                  ].map(({ label, value }) => (
                    <div key={label}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-400">{label}</span>
                        <span className="text-gold-400 font-semibold">{value}%</span>
                      </div>
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
                          className="h-full rounded-full bg-gradient-to-r from-gold-700 to-gold-400"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== CAMPUS EXPERIENCE ===== */}
      <section className="py-28 px-6 bg-gradient-to-b from-[#080c14] to-navy-900/40 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold-500/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center relative">
          <AnimatedSection className="lg:col-span-5">
            <motion.div variants={fadeUp}>
              <span className="section-label">Campus Experience</span>
              <h2 className="section-title">Vibrant <span className="gold-text">Student Life</span></h2>
              <div className="gold-divider" />
              <p className="section-subtitle mt-6 mb-8 text-left max-w-none">
                At Hema University, education extends far beyond the lecture halls. Located in Frankfurt, our campus is a melting pot of cultures, ideas, and activities, offering an active student life with over 100 clubs, regular sports tournaments, and cultural festivals.
              </p>
              <div className="flex items-center gap-8">
                <div>
                  <div className="font-heading text-3xl font-bold gold-text">100+</div>
                  <div className="text-gray-400 text-xs mt-1">Student Clubs & Societies</div>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div>
                  <div className="font-heading text-3xl font-bold gold-text">20+</div>
                  <div className="text-gray-400 text-xs mt-1">Annual Cultural Events</div>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
          
          <AnimatedSection className="lg:col-span-7 w-full">
            <motion.div variants={fadeUp} custom={1} className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group bg-navy-900">
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent z-20" />
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/students_campus.png"
                  alt="Students on Hema University Campus"
                  fill
                  sizes="(max-w-768px) 100vw, 800px"
                  className="object-cover group-hover:scale-103 transition-transform duration-700 z-10"
                />
              </div>
              <div className="absolute bottom-6 left-6 right-6 z-30 text-left">
                <span className="text-gold-400 text-[10px] font-bold tracking-widest uppercase mb-1 block">Collaboration & Networking</span>
                <h4 className="font-heading text-lg font-bold text-white">Inspiring Social & Study Hubs</h4>
                <p className="text-gray-400 text-xs mt-1">Students collaborating at the Bockenheimer Campus plaza</p>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <motion.div variants={fadeUp}>
              <span className="section-label">Student Stories</span>
              <h2 className="section-title">What Our <span className="gold-text">Alumni Say</span></h2>
              <div className="gold-divider mx-auto" />
            </motion.div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ name, role, text, rating }, i) => (
              <AnimatedSection key={name}>
                <motion.div
                  variants={fadeUp}
                  custom={i}
                  whileHover={{ y: -4 }}
                  className="glass-card p-7 h-full flex flex-col"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(rating)].map((_, j) => (
                      <Star key={j} size={14} className="text-gold-500 fill-gold-500" />
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed flex-1 mb-6">"{text}"</p>
                  <div className="flex items-center gap-3 pt-5 border-t border-white/5">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center font-bold text-black text-sm">
                      {name[0]}
                    </div>
                    <div>
                      <div className="text-white text-sm font-semibold">{name}</div>
                      <div className="text-gray-500 text-xs">{role}</div>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section id="contact" className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <motion.div
              variants={fadeUp}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gold-700 via-gold-600 to-gold-500 p-12 md:p-16 text-center shadow-gold-lg"
            >
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-white/10 rounded-full blur-[60px]" />
              <div className="relative z-10">
                <span className="inline-block bg-black/20 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-black/80 mb-6">
                  2025 Admissions Open
                </span>
                <h2 className="font-heading text-4xl md:text-5xl font-black text-black mb-5 leading-tight">
                  Begin Your Journey<br />at Hema University
                </h2>
                <p className="text-black/70 text-lg max-w-xl mx-auto mb-10">
                  Frankfurt, Germany's premier institution awaits you. Applications for the 2025 academic year are now open.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <button
                    id="apply-cta-btn"
                    onClick={openApplyModal}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-semibold rounded-full text-sm hover:bg-gray-900 transition-all shadow-xl hover:-translate-y-0.5"
                  >
                    Apply Now <ChevronRight size={16} />
                  </button>
                  <Link href="/about" id="contact-cta-btn"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 text-black font-medium rounded-full text-sm hover:bg-white/30 transition-all backdrop-blur-sm"
                  >
                    Contact Admissions
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
