import { createSlice } from '@reduxjs/toolkit'

export const TimeSlice = createSlice({
  name: 'times',
  initialState: {
    value: [25, 5, 15]
  },
  reducers: {
    setTimes: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { setTimes } = TimeSlice.actions

export default TimeSlice.reducer