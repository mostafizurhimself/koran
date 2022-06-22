import SurahCard from '@/components/shared/SurahCard';
import { useAppSelector } from '@/hooks/use-app-selector';
import AppLayout from '@/layouts/AppLayout';
import { getFavourites } from '@/store/global/globalSlice';
import { Surah } from '@/types';
import { NextPage } from 'next';
import React from 'react';
const surahs = require('@/public/data/surah.json') as Omit<Surah, 'edition' | 'ayahs'>[];

const Favourites: NextPage = () => {
  const favourites = useAppSelector(getFavourites);
  const favouriteSurahs = surahs.filter((surah) => favourites?.includes(surah.number));

  return (
    <AppLayout title="Favourites">
      <div className="p-6">
        <h1 className="font-medium text-xl">Favourites</h1>

        {favouriteSurahs.length > 0 ? (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
            {favouriteSurahs.map((surah, index) => {
              return <SurahCard key={index} surah={surah} isFavourite={favourites?.includes(surah.number)} />;
            })}
          </div>
        ) : (
          <div className="mt-2 text-gray-600 dark:text-gray-200 text-sm">No surahs added to favourite</div>
        )}
      </div>
    </AppLayout>
  );
};

export default Favourites;
