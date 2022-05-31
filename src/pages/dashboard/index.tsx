import SearchInput from '@/components/shared/SearchInput';
import SurahCard from '@/components/shared/SurahCard';
import AppLayout from '@/layouts/AppLayout';
import { Surah } from '@/types';
import { NextPage } from 'next';
import React, { useState } from 'react';
const surahs = require('@/public/data/surahs.json') as Surah[];

const Dashboard: NextPage = () => {
  return (
    <AppLayout title="Koran.co | Dashboard">
      {/* <div className="max-w-md mb-6"></div> */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {surahs.map((surah, index) => {
          return <SurahCard key={index} surah={surah} />;
        })}
      </div>
    </AppLayout>
  );
};

export default Dashboard;
