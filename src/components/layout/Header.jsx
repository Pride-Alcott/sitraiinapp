import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from 'lucide-react';
import { cn } from "@/lib/utils";

const navItems = [
  { label: 'Home', page: 'Home' },
  { label: 'Courses', page: 'Courses' },
  { label: 'Corporate Training', page: 'CorporateTraining' },
  { label: 'Facilities', page: 'Facilities' },
  { label: 'About', page: 'About' },
  { label: 'Contact', page: 'Contact' },
];

export default function Header({ currentPage }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100" : "bg-white")}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to={createPageUrl('Home')} className="flex items-center gap-3">
            <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6996a97779f077e2468703eb/1c0058ee2_image.png" alt="AMTC Logo" className="h-10 w-auto object-contain" />
            <div className="hidden sm:block h-8 w-px bg-slate-200" />
            <img src="https://webapps.mandela.ac.za/design/Resources/images/logos/Secondary.PNG" alt="Nelson Mandela University Logo" className="hidden sm:block h-10 w-auto object-contain rounded" />
          </Link>
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.page} to={createPageUrl(item.page)} className={cn("px-4 py-2 text-sm font-medium rounded-lg transition-colors", currentPage === item.page ? "text-[#009999] bg-[#009999]/5" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50")}>{item.label}</Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link to={createPageUrl('Contact')} className="hidden sm:block"><Button className="bg-[#009999] hover:bg-[#008080] text-white rounded-full px-6">Enquire Now</Button></Link>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden"><Button variant="ghost" size="icon" className="text-slate-700"><Menu className="h-6 w-6" /></Button></SheetTrigger>
              <SheetContent side="right" className="w-[300px] p-0">
                <div className="flex flex-col h-full">
                  <div className="p-6 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6996a97779f077e2468703eb/1c0058ee2_image.png" alt="AMTC Logo" className="h-8 w-auto object-contain" />
                      <img src="https://webapps.mandela.ac.za/design/Resources/images/logos/Secondary.PNG" alt="NMU Logo" className="h-8 w-auto object-contain rounded" />
                    </div>
                  </div>
                  <nav className="flex-1 p-4">
                    {navItems.map((item) => (
                      <Link key={item.page} to={createPageUrl(item.page)} onClick={() => setIsOpen(false)} className={cn("flex items-center px-4 py-3 text-base font-medium rounded-xl transition-colors mb-1", currentPage === item.page ? "text-[#009999] bg-[#009999]/10" : "text-slate-700 hover:bg-slate-50")}>{item.label}</Link>
                    ))}
                  </nav>
                  <div className="p-4 border-t border-slate-100">
                    <Link to={createPageUrl('Contact')} onClick={() => setIsOpen(false)}><Button className="w-full bg-[#009999] hover:bg-[#008080] text-white rounded-full">Enquire Now</Button></Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
