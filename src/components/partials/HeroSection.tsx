import Image from 'next/image';
import React from 'react';
import Button from '@/components/shared/Button';

const HeroSection = () => {
  return (
    <div className="h-auto flex items-center bg-primary-50">
      <div className="container flex flex-col lg:flex-row items-center">
        <div className="py-10 text-center lg:text-left w-full lg:w-1/2">
          <h1 className="text-5xl font-semibold leading-relaxed">Read Quran Everyday</h1>
          <h1 className="text-5xl font-semibold">Add Your Daily Routine</h1>
          <p className="mt-4 text-sm text-gray-600 tracking-wide leading-relaxed">
            The quran is the central religious text of islam. Muslim&apos;s believe the Quran is the book of divine
            guidance and direction for mankind
          </p>
          <div className="mt-6">
            <Button className="px-6 py-3">Read Quran</Button>
            <Button outline={true} className="px-6 py-3 ml-2">
              Listen Quran
            </Button>
          </div>
        </div>
        <Image src="/images/hero.png" height={600} width={600} />
      </div>
    </div>
  );
};

export default HeroSection;
