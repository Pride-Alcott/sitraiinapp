import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Badge } from "@/components/ui/badge";
import { Clock, BarChart, ArrowRight, Cpu } from 'lucide-react';

const levelColors = {
  Intro: 'bg-emerald-100 text-emerald-700',
  Intermediate: 'bg-blue-100 text-blue-700',
  Advanced: 'bg-purple-100 text-purple-700',
};

export default function CourseCard({ course }) {
  return (
    <Link to={createPageUrl(`CourseDetail?slug=${course.slug}`)} className="block h-full bg-white rounded-2xl border border-slate-200 hover:border-[#009999]/30 hover:shadow-lg transition-all duration-300 overflow-hidden group">
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge className={`${levelColors[course.level]} border-0 text-xs font-medium`}>{course.level}</Badge>
          <Badge variant="outline" className="border-slate-200 text-slate-500 text-xs">{course.category}</Badge>
        </div>
        <h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-[#009999] transition-colors line-clamp-2">{course.title}</h3>
        <p className="text-sm text-slate-600 mb-4 line-clamp-2">{course.summary}</p>
        <div className="flex items-center gap-2 mb-4">
          <Cpu className="w-4 h-4 text-slate-400" />
          <span className="text-xs text-slate-500">{course.platform}</span>
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{course.duration}</span>
            <span className="flex items-center gap-1.5"><BarChart className="w-4 h-4" />{course.level}</span>
          </div>
          <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-[#009999] group-hover:translate-x-1 transition-all" />
        </div>
      </div>
    </Link>
  );
}
