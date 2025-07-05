// src/features/thirukkural/thirukkuralSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  kural: {},
  error: '',
};

const thirukkuralSlice = createSlice({
  name: 'thirukkural',
  initialState,
  reducers: {
    fetchThirukkuralRequest: (state, action) => {
      state.loading = true;
    },
    fetchThirukkuralSuccess: (state, action) => {
      state.loading = false;
      state.kural = action.payload;
      state.error = '';
    },
    fetchThirukkuralFailure: (state, action) => {
      state.loading = false;
      state.kural = {};
      state.error = action.payload;
    },
  },
});

export const {
  fetchThirukkuralRequest,
  fetchThirukkuralSuccess,
  fetchThirukkuralFailure,
} = thirukkuralSlice.actions;

export default thirukkuralSlice.reducer;
