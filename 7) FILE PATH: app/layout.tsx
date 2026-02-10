import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Luxury Model Portfolio',
  description: 'Luxury beauty model with polished glam and strong close-up presence for premium campaigns, print, and digital. Based in NYC.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-neutral-50 text-black font-sans antialiased">{children}</body>
    </html>
  );
}
