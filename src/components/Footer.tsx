'use client';

import { Linkedin, Mail, Phone, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { translations, type Language } from '@/lib/translations';
import type { Language as LangType } from '@/lib/translations';

interface FooterProps {
  lang: LangType;
}

export default function Footer({ lang }: FooterProps) {
  const t = translations[lang].footer;
  const navT = translations[lang].nav;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="bg-[#1B2A4A] text-white mt-auto">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <p className="text-xl font-bold mb-3">
              ADOYI <span className="text-[#C9A84C]">MIFID</span>
            </p>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              {translations[lang].hero.tagline}
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com/in/adoyi-mufid"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#C9A84C] transition-colors"
              >
                <Linkedin className="size-4" />
              </a>
              <a
                href="mailto:adoyimufid@gmail.com"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#C9A84C] transition-colors"
              >
                <Mail className="size-4" />
              </a>
              <a
                href="tel:+22891144385"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#C9A84C] transition-colors"
              >
                <Phone className="size-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">{t.quickLinks}</h4>
            <ul className="space-y-2">
              {(['about', 'experience', 'skills', 'portfolio', 'testimonials', 'contact'] as const).map(
                (key) => (
                  <li key={key}>
                    <button
                      onClick={() => scrollTo(key)}
                      className="text-sm text-gray-400 hover:text-[#C9A84C] transition-colors"
                    >
                      {navT[key]}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">
              {lang === 'fr' ? 'Contact' : 'Contact'}
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="size-3.5 text-[#C9A84C]" />
                adoyimufid@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-3.5 text-[#C9A84C]" />
                +228 91 14 43 85
              </li>
              <li>Lomé, Togo</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">{t.copyright}</p>
          <p className="text-xs text-gray-500">{t.madeWith}</p>
        </div>
      </div>

      {/* Back to top */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-10 h-10 rounded-full bg-[#C9A84C] text-white hover:bg-[#B8963F] shadow-lg shadow-[#C9A84C]/30 z-40"
      >
        <ArrowUp className="size-4" />
        <span className="sr-only">
          {lang === 'fr' ? 'Retour en haut' : 'Back to top'}
        </span>
      </Button>
    </footer>
  );
}