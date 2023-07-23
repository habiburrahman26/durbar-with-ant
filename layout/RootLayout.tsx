import Navbar from '@/components/Navbar';
import { Inter } from 'next/font/google';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={inter.className}>
      <Navbar/>
      <main>{children}</main>
    </div>
  );
};
