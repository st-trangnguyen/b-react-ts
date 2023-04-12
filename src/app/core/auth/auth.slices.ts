import { createSlice } from '@reduxjs/toolkit';
import { signIn } from './auth.middleware';

const initialState = {
  isLoading: false,
  isProcessing: false,
  hasError: false,
  data: null,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateAuth: (state, action) => {
      state.data = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, state => {
        state.hasError = false;
        state.isLoading = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload['accessToken'];
      })
      .addCase(signIn.rejected, (state, action) => {
        state.isLoading = false;
        state.hasError = true;
        state.error = action.error;
      });
  }
});

export const { updateAuth } = authSlice.actions;
export default authSlice.reducer;
