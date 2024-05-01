import { createSlice } from "@reduxjs/toolkit";
import loginUser from "../thunks/loginUser";

const initialState = {
  token: null,
  user: null,
  error: null,
  loading: false,
} as {
  token: string | null;
  user: { username: string; password: string } | null;
  error?: string | null;
  loading: boolean;
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
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.user = {
          username: payload.username,
          password: payload.password,
        };
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      }),
});

export const { logout, clearError } = AuthSlice.actions;

export default AuthSlice.reducer;
