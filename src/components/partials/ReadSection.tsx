import { useAppDispatch } from '@/hooks/use-app-dispatch';
import { useAppSelector } from '@/hooks/use-app-selector';
import { getMode, setMode } from '@/store/global/globalSlice';
import { getReciter, getTranslation } from '@/store/settings/settingSlice';
import { Mode, Surah } from '@/types';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { FiMoreVertical } from 'react-icons/fi';
import Button from '../shared/Button';
const surahs = require('@/public/data/surahs.json') as Omit<Surah, 'edition' | 'ayahs'>[];

const ReadSection = () => {
  const [search, setSearch] = useState('');
  const [count, setCount] = useState(20);
  const router = useRouter();
  const reciter = useAppSelector(getReciter);
  const translation = useAppSelector(getTranslation);
  const mode = useAppSelector(getMode);
  const dispatch = useAppDispatch();

  const showMore = () => {
    setCount((prev) => {
      return prev < 114 ? prev + 20 : prev;
    });
  };

  const handleCardClick = (surah: Omit<Surah, 'edition' | 'ayahs'>) => {
    mode == Mode.LISTENING && dispatch(setMode(Mode.READING));
    router.push(`/surah/${surah.number}/${reciter.identifier},${translation.identifier}`);
  };

  return (
    <div className="container mt-24">
      <h2 className="font-semibold text-4xl text-center">Read Quran with Translation</h2>
      <div className="text-center mt-2">
        <div className="inline-block w-10 h-1 bg-primary-500 rounded-full"></div>
      </div>
      <div className="mt-12 grid grid-cols-4 gap-6">
        {surahs
          .filter((surah) => surah.number <= count)
          .map((surah, index) => {
            return (
              <div
                className="group border p-4 shadow-sm rounded-2xl cursor-pointer hover:bg-primary-500 transition-colors duration-300"
                key={index}
                onClick={(e) => handleCardClick(surah)}
              >
                <div className="flex items-center justify-between">
                  <span className="h-7 w-7 flex items-center justify-center bg-primary-50 text-primary-500 text-sm rounded-full">
                    {surah.number}
                  </span>
                  <button className="group-hover:text-white">
                    <FiMoreVertical />
                  </button>
                </div>
                <div className="mt-4 flex items-end justify-between">
                  <div>
                    <h4 className="text-sm text-gray-800 group-hover:text-white">{surah.englishName}</h4>
                    <p className="text-gray-500 group-hover:text-white text-sm">{surah.name}</p>
                  </div>
                  <p className="text-sm mr-2 text-gray-600 group-hover:text-white">{surah.numberOfAyahs}</p>
                </div>
              </div>
            );
          })}
      </div>
      <div className="mt-6 text-center">
        <Button className="px-6 py-3" outline={true} onClick={showMore}>
          Show More
        </Button>
      </div>
    </div>
  );
};

export default ReadSection;
