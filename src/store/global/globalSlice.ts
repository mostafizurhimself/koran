import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/store';
import { Mode, Theme } from '@/types';

// Define a type for the slice state
interface GlobalState {
  theme: Theme;
  mode: Mode;
  favourites: number[];
}

// Define the initial state using that type
const initialState: GlobalState = {
  theme: Theme.LIGHT,
  mode: Mode.LISTENING,
  favourites: [],
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
    toggleFavourite: (state: GlobalState, action: PayloadAction<number>) => {
      if (state.favourites.includes(action.payload)) {
        state.favourites = state.favourites.filter((number) => number !== action.payload);
      } else {
        state.favourites.push(action.payload);
      }
    },
  },
});

export const { setTheme, setMode, toggleFavourite } = globalSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getTheme = (state: RootState) => state.global.theme;
export const getMode = (state: RootState) => state.global.mode;
export const getFavourites = (state: RootState) => state.global.favourites;
