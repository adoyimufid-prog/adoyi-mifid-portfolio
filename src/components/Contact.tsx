'use client';

import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Linkedin, Send, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { translations, type Language } from '@/lib/translations';

interface ContactProps {
  lang: Language;
}

export default function Contact({ lang }: ContactProps) {
  const t = translations[lang].contact;
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28">
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
          <p className="text-[#5A6270] mt-4 max-w-lg mx-auto">{t.subtitle}</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            <Card className="border-0 shadow-md bg-white">
              <CardContent className="p-6 space-y-6">
                <a
                  href="tel:+22891144385"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center shrink-0 group-hover:bg-[#C9A84C] transition-colors">
                    <Phone className="size-5 text-[#C9A84C] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-[#5A6270] mb-0.5">{t.info.phone}</p>
                    <p className="text-sm font-medium text-[#1B2A4A]">+228 91 14 43 85</p>
                  </div>
                </a>

                <a
                  href="mailto:adoyimufid@gmail.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center shrink-0 group-hover:bg-[#C9A84C] transition-colors">
                    <Mail className="size-5 text-[#C9A84C] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-[#5A6270] mb-0.5">{t.info.email}</p>
                    <p className="text-sm font-medium text-[#1B2A4A]">adoyimufid@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center shrink-0">
                    <MapPin className="size-5 text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#5A6270] mb-0.5">{t.info.location}</p>
                    <p className="text-sm font-medium text-[#1B2A4A]">Lomé, Togo</p>
                  </div>
                </div>

                <a
                  href="https://linkedin.com/in/adoyi-mufid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center shrink-0 group-hover:bg-[#C9A84C] transition-colors">
                    <Linkedin className="size-5 text-[#C9A84C] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-[#5A6270] mb-0.5">{t.info.linkedin}</p>
                    <p className="text-sm font-medium text-[#C9A84C]">linkedin.com/in/adoyi-mufid</p>
                  </div>
                </a>
              </CardContent>
            </Card>

            {/* Interests */}
            <Card className="border-0 shadow-md bg-white">
              <CardContent className="p-6">
                <h4 className="text-sm font-semibold text-[#1B2A4A] mb-3">
                  {lang === 'fr' ? 'Centres d\'intérêt' : 'Interests'}
                </h4>
                <p className="text-sm text-[#5A6270] leading-relaxed">
                  {lang === 'fr'
                    ? 'Sport (Crossfit), Lecture (Growth Hacking, Leadership), Collaboration interculturelle'
                    : 'Sports (Crossfit), Reading (Growth Hacking, Leadership), Cross-cultural collaboration'}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <Card className="border-0 shadow-md bg-white">
              <CardContent className="p-6 sm:p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t.form.name}</Label>
                      <Input
                        id="name"
                        required
                        placeholder={t.form.name}
                        className="bg-[#F8F6F1] border-0 focus-visible:ring-[#C9A84C]/30"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t.form.email}</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder={t.form.email}
                        className="bg-[#F8F6F1] border-0 focus-visible:ring-[#C9A84C]/30"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">{t.form.subject}</Label>
                    <Input
                      id="subject"
                      required
                      placeholder={t.form.subject}
                      className="bg-[#F8F6F1] border-0 focus-visible:ring-[#C9A84C]/30"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">{t.form.message}</Label>
                    <Textarea
                      id="message"
                      required
                      rows={5}
                      placeholder={t.form.message}
                      className="bg-[#F8F6F1] border-0 focus-visible:ring-[#C9A84C]/30 resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={sent}
                    className="w-full bg-[#C9A84C] hover:bg-[#B8963F] text-white rounded-xl h-12 text-base font-semibold shadow-lg shadow-[#C9A84C]/20"
                  >
                    {sent ? (
                      <>
                        <CheckCircle className="size-4 mr-2" />
                        {t.form.success}
                      </>
                    ) : (
                      <>
                        <Send className="size-4 mr-2" />
                        {t.form.send}
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}