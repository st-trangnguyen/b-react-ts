import { createSlice } from '@reduxjs/toolkit';

import { fetchUsers } from './user.middleware';
import User, { UserConstructorOptions } from '@app/shared/model/user.model';

type UserStateType = {
  data: User[];
  userDetail: User;
}

const initialState: UserStateType = {
  data: [],
  userDetail: null
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    resetUserList: (state) => {
      state.data = [];
    },
    resetUserDetail: (state) => {
      state.userDetail = null;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, () => {
      //
    }),
    builder.addCase(fetchUsers.fulfilled, (state, { payload }) => {
      state.data = (payload as UserConstructorOptions[]).map((item: UserConstructorOptions) => new User(item));
    }),
    builder.addCase(fetchUsers.rejected, () => {
      //
    });
  },
});
export const { resetUserList, resetUserDetail } = usersSlice.actions;
export default usersSlice.reducer;
