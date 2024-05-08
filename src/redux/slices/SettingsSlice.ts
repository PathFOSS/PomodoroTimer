import { createSlice } from '@reduxjs/toolkit'

interface SettingsState {
  value: boolean;
}

const initialState: SettingsState = {
  value: false
}

const SettingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setSettings: (state, action) => {
      state.value = action.payload
    },
  },
});

export const { setSettings } = SettingsSlice.actions;
export default SettingsSlice.reducer;