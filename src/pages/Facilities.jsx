import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Cpu, Monitor, Network, Wrench, Settings, CheckCircle2, Calendar, ArrowRight } from 'lucide-react';

const facilityImages = [
  { src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80', alt: 'PLC training bench' },
  { src: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80', alt: 'Industrial automation equipment' },
  { src: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=600&q=80', alt: 'Electronics workstation' },
  { src: 'https://images.unsplash.com/photo-1581091870627-3a3e2d8c5b45?w=600&q=80', alt: 'Control panel wiring' },
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', alt: 'Programming workstation' },
  { src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80', alt: 'Circuit board closeup' },
  { src: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&q=80', alt: 'Industrial control room' },
  { src: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&q=80', alt: 'Engineering workspace' },
];

const equipment = [
  { icon: Cpu, title: 'Siemens PLC Hardware', description: 'Industry-standard S7-1200 and S7-1500 controllers with full I/O configurations for hands-on programming and commissioning.' },
  { icon: Monitor, title: 'TIA Portal Workstations', description: 'Modern PC workstations equipped with the latest TIA Portal software for integrated engineering across PLC, HMI, and drives.' },
  { icon: Network, title: 'PROFINET Networks', description: 'Fully configured industrial networking setups including switches, IO devices, and diagnostic tools for network training.' },
  { icon: Wrench, title: 'Fault Simulation', description: 'Purpose-built training rigs with injectable faults for realistic troubleshooting scenarios and maintenance practice.' },
  { icon: Settings, title: 'AC Drive Trainers', description: 'SINAMICS drives with motor loads for safe commissioning, parameterisation, and fault diagnosis exercises.' },
  { icon: Monitor, title: 'HMI Panels', description: 'Siemens Comfort Panels and Basic Panels for interface design, alarm configuration, and operator workflow training.' },
];

const capabilities = [
  'Configure real Siemens PLC hardware from rack to I/O',
  'Develop structured programs following industry best practices',
  'Commission live automation systems in a safe environment',
  'Diagnose and troubleshoot real fault scenarios',
  'Configure and test PROFINET industrial networks',
  'Design and deploy HMI operator interfaces',
  'Set up and tune AC drive applications',
  'Validate safety functions on distributed safety systems',
];

export default function Facilities() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-[#FFB81C] font-semibold">OUR FACILITIES</span>
            <h1 className="text-4xl sm:text-5xl font-bold mt-3 mb-6">Real Hardware. Real Faults.<br /><span className="text-[#FFB81C]">Real Troubleshooting.</span></h1>
            <p className="text-lg text-slate-300 mb-8">Our purpose-built training laboratory provides a hands-on environment where you learn on the same equipment you'll encounter in the field.</p>
            <Link to={createPageUrl('Contact')}><Button className="bg-[#009999] hover:bg-[#008080] rounded-full"><Calendar className="w-4 h-4 mr-2" />Book a Visit</Button></Link>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Training Lab Gallery</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Take a look at our well-equipped training environment designed for practical, hands-on learning.</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {facilityImages.map((image, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className={`rounded-xl overflow-hidden ${index === 0 || index === 5 ? 'md:col-span-2 md:row-span-2' : ''}`}>
                <img src={image.src} alt={image.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" style={{ minHeight: index === 0 || index === 5 ? '300px' : '150px' }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Training Equipment</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Our facility features industry-standard Siemens automation equipment, providing you with relevant, transferable skills.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipment.map((item, index) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-slate-50 rounded-2xl p-6">
                <div className="w-12 h-12 bg-[#009999]/10 rounded-xl flex items-center justify-center mb-4"><item.icon className="w-6 h-6 text-[#009999]" /></div>
                <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#009999] to-[#009999] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold mb-4">See Our Facilities for Yourself</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">Arrange a visit to tour our training lab and discuss your training requirements with our team.</p>
            <Link to={createPageUrl('Contact')}><Button size="lg" className="bg-white text-[#009999] hover:bg-slate-100 rounded-full">Book a Visit<ArrowRight className="w-4 h-4 ml-2" /></Button></Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
