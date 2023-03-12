import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  logInUser,
  logOutUser,
  refreshUser,
} from '../operations/userOperations';

import { handleAuthUser, handleLogOutUser, hadleRefreshUser, anyrefreshUserPending, anyrefreshUserRejected } from './userSliceReducer';

const phonebookUserSlice = createSlice({
  name: 'user',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder =>
    builder
      .addCase(registerUser.fulfilled, handleAuthUser)
      .addCase(logInUser.fulfilled, handleAuthUser)
      .addCase(logOutUser.fulfilled, handleLogOutUser)
      .addCase(refreshUser.pending, anyrefreshUserPending)
      .addCase(refreshUser.fulfilled, hadleRefreshUser)
      .addCase(refreshUser.rejected, anyrefreshUserRejected),
});

export const phonebookUserReducer = phonebookUserSlice.reducer;
