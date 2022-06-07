import type { RootState } from '@/store';
import { Edition, FontSize } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface GlobalState {
  translation: Edition;
  reciter: Edition;
  arabicFontSize: FontSize;
  translationFontSize: FontSize;
}

// Define the initial state using that type
const initialState: GlobalState = {
  translation: {
    identifier: 'bn.bengali',
    language: 'bn',
    name: 'মুহিউদ্দীন খান',
    englishName: 'Muhiuddin Khan',
    format: 'text',
    type: 'translation',
    direction: 'ltr',
  },
  reciter: {
    identifier: 'ar.abdurrahmaansudais',
    language: 'ar',
    name: 'عبدالرحمن السديس',
    englishName: 'Abdurrahmaan As-Sudais',
    format: 'audio',
    type: 'versebyverse',
    direction: null,
  },
  arabicFontSize: FontSize.LARGE,
  translationFontSize: FontSize.NORMAL,
};

export const settingSlice = createSlice({
  name: 'settings',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setTranslation: (state: GlobalState, action: PayloadAction<Edition>) => {
      state.translation = action.payload;
    },
    setReciter: (state: GlobalState, action: PayloadAction<Edition>) => {
      state.reciter = action.payload;
    },
    setArabicFontSize: (state: GlobalState, action: PayloadAction<FontSize>) => {
      state.arabicFontSize = action.payload;
    },
    setTranslationFontSize: (state: GlobalState, action: PayloadAction<FontSize>) => {
      state.translationFontSize = action.payload;
    },
  },
});

export const { setTranslation, setReciter, setArabicFontSize, setTranslationFontSize } = settingSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getTranslation = (state: RootState) => state.settings.translation;
export const getReciter = (state: RootState) => state.settings.reciter;
export const getArabicFontSize = (state: RootState) => state.settings.arabicFontSize;
export const getTranslationFontSize = (state: RootState) => state.settings.translationFontSize;
