'use client';

import { useState } from 'react';
import { type Language } from '@/lib/translations';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [lang, setLang] = useState<Language>('fr');

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar lang={lang} setLang={setLang} />
      <main className="flex-1">
        <Hero lang={lang} />
        <About lang={lang} />
        <Experience lang={lang} />
        <Skills lang={lang} />
        <Portfolio lang={lang} />
        <Testimonials lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}