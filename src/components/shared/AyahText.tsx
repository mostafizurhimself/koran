import React, { useEffect, useRef } from 'react';
import { Ayah, FontSize } from '@/types';
import classNames from 'classnames';
import { useAppSelector } from '@/hooks/use-app-selector';
import { getArabicFontSize, getTranslationFontSize } from '@/store/settings/settingSlice';

type Props = {
  ayah: Ayah;
  active: boolean;
};

const arabicFontList: Record<FontSize, string> = {
  small: 'text-base',
  normal: 'text-lg',
  large: 'text-xl',
  extraLarge: 'text-2xl',
};

const translationFontList: Record<FontSize, string> = {
  small: 'text-xs',
  normal: 'text-sm',
  large: 'text-base',
  extraLarge: 'text-lg',
};

const AyahText = ({ ayah, active }: Props) => {
  const arabicFontSize = useAppSelector(getArabicFontSize);
  const translationFontSize = useAppSelector(getTranslationFontSize);
  const ayahRef = useRef<HTMLDivElement>(null);
  const executeScroll = () => {
    ayahRef.current?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (active) {
      executeScroll();
    }
    return () => {};
  }, [active]);

  return (
    <div ref={ayahRef} className="relative p-3">
      <p
        className={classNames(
          'w-6 h-6 text-white bg-primary-500 flex items-center justify-center rounded-full mb-2',
          ayah.numberInSurah > 99 ? 'text-[10px]' : 'text-xs'
        )}
      >
        {ayah.numberInSurah}
      </p>
      <h3
        className={classNames(
          arabicFontList[arabicFontSize || FontSize.NORMAL],
          'text-right',
          active && 'text-primary-500'
        )}
      >
        {ayah.text}{' '}
      </h3>
      <p
        className={classNames(
          translationFontList[translationFontSize || FontSize.NORMAL],
          'mt-2 leading-normal text-gray-800 dark:text-white',
          active && 'font-medium italic'
        )}
      >
        {ayah.translation}{' '}
      </p>
    </div>
  );
};

export default AyahText;
