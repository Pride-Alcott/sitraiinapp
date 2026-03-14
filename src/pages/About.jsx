import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, Target, Users, GraduationCap, Building2, Clock, CheckCircle2, ArrowRight, BookOpen, Wrench, Shield } from 'lucide-react';

const whyChooseUs = [
  { icon: Wrench, title: 'Practical, Hands-on Labs', description: 'Every course includes extensive practical exercises on real Siemens equipment.' },
  { icon: Clock, title: 'Reduced Downtime Outcomes', description: 'Learn troubleshooting techniques that translate directly to faster fault resolution.' },
  { icon: BookOpen, title: 'Structured Training Pathways', description: 'Progressive courses from fundamentals through to advanced specialisations.' },
  { icon: Building2, title: 'University-Based Environment', description: 'Professional, academic setting with access to quality facilities and resources.' },
];

const audiences = [
  { icon: Users, title: 'Industry Professionals', description: 'Maintenance technicians, automation engineers, and electricians seeking to enhance their skills on Siemens platforms.' },
  { icon: GraduationCap, title: 'Engineering Students', description: 'University students looking to gain practical automation skills and industry-recognised certification.' },
  { icon: Building2, title: 'University Staff', description: 'Academic staff seeking CPD points and practical industrial automation experience.' },
];

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-[#009999]/10 text-[#009999] hover:bg-[#009999]/20 border-0"><Award className="w-3.5 h-3.5 mr-1.5" />SITRAIN Accredited</Badge>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">About the Siemens Training Centre</h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">We are a university-based Siemens Training Centre, fully accredited by Siemens Automation and Controls training division (SITRAIN). Our centre operates under an annually renewable contract with Siemens, ensuring our training content and delivery meets the highest industry standards.</p>
              <p className="text-lg text-slate-600 leading-relaxed">Our mission is to build industry-ready automation capability in South Africa by providing comprehensive, hands-on training that enables shorter start-up times, reduced downtime, and faster troubleshooting.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="relative">
              <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80" alt="Training environment" className="rounded-2xl shadow-lg" />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#009999] rounded-lg flex items-center justify-center"><Shield className="w-6 h-6 text-white" /></div>
                  <div><p className="font-semibold text-slate-900">SITRAIN Partner</p><p className="text-sm text-slate-500">Official Siemens Accreditation</p></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-[#009999] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[{icon: Clock, title: 'Shorter Start-up Times', desc: 'Commission new systems faster with proper training and methodology.'},{icon: Target, title: 'Reduced Downtime', desc: 'Minimise production losses with skilled troubleshooting capabilities.'},{icon: Wrench, title: 'Faster Troubleshooting', desc: 'Identify and resolve faults efficiently with structured diagnostic approaches.'}].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4"><item.icon className="w-8 h-8" /></div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-white/80">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Who We Serve</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Our courses cater to a diverse audience with varying backgrounds and objectives.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {audiences.map((audience, index) => (
              <motion.div key={audience.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white rounded-2xl p-8 border border-slate-200 text-center">
                <div className="w-16 h-16 bg-[#009999]/10 rounded-2xl flex items-center justify-center mx-auto mb-6"><audience.icon className="w-8 h-8 text-[#009999]" /></div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{audience.title}</h3>
                <p className="text-slate-600">{audience.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Start Your Training Journey?</h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">Whether you're an individual looking to upskill or a company seeking corporate training, we're here to help.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl('Courses')}><Button size="lg" className="bg-[#009999] hover:bg-[#008080] rounded-full">Browse Courses</Button></Link>
              <Link to={createPageUrl('Contact')}><Button size="lg" variant="outline" className="rounded-full">Contact Us</Button></Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
