import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import TrustStrip from '@/components/home/TrustStrip';
import CoursePathways from '@/components/home/CoursePathways';
import FeaturedCourses from '@/components/home/FeaturedCourses';
import FacilitiesPreview from '@/components/home/FacilitiesPreview';
import Testimonials from '@/components/home/Testimonials';
import CTABanner from '@/components/home/CTABanner';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <TrustStrip />
      <CoursePathways />
      <FeaturedCourses />
      <FacilitiesPreview />
      <Testimonials />
      <CTABanner />
    </div>
  );
}
