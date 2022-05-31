import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/store';
import { Theme } from '@/types';

// Define a type for the slice state
interface GlobalState {
  theme: Theme;
}

// Define the initial state using that type
const initialState: GlobalState = {
  theme: 'light',
};

export const globalSlice = createSlice({
  name: 'global',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setTheme: (state: GlobalState, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = globalSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getTheme = (state: RootState) => state.global.theme;
