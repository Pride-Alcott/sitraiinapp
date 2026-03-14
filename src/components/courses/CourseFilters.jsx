import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Filter, X } from 'lucide-react';
import { categories, levels, platforms } from './courseData';

export default function CourseFilters({ filters, setFilters }) {
  const hasActiveFilters = filters.level !== 'all' || filters.category !== 'all' || filters.platform !== 'all';
  const clearFilters = () => setFilters({ level: 'all', category: 'all', platform: 'all' });

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-8">
      <div className="flex items-center gap-3 mb-4">
        <Filter className="w-5 h-5 text-[#009999]" />
        <h3 className="font-semibold text-slate-900">Filter Courses</h3>
        {hasActiveFilters && (
          <Button variant="ghost" size="sm" onClick={clearFilters} className="ml-auto text-slate-500 hover:text-slate-700">
            <X className="w-4 h-4 mr-1" />Clear
          </Button>
        )}
      </div>
      <div className="grid sm:grid-cols-3 gap-4">
        <div>
          <label className="text-sm text-slate-500 mb-2 block">Level</label>
          <Select value={filters.level} onValueChange={(value) => setFilters({ ...filters, level: value })}>
            <SelectTrigger className="w-full"><SelectValue placeholder="All Levels" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Levels</SelectItem>
              {levels.map(level => <SelectItem key={level} value={level}>{level}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="text-sm text-slate-500 mb-2 block">Category</label>
          <Select value={filters.category} onValueChange={(value) => setFilters({ ...filters, category: value })}>
            <SelectTrigger className="w-full"><SelectValue placeholder="All Categories" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map(cat => <SelectItem key={cat} value={cat}>{cat}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="text-sm text-slate-500 mb-2 block">Platform</label>
          <Select value={filters.platform} onValueChange={(value) => setFilters({ ...filters, platform: value })}>
            <SelectTrigger className="w-full"><SelectValue placeholder="All Platforms" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Platforms</SelectItem>
              {platforms.map(plat => <SelectItem key={plat} value={plat}>{plat}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
