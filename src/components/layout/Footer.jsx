import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Mail, Phone, MapPin, Linkedin, Facebook, Award } from 'lucide-react';

const quickLinks = [
  { label: 'Home', page: 'Home' },
  { label: 'Courses', page: 'Courses' },
  { label: 'Corporate Training', page: 'CorporateTraining' },
  { label: 'Facilities', page: 'Facilities' },
  { label: 'About', page: 'About' },
  { label: 'Contact', page: 'Contact' },
];

const courseCategories = ['PLC Programming','Service & Maintenance','Industrial Networking','HMI/SCADA','Safety Systems','AC Drives'];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6996a97779f077e2468703eb/1c0058ee2_image.png" alt="AMTC Logo" className="h-10 w-auto object-contain bg-white rounded px-1" />
              <img src="https://webapps.mandela.ac.za/design/Resources/images/logos/Secondary.PNG" alt="Nelson Mandela University Logo" className="h-10 w-auto object-contain rounded" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">Building industry-ready automation capability through hands-on Siemens SITRAIN accredited training.</p>
            <div className="flex items-center gap-2 p-3 bg-slate-800 rounded-xl">
              <Award className="w-8 h-8 text-[#FFB81C]" />
              <div><p className="text-xs text-slate-400">Officially Accredited</p><p className="text-sm font-semibold text-white">SITRAIN Partner</p></div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (<li key={link.page}><Link to={createPageUrl(link.page)} className="text-slate-400 hover:text-[#FFB81C] transition-colors text-sm">{link.label}</Link></li>))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-6">Training Areas</h4>
            <ul className="space-y-3">
              {courseCategories.map((cat) => (<li key={cat}><Link to={createPageUrl('Courses')} className="text-slate-400 hover:text-[#FFB81C] transition-colors text-sm">{cat}</Link></li>))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li><a href="mailto:saadiq@mandela.ac.za" className="flex items-start gap-3 text-slate-400 hover:text-[#FFB81C] transition-colors"><Mail className="w-5 h-5 mt-0.5 flex-shrink-0" /><span className="text-sm">saadiq@mandela.ac.za</span></a></li>
              <li><a href="tel:+27415043092" className="flex items-start gap-3 text-slate-400 hover:text-[#FFB81C] transition-colors"><Phone className="w-5 h-5 mt-0.5 flex-shrink-0" /><span className="text-sm">+27 41 504 3092</span></a></li>
              <li><div className="flex items-start gap-3 text-slate-400"><MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" /><span className="text-sm">Nelson Mandela University<br />Port Elizabeth, South Africa</span></div></li>
            </ul>
            <div className="flex items-center gap-3 mt-6">
              <a href="https://www.linkedin.com/in/siemens-training-centre-587355284" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 hover:bg-[#009999] rounded-lg flex items-center justify-center transition-colors" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></a>
              <a href="https://www.facebook.com/people/Siemens-Training-Centre-Nelson-Mandela-University/61550328779757/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 hover:bg-[#009999] rounded-lg flex items-center justify-center transition-colors" aria-label="Facebook"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Siemens Training Centre. All rights reserved.</p>
            <p className="text-slate-500 text-xs">SITRAIN is a registered trademark of Siemens AG</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
