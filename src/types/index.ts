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
export type Mode = 'reading' | 'listening';

export interface AyahAudio {
  number: number;
  audio: string;
  audioSecondary: string[];
  text: string;
  numberInSurah: number;
  juz: number;
  manzil: number;
  page: number;
  ruku: number;
  hizbQuarter: number;
  sajda: boolean;
}

export interface Edition {
  identifier: string;
  language: string;
  name: string;
  englishName: string;
  format: string;
  type: string;
  direction?: any;
}

export type SurahAudio = Surah & {
  ayahs: AyahAudio[];
  edition: Edition;
};
