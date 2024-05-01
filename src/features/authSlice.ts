import { createSlice } from "@reduxjs/toolkit";
import loginUser from "../thunks/loginUser";

const initialState = {
  token: null,
  user: null,
  error: null,
} as {
  token: string | null;
  user: { username: string; password: string } | null;
  error?: string | null;
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.user = {
          username: payload.username,
          password: payload.password,
        };
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.error.message;
      }),
});

export const { logout, clearError } = AuthSlice.actions;

export default AuthSlice.reducer;
