import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/store';
import { Mode, Theme } from '@/types';

// Define a type for the slice state
interface GlobalState {
  theme: Theme;
  mode: Mode;
}

// Define the initial state using that type
const initialState: GlobalState = {
  theme: 'light',
  mode: 'reading',
};

export const globalSlice = createSlice({
  name: 'global',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setTheme: (state: GlobalState, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
    setMode: (state: GlobalState, action: PayloadAction<Mode>) => {
      state.mode = action.payload;
    },
  },
});

export const { setTheme, setMode } = globalSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getTheme = (state: RootState) => state.global.theme;
export const getMode = (state: RootState) => state.global.mode;
