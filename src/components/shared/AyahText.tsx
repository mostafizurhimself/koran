import React, { useEffect, useRef } from 'react';
import { Ayah } from '@/types';
import classNames from 'classnames';

type Props = {
  ayah: Ayah;
  active: boolean;
};

const AyahText = ({ ayah, active }: Props) => {
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
    <div ref={ayahRef} className="relative py-3">
      <p
        className={classNames(
          'w-6 h-6 text-white bg-primary-500 flex items-center justify-center rounded-full mb-2',
          ayah.numberInSurah > 99 ? 'text-[10px]' : 'text-xs'
        )}
      >
        {ayah.numberInSurah}
      </p>
      <h3 className={classNames('text-lg text-right', active && 'text-primary-500')}>{ayah.text} </h3>
      <p className={classNames('text-xs mt-2 leading-normal text-gray-800 dark:text-white', active && 'font-semibold')}>
        {ayah.translation}{' '}
      </p>
    </div>
  );
};

export default AyahText;
