'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';
import { translations, type Language } from '@/lib/translations';

interface TestimonialsProps {
  lang: Language;
}

export default function Testimonials({ lang }: TestimonialsProps) {
  const t = translations[lang].testimonials;

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-[#F8F6F1]">
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

        <div className="grid md:grid-cols-3 gap-6">
          {t.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow bg-white h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  {/* Quote icon */}
                  <div className="mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center">
                      <Quote className="size-5 text-[#C9A84C]" />
                    </div>
                  </div>

                  {/* Quote text */}
                  <blockquote className="text-sm text-[#5A6270] leading-relaxed flex-1 mb-6">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-[#C9A84C] flex items-center justify-center text-white font-bold text-sm">
                      {item.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#1B2A4A]">
                        {item.name}
                      </p>
                      <p className="text-xs text-[#5A6270]">{item.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}