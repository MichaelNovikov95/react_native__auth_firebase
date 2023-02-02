import { createSlice } from "@reduxjs/toolkit";

const state = {
  userId: null,
  userName: null,
  stateChange: false,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: state,
  reducers: {
    updateUserProfile: (state, { payload }) => ({
      ...state,
      userId: payload.userId,
      userName: payload.userName,
    }),
    authStateChange: (state, { payload }) => ({
      ...state,
      stateChange: payload.stateChange,
    }),
    signOut: () => state,
    errorHandler: (state, { payload }) => ({
      ...state,
      error: payload.error,
    }),
  },
});
