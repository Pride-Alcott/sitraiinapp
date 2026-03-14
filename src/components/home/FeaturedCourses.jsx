import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import CourseCard from '@/components/courses/CourseCard';
import { courses } from '@/components/courses/courseData';

export default function FeaturedCourses() {
  const featured = courses.slice(0, 3);
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[#009999] font-semibold mb-3">POPULAR COURSES</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl sm:text-4xl font-bold text-slate-900">Start Your Training Journey</motion.h2>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Link to={createPageUrl('Courses')}><Button variant="outline" className="rounded-full">View All Courses<ArrowRight className="w-4 h-4 ml-2" /></Button></Link>
          </motion.div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((course, index) => (
            <motion.div key={course.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
              <CourseCard course={course} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
