import React from 'react';
import './globals.css';
import type { Metadata } from 'next';
import { Arimo, Space_Mono} from 'next/font/google';

const inter = Space_Mono({ 
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Tom Quintana | Portfolio',
  description: 'Portfolio de Tom Quintana, Desarrollador Backend',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
