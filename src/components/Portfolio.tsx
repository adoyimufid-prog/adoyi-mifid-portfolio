'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight } from 'lucide-react';
import { translations, type Language } from '@/lib/translations';

interface PortfolioProps {
  lang: Language;
}

export default function Portfolio({ lang }: PortfolioProps) {
  const t = translations[lang].portfolio;

  return (
    <section id="portfolio" className="py-20 sm:py-28">
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
          {t.projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Card className="group border border-gray-100 hover:border-[#C9A84C]/20 hover:shadow-xl transition-all bg-white h-full overflow-hidden">
                {/* Project Image */}
                {project.image && (
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                )}
                <CardContent className="p-6 flex flex-col h-full">
                  {/* Metric highlight */}
                  <div className="mb-5">
                    <span className="text-3xl sm:text-4xl font-bold text-[#C9A84C]">
                      {project.metric}
                    </span>
                    <p className="text-sm text-[#5A6270] mt-1">{project.metricLabel}</p>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#1B2A4A] mb-3 flex items-start justify-between gap-2">
                    <span>{project.title}</span>
                    <ArrowUpRight className="size-5 text-[#C9A84C] shrink-0 opacity-0 group-hover:opacity-100 transition-opacity mt-0.5" />
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#5A6270] leading-relaxed mb-5 flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, j) => (
                      <Badge
                        key={j}
                        variant="secondary"
                        className="text-xs bg-[#F8F6F1] text-[#5A6270] border-0 hover:bg-[#C9A84C]/10 hover:text-[#C9A84C]"
                      >
                        {tag}
                      </Badge>
                    ))}
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