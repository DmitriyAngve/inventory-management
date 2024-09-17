import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InitialStateTypes {
  isSidebarCollapsed: boolean;
  isDarkMode: boolean;
}

// Наяальное состояние
// this two properties are going represent our state to determine where this sidebar is closed or is darkmode on
const initialState: InitialStateTypes = {
  isSidebarCollapsed: false,
  isDarkMode: false,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    // редбюсер для изменения состояния боковой панели
    setIsSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
      state.isSidebarCollapsed = action.payload;
    },
    setIsDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
    },
  },
});

export const { setIsSidebarCollapsed, setIsDarkMode } = globalSlice.actions;

export default globalSlice.reducer;
