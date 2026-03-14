import React from 'react';
import { Award, Wrench, BookOpen, Target, FileCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const trustItems = [
  { icon: Award, title: 'SITRAIN Accredited', description: 'Official Siemens certification' },
  { icon: Wrench, title: 'Hands-on Practical Labs', description: 'Real hardware training' },
  { icon: BookOpen, title: 'CPD Support for Staff', description: 'Continuing professional development' },
  { icon: Target, title: 'Industry-Ready Outcomes', description: 'Job-ready automation skills' },
  { icon: FileCheck, title: 'Certificate of Completion', description: 'Recognised qualification' },
];

export default function TrustStrip() {
  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {trustItems.map((item, index) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }} className="flex flex-col items-center text-center group">
              <div className="w-14 h-14 bg-[#009999]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#009999] transition-colors"><item.icon className="w-7 h-7 text-[#009999] group-hover:text-white transition-colors" /></div>
              <h3 className="font-semibold text-slate-900 text-sm mb-1">{item.title}</h3>
              <p className="text-xs text-slate-500">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
