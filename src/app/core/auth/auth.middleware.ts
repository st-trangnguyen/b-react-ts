import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthService } from '../services/auth.service';

const auth = new AuthService();

export const signIn = createAsyncThunk(
  'auth/signIn',
  async (amount: any) => {
    const response = await auth.signIn(amount);
    // The value we return becomes the `fulfilled` action payload
    return response;
  }
);
