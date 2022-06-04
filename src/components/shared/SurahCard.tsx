import { Surah } from '@/types';
import { useRouter } from 'next/router';
import { useState, MouseEvent } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

type Props = {
  surah: Omit<Surah, 'edition' | 'ayahs'>;
};

const SurahCard = ({ surah }: Props) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const router = useRouter();

  const toggleFavorite = (e: MouseEvent) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  const handleCardClick = (e: MouseEvent) => {
    router.push(`/surah/${surah.number}`);
  };

  return (
    <div onClick={handleCardClick} className="bg-white dark:bg-gray-800 shadow p-4 rounded-2xl cursor-pointer">
      <div className="flex items-center justify-between">
        <span className="h-7 w-7 flex items-center justify-center bg-primary-50 dark:bg-primary-500 text-primary-500 dark:text-white text-sm rounded-full">
          {surah.number}
        </span>
        <button onClick={toggleFavorite} className="h-7 w-7 flex items-center justify-end rounded-full">
          {isFavorite ? (
            <AiFillHeart size={22} className="text-primary-500" />
          ) : (
            <AiOutlineHeart size={22} className="dark:text-primary-500" />
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
