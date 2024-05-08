import { createSlice } from '@reduxjs/toolkit'

interface TimeState {
  value: [number, number, number];
}

const initialState: TimeState = {
  value: [25, 5, 15]
}

const TimeSlice = createSlice({
  name: 'times',
  initialState,
  reducers: {
    setTimes: (state, action) => {
      state.value = action.payload
    },
  },
});

export const { setTimes } = TimeSlice.actions;
export default TimeSlice.reducer;