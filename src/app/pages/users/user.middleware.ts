import { createAsyncThunk } from '@reduxjs/toolkit';

import { ApiService } from '@core/services/api.service';

const api = new ApiService();

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async () => {
    const response = await api.get(['users']);
    return response;
  }
);

export const fetchUserDetail = createAsyncThunk(
  'users/fetchDetail',
  async (id: string) => {
    const response = await api.get(['users', id]);
    return response;
  }
);
