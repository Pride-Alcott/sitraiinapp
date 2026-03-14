import React from 'react';
import { motion } from 'framer-motion';
import EnquiryForm from '@/components/forms/EnquiryForm';
import { Mail, Phone, MapPin, Clock, Building2, Linkedin, Facebook } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Get in Touch</h1>
            <p className="text-lg text-slate-600">Have questions about our training programmes? We'd love to hear from you. Reach out to discuss your training needs.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
              <div className="bg-white rounded-2xl p-6 border border-slate-200">
                <h2 className="text-xl font-semibold text-slate-900 mb-6">Contact Information</h2>
                <div className="space-y-5">
                  <a href="mailto:Saadiqa.Pandie@mandela.ac.za" className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-[#009999]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#009999] transition-colors"><Mail className="w-5 h-5 text-[#009999] group-hover:text-white transition-colors" /></div>
                    <div><p className="text-sm text-slate-500">Email</p><p className="font-medium text-slate-900 group-hover:text-[#009999] transition-colors">Saadiqah.Pandie@mandela.ac.za</p></div>
                  </a>
                  <a href="tel:+27415043092" className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-[#009999]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#009999] transition-colors"><Phone className="w-5 h-5 text-[#009999] group-hover:text-white transition-colors" /></div>
                    <div><p className="text-sm text-slate-500">Phone</p><p className="font-medium text-slate-900 group-hover:text-[#009999] transition-colors">+27 41 504 3092</p></div>
                  </a>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#009999]/10 rounded-lg flex items-center justify-center flex-shrink-0"><MapPin className="w-5 h-5 text-[#009999]" /></div>
                    <div><p className="text-sm text-slate-500">Address</p><p className="font-medium text-slate-900">Nelson Mandela University<br />Port Elizabeth<br />South Africa</p></div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-slate-200">
                <div className="flex items-center gap-3 mb-4"><Clock className="w-5 h-5 text-[#009999]" /><h3 className="font-semibold text-slate-900">Office Hours</h3></div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-slate-600">Monday - Friday</span><span className="font-medium text-slate-900">08:00 - 16:00</span></div>
                  <div className="flex justify-between"><span className="text-slate-600">Saturday</span><span className="font-medium text-slate-900">Closed</span></div>
                  <div className="flex justify-between"><span className="text-slate-600">Sunday</span><span className="font-medium text-slate-900">Closed</span></div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  <a href="https://www.linkedin.com/in/siemens-training-centre-587355284" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-100 hover:bg-[#009999] rounded-lg flex items-center justify-center transition-colors group" aria-label="LinkedIn"><Linkedin className="w-5 h-5 text-slate-600 group-hover:text-white" /></a>
                  <a href="https://www.facebook.com/people/Siemens-Training-Centre-Nelson-Mandela-University/61550328779757/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-100 hover:bg-[#009999] rounded-lg flex items-center justify-center transition-colors group" aria-label="Facebook"><Facebook className="w-5 h-5 text-slate-600 group-hover:text-white" /></a>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 border border-slate-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#009999]/10 rounded-xl flex items-center justify-center"><Building2 className="w-6 h-6 text-[#009999]" /></div>
                  <div><h2 className="text-xl font-semibold text-slate-900">Send us a Message</h2><p className="text-sm text-slate-500">We'll respond within 1-2 business days</p></div>
                </div>
                <EnquiryForm showType={true} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Find Us</h2>
            <div className="bg-slate-100 rounded-2xl h-[400px] flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                <p className="text-slate-600 font-medium">Nelson Mandela University</p>
                <p className="text-slate-500">Port Elizabeth, South Africa</p>
                <a href="https://maps.google.com/?q=Nelson+Mandela+University+Port+Elizabeth" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-[#009999] hover:underline">View on Google Maps →</a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
