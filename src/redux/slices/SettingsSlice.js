import { createSlice } from '@reduxjs/toolkit'

export const SettingsSlice = createSlice({
  name: 'settings',
  initialState: {
    value: false
  },
  reducers: {
    setSettings: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { setSettings } = SettingsSlice.actions

export default SettingsSlice.reducer