import api from "../../store/api";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const createResolution = createAsyncThunk(
    'resolutions/createResolution',
    async (resolution) => {
      const response = await axios.post('/api/resolutions', resolution);
      return response.data;
    }
  );
  
  // Slice
  const resolutionsSlice = createSlice({
    name: 'resolutions',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(createResolution.fulfilled, (state, action) => {
        state.push(action.payload);
      });
    },
  });
  
  export default resolutionsSlice.reducer;