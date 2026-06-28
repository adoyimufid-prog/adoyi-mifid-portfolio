'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Zap, Heart, Target, Lightbulb } from 'lucide-react';
import { translations, type Language } from '@/lib/translations';

interface SkillsProps {
  lang: Language;
}

const softIcons = [Zap, Heart, Target, Lightbulb];

export default function Skills({ lang }: SkillsProps) {
  const t = translations[lang].skills;

  return (
    <section id="skills" className="py-20 sm:py-28 bg-[#F8F6F1]">
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

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Hard Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-0 shadow-md bg-white h-full">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-[#1B2A4A] flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center">
                    <Target className="size-4 text-[#C9A84C]" />
                  </div>
                  {t.hardTitle}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                {t.hardSkills.map((skill, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-medium text-[#1B2A4A]">
                        {skill.name}
                      </span>
                      <span className="text-xs font-semibold text-[#C9A84C]">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + i * 0.08, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-[#C9A84C] to-[#D4B85C] rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-0 shadow-md bg-white h-full">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-[#1B2A4A] flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center">
                    <Heart className="size-4 text-[#C9A84C]" />
                  </div>
                  {t.softTitle}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {t.softSkills.map((skill, i) => {
                    const Icon = softIcons[i] || Lightbulb;
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        className="flex items-center gap-3 p-4 rounded-xl bg-[#F8F6F1] hover:bg-[#C9A84C]/5 transition-colors"
                      >
                        <div className="w-10 h-10 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center shrink-0">
                          <Icon className="size-5 text-[#C9A84C]" />
                        </div>
                        <span className="text-sm font-medium text-[#1B2A4A]">
                          {skill}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Education */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <h4 className="text-sm font-semibold text-[#5A6270] mb-3 uppercase tracking-wider">
                    {lang === 'fr' ? 'Formation' : 'Education'}
                  </h4>
                  <div className="space-y-3">
                    <div className="text-sm">
                      <p className="font-semibold text-[#1B2A4A]">
                        {lang === 'fr'
                          ? 'Certification Marketing Numérique (OIF, 2025)'
                          : 'Digital Marketing Certification (OIF, 2025)'}
                      </p>
                      <p className="text-[#5A6270] text-xs">
                        SEO/SEM, Social Media, Data
                      </p>
                    </div>
                    <div className="text-sm">
                      <p className="font-semibold text-[#1B2A4A]">
                        {lang === 'fr'
                          ? 'Bac+3 Gestion - Université de Kara'
                          : "Bachelor's +3 in Management - University of Kara"}
                      </p>
                    </div>
                    <div className="flex gap-2 mt-2 flex-wrap">
                      <Badge variant="secondary" className="text-xs bg-[#C9A84C]/10 text-[#C9A84C] border-0">
                        {lang === 'fr' ? 'Français (très bon)' : 'French (fluent)'}
                      </Badge>
                      <Badge variant="secondary" className="text-xs bg-[#C9A84C]/10 text-[#C9A84C] border-0">
                        {lang === 'fr' ? 'Anglais (conversationnel)' : 'English (conversational)'}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}