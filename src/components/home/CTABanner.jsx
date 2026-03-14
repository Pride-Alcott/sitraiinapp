import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTABanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#009999] to-[#009999] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-bold text-white mb-4">Upskill your team or advance your career<br />in industrial automation</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">Join hundreds of professionals who have enhanced their skills through our SITRAIN accredited training programmes.</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl('CorporateTraining')}><Button size="lg" className="w-full sm:w-auto bg-white text-[#009999] hover:bg-slate-100 rounded-full px-8 h-14 text-base"><Building2 className="w-5 h-5 mr-2" />Request Corporate Quote</Button></Link>
            <Link to={createPageUrl('Contact')}><Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-white text-white hover:bg-white/10 rounded-full px-8 h-14 text-base"><Mail className="w-5 h-5 mr-2" />Contact Us</Button></Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
