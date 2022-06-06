import Image from 'next/image';
import React from 'react';

const AboutSection = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">
        <div className="w-full">
          <Image src="/images/about-section.png" width={500} height={500} />
        </div>
        <div>
          <h2 className="text-3xl font-semibold">
            About <span className="text-primary-500">Koran</span>
            <span className="text-base">.co</span>
          </h2>
          <div className="mt-4 text-gray-700 tracking-wider text-sm text-justify">
            <p>
              The Nobel Quran is the central religious text of Islam. Muslims believe the Quran is the book of Divine
              guidance and direction for mankind, and consider the original Arabic text the final revelation of Allah.
            </p>
            <p className="mt-2">
              All translations of the original Arabic text are thus interpretations of the original neamings and should
              be embraced as such.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
