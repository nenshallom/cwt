import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';

export const metadata: Metadata = {
  title: 'Code Warriors Tech',
  description: 'Building Innovative Software Solutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header /> 
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}