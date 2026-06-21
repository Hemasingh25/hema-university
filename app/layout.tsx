import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ModalProvider } from '@/components/ModalProvider';

export const metadata: Metadata = {
  title: 'Hema University — Frankfurt, Germany',
  description:
    'Hema University — Frankfurt, Germany mein premier university. World-class education, cutting-edge research aur global opportunities.',
  keywords: 'Hema University, Frankfurt, Germany, University, Higher Education, Academic Excellence',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-navy-800 text-white font-body">
        <ModalProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
