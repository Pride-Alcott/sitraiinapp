import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function PageNotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-24 h-24 bg-[#009999]/10 rounded-full flex items-center justify-center mx-auto mb-8">
          <Search className="w-12 h-12 text-[#009999]" />
        </div>
        <h1 className="text-6xl font-bold text-slate-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-slate-700 mb-4">Page Not Found</h2>
        <p className="text-slate-500 mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to={createPageUrl('Home')}>
            <Button className="bg-[#009999] hover:bg-[#008080] rounded-full px-6">
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Button>
          </Link>
          <Button
            variant="outline"
            className="rounded-full px-6"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}
