import { createSlice } from '@reduxjs/toolkit'

export const DarkModeSlice = createSlice({
  name: 'darkMode',
  initialState: {
    value: true
  },
  reducers: {
    activateDarkMode: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { activateDarkMode } = DarkModeSlice.actions

export default DarkModeSlice.reducer