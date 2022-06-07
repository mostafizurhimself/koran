import React from 'react';

export interface SidebarMenu {
  label: string;
  icon: React.ReactElement;
  href: string;
}

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export enum Mode {
  READING = 'reading',
  LISTENING = 'listening',
}

export interface Ayah {
  number: number;
  audio: string;
  audioSecondary: string[];
  text: string;
  translation: string;
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

export interface Surah<T = void> {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  numberOfAyahs: number;
  revelationType: string;
  ayahs: T extends void ? Ayah[] : T;
  edition: Edition;
}

export interface SelectOption {
  label: string;
  value: string;
}

export enum FontSize {
  SMALL = 'small',
  NORMAL = 'normal',
  LARGE = 'large',
  EXTRA_LARGE = 'extraLarge',
}
