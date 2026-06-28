'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, CalendarDays, Image as ImageIcon, X, ExternalLink, Play } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { translations, type Language } from '@/lib/translations';

interface ExperienceProps {
  lang: Language;
}

export default function Experience({ lang }: ExperienceProps) {
  const t = translations[lang].experience;
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState('');
  const [lightboxAlt, setLightboxAlt] = useState('');

  const openLightbox = (src: string, alt: string) => {
    setLightboxSrc(src);
    setLightboxAlt(alt);
    setLightboxOpen(true);
  };

  return (
    <section id="experience" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1B2A4A] mb-4">
            {t.sectionTitle}
          </h2>
          <div className="w-16 h-1 bg-[#C9A84C] mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#C9A84C] via-[#C9A84C]/50 to-[#C9A84C]/10" />

          <div className="flex flex-col gap-8">
            {t.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-12 sm:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 sm:left-6.5 top-6 w-3 h-3 rounded-full bg-[#C9A84C] ring-4 ring-white shadow-sm" />

                <Card className="border border-gray-100 hover:border-[#C9A84C]/20 hover:shadow-lg transition-all bg-white">
                  <CardContent className="p-5 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-[#1B2A4A]">
                          {item.role}
                        </h3>
                        <p className="text-[#C9A84C] font-semibold text-sm">
                          {item.companyUrl ? (
                            <a
                              href={item.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline inline-flex items-center gap-1"
                            >
                              {item.company}
                              <ExternalLink className="size-3" />
                            </a>
                          ) : (
                            item.company
                          )}
                        </p>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-1 text-sm text-[#5A6270] shrink-0">
                        <span className="inline-flex items-center gap-1.5">
                          <CalendarDays className="size-3.5" />
                          {item.dates}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="size-3.5" />
                          {item.location}
                        </span>
                      </div>
                    </div>

                    {/* Image Gallery */}
                    {item.images && item.images.length > 0 && (
                      <div className="mb-4 flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
                        {item.images.map((img, j) => (
                          <button
                            key={j}
                            onClick={() => openLightbox(img, `${item.company} - ${lang === 'fr' ? 'Photo' : 'Photo'}`)}
                            className="relative shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden border border-gray-200 hover:border-[#C9A84C]/40 hover:shadow-md transition-all group cursor-pointer"
                          >
                            <img
                              src={img}
                              alt={`${item.company} photo ${j + 1}`}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                              <ImageIcon className="size-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                          </button>
                        ))}
                      </div>
                    )}

                    <ul className="space-y-1.5">
                      {item.bullets.map((bullet, j) => (
                        <li
                          key={j}
                          className="text-sm text-[#5A6270] flex items-start gap-2"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C9A84C] shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    {/* Event Link */}
                    {item.eventLink && (
                      <a
                        href={item.eventLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[#C9A84C] hover:text-[#B8963F] transition-colors"
                      >
                        <Play className="size-3.5" />
                        {lang === 'fr' ? 'Voir la vidéo de l’événement' : 'Watch event video'}
                        <ExternalLink className="size-3" />
                      </a>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="sm:max-w-3xl p-0 border-0 bg-black/95 [&>button]:hidden">
          <DialogTitle className="sr-only">{lightboxAlt}</DialogTitle>
          <DialogDescription className="sr-only">Experience photo</DialogDescription>
          <div className="relative">
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <X className="size-5 text-white" />
              <span className="sr-only">Close</span>
            </button>
            <img
              src={lightboxSrc}
              alt={lightboxAlt}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}