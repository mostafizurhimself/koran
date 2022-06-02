import { Ayah } from '@/types';
import classNames from 'classnames';
import React from 'react';

type Props = {
  currentAyah: number;
  ayahs: Ayah[];
};

const SurahTextPanel = ({ currentAyah, ayahs }: Props) => {
  return (
    <div className="h-96 overflow-auto">
      {ayahs.map((ayah, index) => {
        return (
          <div key={index} className="relative py-3">
            <p className="w-6 h-6 p-2 text-white text-xs bg-primary-500 flex items-center justify-center rounded-full mb-2">
              {ayah.numberInSurah}
            </p>
            <h3 className={classNames('text-lg text-right', currentAyah === ayah.numberInSurah && 'text-primary-500')}>
              {ayah.text}{' '}
            </h3>
            <p
              className={classNames(
                'text-xs mt-2 leading-normal text-gray-800 dark:text-white',
                currentAyah === ayah.numberInSurah && 'font-semibold'
              )}
            >
              {ayah.translation}{' '}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default SurahTextPanel;
