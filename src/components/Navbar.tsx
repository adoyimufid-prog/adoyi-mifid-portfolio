'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from '@/components/ui/sheet';
import { translations, type Language } from '@/lib/translations';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

const navKeys = ['about', 'experience', 'skills', 'portfolio', 'testimonials', 'contact'] as const;

export default function Navbar({ lang, setLang }: NavbarProps) {
  const t = translations[lang].nav;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navLinks = navKeys.map((key) => ({
    label: t[key],
    href: `#${key}`,
    key,
  }));

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-lg font-bold tracking-tight text-[#1B2A4A] hover:text-[#C9A84C] transition-colors"
          >
            ADOYI <span className="text-[#C9A84C]">MIFID</span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.key}
                onClick={() => scrollTo(link.key)}
                className="px-3 py-2 text-sm font-medium text-[#5A6270] hover:text-[#C9A84C] transition-colors rounded-md hover:bg-[#C9A84C]/5"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Language Toggle + Mobile Menu */}
          <div className="flex items-center gap-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={lang}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.15 }}
              >
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
                  className="gap-1.5 text-xs font-semibold border-[#C9A84C]/30 text-[#C9A84C] hover:bg-[#C9A84C] hover:text-white hover:border-[#C9A84C] rounded-full px-3"
                >
                  <Globe className="size-3.5" />
                  {lang === 'fr' ? 'EN' : 'FR'}
                </Button>
              </motion.div>
            </AnimatePresence>

            {/* Mobile Hamburger */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="size-5" />
                  <span className="sr-only">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 pt-12">
                <SheetTitle className="text-left px-4 mb-6">
                  <span className="text-lg font-bold text-[#1B2A4A]">
                    ADOYI <span className="text-[#C9A84C]">MIFID</span>
                  </span>
                </SheetTitle>
                <div className="flex flex-col gap-1 px-2">
                  {navLinks.map((link) => (
                    <button
                      key={link.key}
                      onClick={() => {
                        scrollTo(link.key);
                      }}
                      className="w-full text-left px-4 py-3 text-sm font-medium text-[#5A6270] hover:text-[#C9A84C] hover:bg-[#C9A84C]/5 rounded-lg transition-colors"
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}