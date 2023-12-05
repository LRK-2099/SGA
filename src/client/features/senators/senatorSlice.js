// senatorSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ServerError } from './errors'; // Ensure you have the correct path to ServerError
import prisma from './prisma'; // Ensure you have the correct path to prisma

// Define the initial state for the senator slice
const initialState = {
  senators: [],
  updateStatus: 'idle',
  error: null,
};

// Create an async thunk for updating a senator
export const updateSenator = createAsyncThunk('senator/update', async (updatedSenator) => {
  try {
    const { id, firstName, lastName, email, imageUrl, gpa } = updatedSenator;

    // Perform the update operation using Prisma
    const updatedSenatorData = await prisma.senator.update({
      where: { id },
      data: { firstName, lastName, email, imageUrl, gpa },
    });

    return updatedSenatorData;
  } catch (error) {
    throw new ServerError(500, 'Failed to update senator');
  }
});

// Create the senator slice using createSlice
const senatorSlice = createSlice({
  name: 'senator',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateSenator.pending, (state) => {
        state.updateStatus = 'loading';
        state.error = null;
      })
      .addCase(updateSenator.fulfilled, (state, action) => {
        state.updateStatus = 'succeeded';
        // Update the state with the data returned from the server if needed
        const updatedSenatorData = action.payload;
        state.senators = state.senators.map((senator) =>
          senator.id === updatedSenatorData.id ? updatedSenatorData : senator
        );
      })
      .addCase(updateSenator.rejected, (state, action) => {
        state.updateStatus = 'failed';
        state.error = action.error.message;
      });
  },
});

export default senatorSlice.reducer;
