import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { getCourseBySlug } from '@/components/courses/courseData';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from 'framer-motion';
import {
  Clock, BarChart, Cpu, Users, Target, BookOpen,
  Wrench, Award, Calendar, ArrowLeft, Download, Mail,
  CheckCircle2
} from 'lucide-react';

const levelColors = {
  Intro: 'bg-emerald-100 text-emerald-700',
  Intermediate: 'bg-blue-100 text-blue-700',
  Advanced: 'bg-purple-100 text-purple-700',
};

export default function CourseDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const slug = urlParams.get('slug');
  const course = getCourseBySlug(slug);

  if (!course) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Course Not Found</h1>
          <Link to={createPageUrl('Courses')}>
            <Button>Back to Courses</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <Link
            to={createPageUrl('Courses')}
            className="inline-flex items-center text-slate-500 hover:text-slate-700 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Courses
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid lg:grid-cols-3 gap-8"
          >
            {/* Main Info */}
            <div className="lg:col-span-2">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className={`${levelColors[course.level]} border-0`}>
                  {course.level}
                </Badge>
                <Badge variant="outline" className="border-slate-200">
                  {course.category}
                </Badge>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                {course.title}
              </h1>
              <p className="text-lg text-slate-600 mb-6">
                {course.summary}
              </p>
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2 text-slate-600">
                  <Clock className="w-5 h-5 text-[#009999]" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <BarChart className="w-5 h-5 text-[#009999]" />
                  <span>{course.level}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <Cpu className="w-5 h-5 text-[#009999]" />
                  <span>{course.platform}</span>
                </div>
              </div>
            </div>

            {/* Quick Actions Card */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <p className="text-sm text-slate-500 mb-2">Pricing</p>
              <p className="text-2xl font-bold text-slate-900 mb-4">Available on request</p>
              <div className="space-y-3">
                <Link to={createPageUrl('Contact')} className="block">
                  <Button className="w-full bg-[#009999] hover:bg-[#008080]">
                    <Mail className="w-4 h-4 mr-2" />
                    Enquire About This Course
                  </Button>
                </Link>
                <Button variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download Brochure
                </Button>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-200">
                <p className="text-sm text-slate-500 mb-2">Prerequisites</p>
                <p className="text-sm text-slate-700">{course.prerequisites}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Who It's For */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl p-6 border border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#009999]/10 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-[#009999]" />
                  </div>
                  <h2 className="text-xl font-semibold text-slate-900">Who It's For</h2>
                </div>
                <p className="text-slate-600">{course.who_its_for}</p>
              </motion.div>

              {/* Outcomes */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white rounded-2xl p-6 border border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#009999]/10 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-[#009999]" />
                  </div>
                  <h2 className="text-xl font-semibold text-slate-900">What You'll Be Able To Do</h2>
                </div>
                <ul className="space-y-3">
                  {course.outcomes.map((outcome, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#009999] flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Syllabus */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white rounded-2xl p-6 border border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#009999]/10 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-[#009999]" />
                  </div>
                  <h2 className="text-xl font-semibold text-slate-900">Course Content</h2>
                </div>
                <Accordion type="single" collapsible className="w-full">
                  {course.syllabus.map((section, i) => (
                    <AccordionItem key={i} value={`section-${i}`}>
                      <AccordionTrigger className="text-left hover:no-underline">
                        <span className="font-medium text-slate-900">{section.section}</span>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 pt-2">
                          {section.topics.map((topic, j) => (
                            <li key={j} className="flex items-start gap-2 text-slate-600">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#009999] mt-2 flex-shrink-0" />
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>

              {/* Practical Labs */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white rounded-2xl p-6 border border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#009999]/10 rounded-lg flex items-center justify-center">
                    <Wrench className="w-5 h-5 text-[#009999]" />
                  </div>
                  <h2 className="text-xl font-semibold text-slate-900">Practical Labs Included</h2>
                </div>
                <ul className="space-y-3">
                  {course.practical_labs.map((lab, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#009999]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-semibold text-[#009999]">{i + 1}</span>
                      </div>
                      <span className="text-slate-600">{lab}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white rounded-2xl p-6 border border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#009999]/10 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-[#009999]" />
                  </div>
                  <h3 className="font-semibold text-slate-900">Certification</h3>
                </div>
                <p className="text-sm text-slate-600">{course.certification}</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white rounded-2xl p-6 border border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#009999]/10 rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-[#009999]" />
                  </div>
                  <h3 className="font-semibold text-slate-900">Upcoming Sessions</h3>
                </div>
                {course.upcoming_sessions && course.upcoming_sessions.length > 0 ? (
                  <div className="space-y-2">
                    {course.upcoming_sessions.map((session, i) => (
                      <div key={i} className="flex justify-between items-center py-2 border-b border-slate-100 last:border-0">
                        <span className="text-sm text-slate-700 font-medium">{session}</span>
                        <Badge variant="outline" className="text-xs text-[#009999] border-[#009999]/40">Available</Badge>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-slate-500">Contact us to register interest — dates to be confirmed.</p>
                )}
                <p className="text-xs text-slate-400 mt-4">Pricing available on request.</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-gradient-to-br from-[#009999] to-[#009999] rounded-2xl p-6 text-white">
                <h3 className="font-semibold text-lg mb-2">Ready to Enrol?</h3>
                <p className="text-white/80 text-sm mb-4">Get in touch to discuss your training needs and book your place.</p>
                <Link to={createPageUrl('Contact')}>
                  <Button className="w-full bg-white text-[#009999] hover:bg-slate-100">
                    Enquire Now
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
