import Image from 'next/image';
import React from 'react';
import Button from '@/components/shared/Button';
import { useRouter } from 'next/router';

const HeroSection = () => {
  const router = useRouter();

  return (
    <div className="h-auto flex items-center bg-primary-50">
      <div className="container flex flex-col lg:flex-row items-center py-16">
        <div className="text-center lg:text-left w-full lg:w-1/2 text-gray-800">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold leading-relaxed">Read Quran Everyday</h1>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold">Add Your Daily Routine</h1>
          <p className="mt-4 text-sm text-gray-600 tracking-wide leading-relaxed">
            The quran is the central religious text of islam. Muslim&apos;s believe the Quran is the book of divine
            guidance and direction for mankind
          </p>
          <div className="mt-6">
            <Button className="px-4 md:px-6 py-2 md:py-3" onClick={(e) => router.push('/dashboard')}>
              Read Quran
            </Button>
            <Button
              outline={true}
              className="px-4 md:px-6 py-2 md:py-3 ml-2"
              onClick={(e) => router.push('/dashboard')}
            >
              Listen Quran
            </Button>
          </div>
        </div>
        <Image src="/images/hero.png" height={600} width={600} alt="hero-section-image" />
      </div>
    </div>
  );
};

export default HeroSection;
