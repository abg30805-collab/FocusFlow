import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { Navbar } from '@/components/ui/navbar';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'FocusFlow - Organize Your Learning Journey',
  description: 'Track your interests, skills, and learning paths',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <div className="min-h-screen bg-[rgb(var(--background))]">
          <div className="container mx-auto px-4 py-6 md:py-8 max-w-7xl">
            <Navbar />
            <main className="pb-20 md:pb-8">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}

