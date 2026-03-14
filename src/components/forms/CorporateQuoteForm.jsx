import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Loader2, Send, CheckCircle2 } from 'lucide-react';
import { courses } from '@/components/courses/courseData';

export default function CorporateQuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ company_name: '', contact_person: '', email: '', phone: '', number_of_learners: '', training_location: '', course_interest: '', message: '' });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.company_name.trim()) newErrors.company_name = 'Company name is required';
    if (!formData.contact_person.trim()) newErrors.contact_person = 'Contact person is required';
    if (!formData.email.trim()) { newErrors.email = 'Email is required'; }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) { newErrors.email = 'Please enter a valid email'; }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.number_of_learners) newErrors.number_of_learners = 'Number of learners is required';
    if (!formData.training_location) newErrors.training_location = 'Training location is required';
    if (!formData.course_interest) newErrors.course_interest = 'Please select a course';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    // TODO: Replace with your real API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("Thank you! Your quote request has been submitted. We'll be in touch soon.");
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-[#009999]/10 rounded-full flex items-center justify-center mx-auto mb-4"><CheckCircle2 className="w-8 h-8 text-[#009999]" /></div>
        <h3 className="text-xl font-semibold text-slate-900 mb-2">Quote Request Received!</h3>
        <p className="text-slate-600 mb-6">Our team will review your requirements and respond within 1-2 business days with a customised proposal.</p>
        <Button variant="outline" onClick={() => { setIsSubmitted(false); setFormData({ company_name: '', contact_person: '', email: '', phone: '', number_of_learners: '', training_location: '', course_interest: '', message: '' }); }}>Submit Another Request</Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="company_name">Company Name *</Label>
          <Input id="company_name" value={formData.company_name} onChange={(e) => setFormData({ ...formData, company_name: e.target.value })} className={`mt-1.5 ${errors.company_name ? 'border-red-500' : ''}`} placeholder="Your company" />
          {errors.company_name && <p className="text-red-500 text-xs mt-1">{errors.company_name}</p>}
        </div>
        <div>
          <Label htmlFor="contact_person">Contact Person *</Label>
          <Input id="contact_person" value={formData.contact_person} onChange={(e) => setFormData({ ...formData, contact_person: e.target.value })} className={`mt-1.5 ${errors.contact_person ? 'border-red-500' : ''}`} placeholder="Your name" />
          {errors.contact_person && <p className="text-red-500 text-xs mt-1">{errors.contact_person}</p>}
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="email">Email Address *</Label>
          <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={`mt-1.5 ${errors.email ? 'border-red-500' : ''}`} placeholder="your@company.com" />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
        <div>
          <Label htmlFor="phone">Phone Number *</Label>
          <Input id="phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className={`mt-1.5 ${errors.phone ? 'border-red-500' : ''}`} placeholder="+27 xxx xxx xxxx" />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label>Number of Learners *</Label>
          <Select value={formData.number_of_learners} onValueChange={(value) => setFormData({ ...formData, number_of_learners: value })}>
            <SelectTrigger className={`mt-1.5 ${errors.number_of_learners ? 'border-red-500' : ''}`}><SelectValue placeholder="Select range" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="1-5">1-5 learners</SelectItem>
              <SelectItem value="6-10">6-10 learners</SelectItem>
              <SelectItem value="11-20">11-20 learners</SelectItem>
              <SelectItem value="21+">21+ learners</SelectItem>
            </SelectContent>
          </Select>
          {errors.number_of_learners && <p className="text-red-500 text-xs mt-1">{errors.number_of_learners}</p>}
        </div>
        <div>
          <Label>Training Location *</Label>
          <Select value={formData.training_location} onValueChange={(value) => setFormData({ ...formData, training_location: value })}>
            <SelectTrigger className={`mt-1.5 ${errors.training_location ? 'border-red-500' : ''}`}><SelectValue placeholder="Select location" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="Training Centre">At Training Centre</SelectItem>
              <SelectItem value="Onsite">Onsite at Our Company</SelectItem>
              <SelectItem value="Flexible">Flexible / To Discuss</SelectItem>
            </SelectContent>
          </Select>
          {errors.training_location && <p className="text-red-500 text-xs mt-1">{errors.training_location}</p>}
        </div>
      </div>
      <div>
        <Label>Course of Interest *</Label>
        <Select value={formData.course_interest} onValueChange={(value) => setFormData({ ...formData, course_interest: value })}>
          <SelectTrigger className={`mt-1.5 ${errors.course_interest ? 'border-red-500' : ''}`}><SelectValue placeholder="Select a course" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="custom">Custom / Multiple Courses</SelectItem>
            {courses.map(course => <SelectItem key={course.slug} value={course.title}>{course.title}</SelectItem>)}
          </SelectContent>
        </Select>
        {errors.course_interest && <p className="text-red-500 text-xs mt-1">{errors.course_interest}</p>}
      </div>
      <div>
        <Label htmlFor="message">Additional Requirements</Label>
        <Textarea id="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="mt-1.5 min-h-[100px]" placeholder="Tell us about your team's training needs, preferred dates, or any specific requirements..." />
      </div>
      <Button type="submit" disabled={isSubmitting} className="w-full bg-[#009999] hover:bg-[#008080]">
        {isSubmitting ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" />Submitting...</> : <><Send className="w-4 h-4 mr-2" />Request Quote</>}
      </Button>
    </form>
  );
}
