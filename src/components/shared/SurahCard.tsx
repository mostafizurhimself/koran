import { Surah } from '@/types';
import { HeartIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import { Heart } from 'react-feather';

type Props = {
  surah: Surah;
};

const SurahCard = ({ surah }: Props) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <div className="bg-white dark:bg-gray-800 shadow p-4 rounded-2xl hover:bg-gray-50 transition-colors duration-300 cursor-pointer">
      <div className="flex items-center justify-between">
        <span className="h-7 w-7 flex items-center justify-center bg-primary-50 dark:bg-primary-500 text-primary-500 dark:text-white text-sm rounded-full">
          {surah.number}
        </span>
        <button onClick={() => toggleFavorite()}>
          {isFavorite ? (
            <HeartIcon className="h-[24px] text-primary-500" />
          ) : (
            <Heart height={18} className="dark:text-primary-500" />
          )}
        </button>
      </div>
      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-sm text-gray-800 dark:text-white">{surah.englishName}</h4>
          <p className="text-gray-500 dark:text-gray-200 text-sm">{surah.name}</p>
        </div>
        <p className="text-sm mr-2 text-gray-600 dark:text-gray-200">{surah.numberOfAyahs}</p>
      </div>
    </div>
  );
};

export default SurahCard;
