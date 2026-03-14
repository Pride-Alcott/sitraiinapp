import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CourseFilters from '@/components/courses/CourseFilters';
import CourseCard from '@/components/courses/CourseCard';
import { getFilteredCourses } from '@/components/courses/courseData';
import { GraduationCap } from 'lucide-react';

export default function Courses() {
  const [filters, setFilters] = useState({
    level: 'all',
    category: 'all',
    platform: 'all',
  });

  const filteredCourses = getFilteredCourses(filters);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#009999]/10 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-[#009999]" />
              </div>
              <span className="text-[#009999] font-semibold">COURSE CATALOGUE</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Siemens Automation Courses
            </h1>
            <p className="text-lg text-slate-600">
              Explore our comprehensive range of SITRAIN accredited courses covering PLC programming,
              maintenance, networking, HMI/SCADA, safety, and drives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Course List */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CourseFilters filters={filters} setFilters={setFilters} />

          {filteredCourses.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-slate-500">No courses match your filter criteria.</p>
            </div>
          ) : (
            <>
              <p className="text-sm text-slate-500 mb-6">
                Showing {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''}
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.map((course, index) => (
                  <motion.div
                    key={course.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <CourseCard course={course} />
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
