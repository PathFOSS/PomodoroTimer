import { createSlice } from "@reduxjs/toolkit";

interface DarkModeState {
  value: boolean;
}

const initialState: DarkModeState = {
  value: true
}

const DarkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    activateDarkMode: (state, action) => {
      state.value = action.payload
    },
  },
});

export const { activateDarkMode } = DarkModeSlice.actions;
export default DarkModeSlice.reducer;