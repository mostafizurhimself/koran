import { Surah } from '@/types';
import React from 'react';
import SurahCard from '@/components/shared/SurahCard';
const surahs = require('@/public/data/surahs.json') as Surah[];

const SurahList = () => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {surahs.map((surah, index) => {
        return <SurahCard key={index} surah={surah} />;
      })}
    </div>
  );
};

export default SurahList;
