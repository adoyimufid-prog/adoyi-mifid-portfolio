'use client';

import { motion } from 'framer-motion';
import { Briefcase, Users, TrendingUp, Calendar, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { translations, type Language } from '@/lib/translations';

interface AboutProps {
  lang: Language;
}

const statIcons = [Briefcase, Users, TrendingUp, Calendar, Globe];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6 },
};

export default function About({ lang }: AboutProps) {
  const t = translations[lang].about;

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#F8F6F1]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1B2A4A] mb-4">
            {t.sectionTitle}
          </h2>
          <div className="w-16 h-1 bg-[#C9A84C] mx-auto rounded-full" />
        </motion.div>

        <motion.div
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.1 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-lg text-[#5A6270] leading-relaxed">{t.profile}</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {t.stats.map((stat, i) => {
            const Icon = statIcons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow bg-white">
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <div className="w-12 h-12 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center mb-3">
                      <Icon className="size-6 text-[#C9A84C]" />
                    </div>
                    <span className="text-2xl sm:text-3xl font-bold text-[#1B2A4A]">
                      {stat.value}
                    </span>
                    <span className="text-sm text-[#5A6270] mt-1">{stat.label}</span>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}