
import { createSlice } from '@reduxjs/toolkit';

const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState: [],
  reducers: {
    addAppointment: (state, action) => {
      state.push(action.payload);
    },
    // You may want to add other reducers like removeAppointment
  },
});

export const { addAppointment } = appointmentsSlice.actions;
export const selectAppointments = (state) => state.appointments;
export default appointmentsSlice.reducer;
