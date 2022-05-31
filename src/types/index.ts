import React from 'react';

export interface Surah {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  numberOfAyahs: number;
  revelationType: string;
}

export interface SidebarMenu {
  name: string;
  icon: React.ReactElement;
  href: string;
}

export type Theme = 'light' | 'dark';
