import { createSelector, createSlice } from "@reduxjs/toolkit";
import loginUser from "../thunks/loginUser";
import { RootState } from "../app/store";

const initialState = {
  token: null,
  user: null,
} as {
  token: string | null;
  user: { username: string; password: string } | null;
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) =>
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.token = payload.token;
      state.user = {
        username: payload.username,
        password: payload.password,
      };
    }),
});

export const selectToken = createSelector(
  [(state: RootState) => state.auth],
  (data) => data.token
);

export const selectUser = createSelector(
  [(state: RootState) => state.auth],
  (data) => data.user
);

export const { logout } = AuthSlice.actions;

export default AuthSlice.reducer;
