import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/sonner";

export default function Layout({ children, currentPageName }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <style>{`
        :root {
          --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      <Header currentPage={currentPageName} />
      <main className="flex-1 pt-16 lg:pt-20">
        {children}
      </main>
      <Footer />
      <Toaster position="top-right" richColors />
    </div>
  );
}
