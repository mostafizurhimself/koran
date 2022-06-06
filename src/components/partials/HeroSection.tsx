import React from 'react';
import Button from '../shared/Button';

const HeroSection = () => {
  return (
    <div className="h-[500px] flex items-center bg-primary-50">
      <div className="container">
        <div>
          <h1 className="text-5xl font-semibold leading-relaxed">Read Quran Everyday</h1>
          <h1 className="text-5xl font-semibold">Add Your Daily Routine</h1>
          <p className="w-1/2 mt-4 text-sm text-gray-600 tracking-wide leading-relaxed">
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
      </div>
    </div>
  );
};

export default HeroSection;
