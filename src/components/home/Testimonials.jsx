import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  { quote: "The hands-on approach made all the difference. Within weeks of completing the course, I was troubleshooting PLC faults that used to take hours in just minutes.", name: "James M.", role: "Maintenance Technician", company: "Manufacturing Plant, Eastern Cape" },
  { quote: "As a recent graduate, this training gave me practical skills that set me apart from other candidates. I secured my first automation role within a month.", name: "Thandi N.", role: "Graduate Engineer", company: "Process Automation Company" },
  { quote: "The TIA Portal course was exactly what our team needed. The instructors understood our industry challenges and tailored examples to our needs.", name: "Michael P.", role: "Automation Technician", company: "Automotive Supplier" },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[#009999] font-semibold mb-3">TESTIMONIALS</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl sm:text-4xl font-bold text-slate-900">What Our Delegates Say</motion.h2>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row items-center gap-8 bg-slate-50 rounded-2xl p-8 mb-10">
          <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6996a97779f077e2468703eb/ef194b105_471280952_453442584477770_2920642863364674362_n.jpg" alt="Delegates holding SITRAIN certificates" className="w-full md:w-72 h-56 object-cover object-center rounded-xl shadow-md flex-shrink-0" />
          <div>
            <Quote className="w-8 h-8 text-[#009999]/30 mb-3" />
            <p className="text-lg text-slate-700 leading-relaxed italic mb-4">"Our instructors bring real-world industry experience into every session. We don't just teach theory — we work through the exact scenarios you'll encounter on the plant floor."</p>
            <p className="font-semibold text-slate-900">Training Consultant</p>
            <p className="text-sm text-[#009999]">Siemens Training Centre — Nelson Mandela University</p>
          </div>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div key={testimonial.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-slate-50 rounded-2xl p-8 relative">
              <Quote className="w-10 h-10 text-[#009999]/20 absolute top-6 right-6" />
              <p className="text-slate-600 leading-relaxed mb-6 relative z-10">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#009999] to-[#009999] flex items-center justify-center text-white font-semibold">{testimonial.name.split(' ').map(n => n[0]).join('')}</div>
                <div><p className="font-semibold text-slate-900">{testimonial.name}</p><p className="text-sm text-slate-500">{testimonial.role}</p><p className="text-xs text-slate-400">{testimonial.company}</p></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
