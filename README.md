# Hema University Website 🎓🏫

Welcome to the **Hema University Web Portal**. This is a premium, fully animated, responsive Next.js application built for Hema University, located in the heart of **Frankfurt, Germany**.

Designed with a high-fidelity **Dark Navy (#080c14)** and **Gold (#c9a84c)** theme, this site is optimized for speed, interactivity, and a premium visual appeal.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 15.5+ (App Router, React 19)
- **Styling**: Tailwind CSS v3.4 (with customized design system)
- **Animations**: Framer Motion 11.18+ (fluid scroll entries, transitions, and hover effects)
- **Icons**: Lucide React
- **Typography**: Google Fonts via Next.js Font Optimization
  - *Headings*: **Playfair Display** (Classic Serif)
  - *Body*: **Inter** (Modern Sans-serif)
- **Package Manager**: pnpm

---

## ✨ Key Features

1. **Stunning Responsive Hero**: A 2-column layout on desktop combining a high-impact heading with a floating glass-card showcasing Hema's historical Frankfurt campus.
2. **Global Interactive Navbar & Footer**: A sticky, blur-filtered header that shifts styles on scroll, a responsive mobile drawer navigation, and a details-rich footer containing physical campus addresses.
3. **Why Choose Us Section**: Combines modern visual assets showing study environments with animated student metrics and research indicators.
4. **Vibrant Student Life**: A campus experience highlight banner using real-time spacing and optimized images.
5. **Interactive Timeline**: An elegant milestone slider tracking the university's legacy from 1972 to the present day.
6. **Animated Admissions Modal**: Clicking **"Apply Now"** or **"Apply for 2025"** triggers a global animated pop-up modal. It contains validation, animated loader indicators, and a clean, interactive submission success confirmation.
7. **Vector Brand Identity**: Native `.svg` favicon branding for maximum crispness across all screen PPIs.

---

## 📁 Folder Structure

```text
hema-university/
├── app/
│   ├── about/
│   │   └── page.tsx        # About Page Component (History, Values, Map)
│   ├── favicon.svg         # Favicon Shortcut
│   ├── globals.css         # Tailwind Core Directives & Glassmorphism Utilities
│   ├── icon.svg            # Auto-detected Next.js App favicon
│   ├── layout.tsx          # App Shell (Navbar, Footer, ModalProvider)
│   └── page.tsx            # Home Page Component (Hero, Stats, Testimonials, CTA)
├── components/
│   ├── ApplyModal.tsx      # Admissions Apply form modal (Inputs & animations)
│   ├── Footer.tsx          # 4-Column Footer Component
│   ├── ModalProvider.tsx   # Global Client State Provider for Modal actions
│   └── Navbar.tsx          # Sticky Scroll & Responsive Drawer Navbar
├── public/
│   ├── about_building.png  # Administrative Center Visual
│   ├── favicon.svg         # SVG Brand Logo
│   ├── hero_campus.png     # Campus Gates Visual
│   ├── library_interior.png# Study Commons Visual
│   └── students_campus.png # Student Plaza Visual
├── tailwind.config.js      # Custom theme palettes, shadows, and animations
├── next.config.js          # Next.js Application overrides
└── tsconfig.json           # TypeScript Compiler definitions
```

---

## 🚀 Running the Application Locally

Follow these instructions to set up the repository and run the application locally on your machine.

### Prerequisites

Make sure you have **Node.js** (v18.0.0 or higher) and **pnpm** installed.

### 1. Install Dependencies
Run this command in the project root folder:
```bash
pnpm install
```

### 2. Run the Development Server
Launch the local server:
```bash
pnpm dev
```
The application will start, typically accessible at:
👉 **[http://localhost:3000](http://localhost:3000)**

### 3. Production Build
To create an optimized production build of the website:
```bash
pnpm build
```
To run the production build locally:
```bash
pnpm start
```

---

## ✍️ Author / Creator

This project was designed and built with passion by **Hema Singh**. 🚀

