import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import CorporateQuoteForm from '@/components/forms/CorporateQuoteForm';
import {
  Building2, Users, Target, Calendar, Award, CheckCircle2,
  Clipboard, FileText, GraduationCap, ClipboardCheck
} from 'lucide-react';

const benefits = [
  { icon: Target, title: 'Tailored Content', description: 'Programmes customised to your specific equipment, processes, and skill gaps.' },
  { icon: Building2, title: 'Flexible Delivery', description: 'Training at our centre or onsite at your facility—whatever works for your team.' },
  { icon: Users, title: 'Team Development', description: 'Build a consistent skill baseline across your maintenance and engineering teams.' },
  { icon: Calendar, title: 'Convenient Scheduling', description: 'Work with us to find dates that minimise disruption to your operations.' },
];

const processSteps = [
  { icon: Clipboard, title: 'Needs Assessment', description: "We discuss your team's current skills, equipment, and training objectives." },
  { icon: FileText, title: 'Proposal & Schedule', description: 'You receive a customised training plan with content, dates, and pricing.' },
  { icon: GraduationCap, title: 'Hands-on Delivery', description: 'Expert instructors deliver practical, industry-focused training.' },
  { icon: ClipboardCheck, title: 'Certification', description: 'Participants receive certificates of completion for their records.' },
];

export default function CorporateTraining() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#009999]/10 rounded-xl flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-[#009999]" />
                </div>
                <span className="text-[#009999] font-semibold">CORPORATE TRAINING</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">Upskill Your Team with Customised Training</h1>
              <p className="text-lg text-slate-600 mb-8">Whether you need to train a small team or an entire department, we offer flexible corporate training solutions tailored to your specific requirements and schedule.</p>
              <div className="flex flex-wrap gap-4">
                <a href="#quote-form"><Button size="lg" className="bg-[#009999] hover:bg-[#008080] rounded-full">Request a Quote</Button></a>
                <Link to={createPageUrl('Courses')}><Button size="lg" variant="outline" className="rounded-full">View All Courses</Button></Link>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" alt="Corporate training session" className="rounded-2xl shadow-lg" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Corporate Training?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Invest in your team's capabilities and see direct improvements in productivity, safety, and equipment uptime.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div key={benefit.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white rounded-2xl p-6 border border-slate-200">
                <div className="w-12 h-12 bg-[#009999]/10 rounded-xl flex items-center justify-center mb-4"><benefit.icon className="w-6 h-6 text-[#009999]" /></div>
                <h3 className="font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">How It Works</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Our simple 4-step process ensures you get training that delivers real results.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div key={step.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="relative">
                {index < processSteps.length - 1 && <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-slate-200" />}
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-[#009999] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#009999]/20"><step.icon className="w-8 h-8 text-white" /></div>
                  <div className="bg-slate-50 rounded-xl p-4">
                    <span className="text-xs text-[#009999] font-semibold">Step {index + 1}</span>
                    <h3 className="font-semibold text-slate-900 mt-1 mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-600">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="quote-form" className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
            <div className="text-center mb-8">
              <div className="w-14 h-14 bg-[#009999]/10 rounded-xl flex items-center justify-center mx-auto mb-4"><FileText className="w-7 h-7 text-[#009999]" /></div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Request a Quote</h2>
              <p className="text-slate-600">Tell us about your training needs and we'll prepare a customised proposal.</p>
            </div>
            <CorporateQuoteForm />
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
            <div className="flex items-center gap-3"><Award className="w-8 h-8 text-[#009999]" /><div><p className="font-semibold text-slate-900">SITRAIN Accredited</p><p className="text-sm text-slate-500">Official Siemens certification</p></div></div>
            <div className="hidden md:block w-px h-12 bg-slate-200" />
            <div className="flex items-center gap-3"><CheckCircle2 className="w-8 h-8 text-[#009999]" /><div><p className="font-semibold text-slate-900">Hands-on Training</p><p className="text-sm text-slate-500">Real equipment, real scenarios</p></div></div>
            <div className="hidden md:block w-px h-12 bg-slate-200" />
            <div className="flex items-center gap-3"><Users className="w-8 h-8 text-[#009999]" /><div><p className="font-semibold text-slate-900">Expert Instructors</p><p className="text-sm text-slate-500">Industry-experienced trainers</p></div></div>
          </div>
        </div>
      </section>
    </div>
  );
}
