import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowRight, Wrench, Code, Network, Monitor, Gauge, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const pathways = [
  { icon: Wrench, title: 'Service & Maintenance', description: 'Diagnose faults, perform backups, replace modules, and maintain Siemens PLC systems with confidence.', color: 'from-blue-500 to-blue-600', platforms: 'S7 Classic • TIA Portal' },
  { icon: Code, title: 'Programming', description: 'Build structured, maintainable PLC programs from process requirements through to commissioning.', color: 'from-[#009999] to-[#009999]', platforms: 'S7 Classic • TIA Portal • SCL' },
  { icon: Network, title: 'Networking & Communications', description: 'Configure and troubleshoot industrial networks including PROFINET and Industrial Ethernet.', color: 'from-purple-500 to-purple-600', platforms: 'SIMATIC NET • PROFINET' },
  { icon: Monitor, title: 'HMI / SCADA', description: 'Design operator interfaces with intuitive navigation, alarms, and trending capabilities.', color: 'from-orange-500 to-orange-600', platforms: 'WinCC Flexible • TIA WinCC' },
  { icon: Gauge, title: 'Drives & Motion', description: 'Commission and troubleshoot AC drives for motor control applications.', color: 'from-rose-500 to-rose-600', platforms: 'SINAMICS • AC Drives' },
  { icon: Shield, title: 'Safety', description: 'Implement functional safety solutions for machine safety applications.', color: 'from-emerald-500 to-emerald-600', platforms: 'Distributed Safety • TIA Safety' },
];

export default function CoursePathways() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[#009999] font-semibold mb-3">TRAINING PATHWAYS</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Structured Learning Tracks</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-lg text-slate-600 max-w-2xl mx-auto">Choose your pathway based on your role and career goals. Each track builds progressively from fundamentals to advanced topics.</motion.p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pathways.map((pathway, index) => (
            <motion.div key={pathway.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
              <Link to={createPageUrl('Courses')} className="block h-full bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 group">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pathway.color} flex items-center justify-center mb-5`}><pathway.icon className="w-6 h-6 text-white" /></div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-[#009999] transition-colors">{pathway.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{pathway.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">{pathway.platforms}</span>
                  <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-[#009999] group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
