import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/store';

// Define a type for the slice state
interface SidebarState {
  sidebarOpen: boolean;
}

// Define the initial state using that type
const initialState: SidebarState = {
  sidebarOpen: false,
};

export const sidebarSlice = createSlice({
  name: 'sidebar',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setSidebarState: (state: SidebarState, action: PayloadAction<boolean>) => {
      state.sidebarOpen = action.payload;
    },
  },
});

export const { setSidebarState } = sidebarSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getSidebarState = (state: RootState) => state.sidebar.sidebarOpen;
