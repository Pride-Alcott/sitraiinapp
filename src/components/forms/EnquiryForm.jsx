import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Loader2, Send, CheckCircle2 } from 'lucide-react';

export default function EnquiryForm({ type = 'general', showType = true }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ type, name: '', email: '', phone: '', company_name: '', message: '' });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) { newErrors.email = 'Email is required'; }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) { newErrors.email = 'Please enter a valid email'; }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    // TODO: Replace with your real API call, e.g.:
    // await fetch(import.meta.env.VITE_API_URL + '/enquiry', { method: 'POST', body: JSON.stringify(formData) });
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("Thank you! Your enquiry has been submitted. We'll be in touch soon.");
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-[#009999]/10 rounded-full flex items-center justify-center mx-auto mb-4"><CheckCircle2 className="w-8 h-8 text-[#009999]" /></div>
        <h3 className="text-xl font-semibold text-slate-900 mb-2">Thank You!</h3>
        <p className="text-slate-600 mb-6">Your enquiry has been submitted successfully. We'll be in touch within 1-2 business days.</p>
        <Button variant="outline" onClick={() => { setIsSubmitted(false); setFormData({ type, name: '', email: '', phone: '', company_name: '', message: '' }); }}>Submit Another Enquiry</Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {showType && (
        <div>
          <Label htmlFor="type">Enquiry Type</Label>
          <Select value={formData.type} onValueChange={(value) => setFormData({ ...formData, type: value })}>
            <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select type" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="Individual">Individual</SelectItem>
              <SelectItem value="Company">Company</SelectItem>
              <SelectItem value="Corporate Quote">Corporate Quote</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Full Name *</Label>
          <Input id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={`mt-1.5 ${errors.name ? 'border-red-500' : ''}`} placeholder="Your name" />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <Label htmlFor="email">Email Address *</Label>
          <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={`mt-1.5 ${errors.email ? 'border-red-500' : ''}`} placeholder="your@email.com" />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="mt-1.5" placeholder="+27 xxx xxx xxxx" />
        </div>
        <div>
          <Label htmlFor="company">Company Name</Label>
          <Input id="company" value={formData.company_name} onChange={(e) => setFormData({ ...formData, company_name: e.target.value })} className="mt-1.5" placeholder="Your company" />
        </div>
      </div>
      <div>
        <Label htmlFor="message">Message *</Label>
        <Textarea id="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className={`mt-1.5 min-h-[120px] ${errors.message ? 'border-red-500' : ''}`} placeholder="Tell us about your training needs..." />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </div>
      <Button type="submit" disabled={isSubmitting} className="w-full bg-[#009999] hover:bg-[#008080]">
        {isSubmitting ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" />Submitting...</> : <><Send className="w-4 h-4 mr-2" />Submit Enquiry</>}
      </Button>
    </form>
  );
}
