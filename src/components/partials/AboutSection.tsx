import Image from 'next/image';
import React from 'react';
import Button from '../shared/Button';

const AboutSection = () => {
  return (
    <div className="container mt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">
        <div className="w-full relative order-2 md:order-1">
          <div className="absolute h-full w-full transform scale-90 border-[16px] border-primary-500"></div>
          <Image src="/images/about.png" width={600} height={500} alt="about-section-image" />
        </div>
        <div className="order-1 md:order-2 py-10 md:py-0">
          <h2 className="text-3xl font-semibold">
            About <span className="text-primary-500">Koran</span>
            <span className="text-base">.co</span>
          </h2>
          <div className="inline-block w-10 h-1 bg-primary-500 rounded-full"></div>
          <div className="mt-4 text-gray-700 tracking-wider text-sm text-justify">
            <p>
              The Nobel Quran is the central religious text of Islam. Muslims believe the Quran is the book of Divine
              guidance and direction for mankind, and consider the original Arabic text the final revelation of Allah.
            </p>
            <p className="mt-2">
              All translations of the original Arabic text are thus interpretations of the original neamings and should
              be embraced as such.
            </p>

            <div className="mt-6">
              <Button outline={true} className="px-6 py-3">
                Read Our Story
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
