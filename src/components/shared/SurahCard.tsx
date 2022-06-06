import React from 'react';
import { useAppDispatch } from '@/hooks/use-app-dispatch';
import { Surah } from '@/types';
import { useRouter } from 'next/router';
import { MouseEvent } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { toggleFavourite } from '@/store/global/globalSlice';
import { useAppSelector } from '@/hooks/use-app-selector';
import { getReciter, getTranslation } from '@/store/settings/settingSlice';

type Props = {
  surah: Omit<Surah, 'edition' | 'ayahs'>;
  isFavourite: boolean;
};

const SurahCard = ({ surah, isFavourite }: Props) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const reciter = useAppSelector(getReciter);
  const translation = useAppSelector(getTranslation);

  const toggle = (e: MouseEvent) => {
    e.stopPropagation();
    dispatch(toggleFavourite(surah.number));
  };

  const handleCardClick = (e: MouseEvent) => {
    router.push(`/surah/${surah.number}/${reciter.identifier},${translation.identifier}`);
  };

  return (
    <div onClick={handleCardClick} className="bg-white dark:bg-gray-800 shadow p-4 rounded-2xl cursor-pointer">
      <div className="flex items-center justify-between">
        <span className="h-7 w-7 flex items-center justify-center bg-primary-50 dark:bg-primary-500 text-primary-500 dark:text-white text-sm rounded-full">
          {surah.number}
        </span>
        <button onClick={toggle} className="h-7 w-7 flex items-center justify-end rounded-full">
          {isFavourite ? (
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
