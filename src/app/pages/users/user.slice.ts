import { createSlice } from '@reduxjs/toolkit';

import { fetchUsers } from './user.middleware';

const initialState = {
  user: null
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, () => {
      //
    }),
    builder.addCase(fetchUsers.fulfilled, (state, actions) => {
      console.log('FULLFILLED', actions);
    }),
    builder.addCase(fetchUsers.rejected, () => {
      //
    });
  },
});

export default usersSlice.reducer;
