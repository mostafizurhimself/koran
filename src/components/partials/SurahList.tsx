import React, { useContext } from 'react';
import { Surah } from '@/types';
import SurahCard from '@/components/shared/SurahCard';
import { useAppSelector } from '@/hooks/use-app-selector';
import { getFavourites } from '@/store/global/globalSlice';
import { SearchContext, SearchContextType } from '@/context/SearchContext';
const surahs = require('@/public/data/surah.json') as Omit<Surah, 'edition' | 'ayahs'>[];

const SurahList = () => {
  const favourites = useAppSelector(getFavourites);
  const { search } = useContext(SearchContext) as SearchContextType;

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
      {surahs
        .filter((surah) => surah.englishName.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
        .map((surah, index) => {
          return <SurahCard key={index} surah={surah} isFavourite={favourites?.includes(surah.number)} />;
        })}
    </div>
  );
};

export default SurahList;
