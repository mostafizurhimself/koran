import { Surah } from '@/types';
import React, { useState } from 'react';
import { Heart } from 'react-feather';
import { HeartIcon } from '@heroicons/react/solid';
import Link from 'next/link';

type Props = {
  surah: Surah;
};

const SurahCard = ({ surah }: Props) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <Link href={`/surah/${surah.englishName}`}>
      <a className="bg-white shadow p-4 rounded-2xl hover:bg-gray-50 transition-colors duration-300">
        <div className="flex items-center justify-between">
          <span className="h-7 w-7 flex items-center justify-center bg-primary-50 text-primary-500 text-sm rounded-full">
            {surah.number}
          </span>
          <button onClick={() => toggleFavorite()}>
            {isFavorite ? <HeartIcon className="h-[24px] text-primary-500" /> : <Heart height={18} />}
          </button>
        </div>
        <div className="mt-4 flex items-end justify-between">
          <div>
            <h4 className="text-sm">{surah.englishName}</h4>
            <p className="text-gray-400 text-sm">{surah.name}</p>
          </div>
          <p className="text-sm mr-2">{surah.numberOfAyahs}</p>
        </div>
      </a>
    </Link>
  );
};

export default SurahCard;
