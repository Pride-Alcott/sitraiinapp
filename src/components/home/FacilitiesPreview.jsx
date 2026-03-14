import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const features = ['Configure real Siemens PLC hardware','Develop structured programs on TIA Portal','Commission live automation systems','Diagnose and fix real fault scenarios'];
const images = [
  'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6996a97779f077e2468703eb/a210c8902_IMG_0029.jpg',
  'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6996a97779f077e2468703eb/91337a17c_IMG_0030.jpg',
  'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6996a97779f077e2468703eb/804b66540_IMG_0031.jpg',
  'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6996a97779f077e2468703eb/f3caf26c2_IMG_0025.jpg',
];

export default function FacilitiesPreview() {
  return (
    <section className="py-20 lg:py-28 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-[#FFB81C] font-semibold mb-3">OUR FACILITIES</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Real hardware. Real faults.<br /><span className="text-[#FFB81C]">Real troubleshooting.</span></h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">Our training lab features industry-standard Siemens equipment, giving you the hands-on experience you need to excel in the field.</p>
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.li key={feature} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FFB81C] flex-shrink-0" /><span className="text-slate-200">{feature}</span>
                </motion.li>
              ))}
            </ul>
            <Link to={createPageUrl('Facilities')}><Button className="bg-[#009999] hover:bg-[#008080] text-white rounded-full px-6">Explore Our Facilities<ArrowRight className="w-4 h-4 ml-2" /></Button></Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4">
            {images.map((src, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className={`rounded-xl overflow-hidden ${index === 0 ? 'row-span-2' : ''}`}>
                <img src={src} alt={`Training facility ${index + 1}`} className={`w-full object-cover ${index === 0 ? 'h-full' : 'h-40'}`} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
