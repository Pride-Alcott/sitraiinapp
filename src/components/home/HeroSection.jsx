import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Award, Users, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-[#009999]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <Badge className="bg-[#009999]/10 text-[#009999] hover:bg-[#009999]/20 border-0 px-3 py-1"><Award className="w-3.5 h-3.5 mr-1.5" />SITRAIN Accredited</Badge>
              <Badge variant="outline" className="border-slate-200 text-slate-600 px-3 py-1"><Users className="w-3.5 h-3.5 mr-1.5" />CPD Friendly</Badge>
              <Badge variant="outline" className="border-slate-200 text-slate-600 px-3 py-1"><GraduationCap className="w-3.5 h-3.5 mr-1.5" />Industry & Students</Badge>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] mb-6">
              Hands-on Siemens{' '}<span className="text-[#009999]">SITRAIN</span>{' '}Accredited Training
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8 max-w-xl">
              Develop job-ready automation skills — shorter start-up times, reduced downtime, faster troubleshooting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={createPageUrl('Courses')}><Button size="lg" className="w-full sm:w-auto bg-[#009999] hover:bg-[#008080] text-white rounded-full px-8 h-14 text-base">Browse Courses<ArrowRight className="w-5 h-5 ml-2" /></Button></Link>
              <Link to={createPageUrl('Contact')}><Button size="lg" variant="outline" className="w-full sm:w-auto border-slate-300 hover:bg-slate-50 rounded-full px-8 h-14 text-base">Enquire Now</Button></Link>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://media.licdn.com/dms/image/v2/D4D22AQH11RqQIqHt8w/feedshare-shrink_2048_1536/B4DZyzg5q_J4Ak-/0/1772538274032?e=1775088000&v=beta&t=HE5GZ2Df4Akgwd3CK1XS0sds_LZXrqTiPf_0TrZTokA" alt="Training consultant with Siemens S7-1500 PLC station at AMTC" className="w-full h-[400px] lg:h-[500px] object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#009999] rounded-lg flex items-center justify-center flex-shrink-0"><Award className="w-6 h-6 text-white" /></div>
                  <div><p className="font-semibold text-slate-900">Siemens PLC Training Lab</p><p className="text-sm text-slate-500">S7 Classic • TIA Portal • S7-1500</p></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
