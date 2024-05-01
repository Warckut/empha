import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../app/store";

export type User = {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  password: string;
  is_active: boolean;
  last_login: string | null;
  is_superuser: boolean;
};

type AddUserPayload = Pick<
  User,
  "first_name" | "is_active" | "last_name" | "username" | "password"
>;

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://test-assignment.emphasoft.com/api/v1/",
    prepareHeaders: (headers, { getState }) => {
      headers.set("Content-Type", "application/json");
      headers.set("accept", "application/json");

      const accessToken = (getState() as RootState).auth.token;
      if (accessToken) headers.set("Authorization", `Token ${accessToken}`);
      return headers;
    },
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => "users/",
    }),
    updateUser: builder.mutation<User, Partial<User> & Pick<User, "id">>({
      query: ({ id, ...put }) => ({
        url: `users/${id}`,
        method: "PUT",
        body: put,
      }),
      transformErrorResponse: (response) =>
        response,
      invalidatesTags: ["User"],
    }),
    addUser: builder.mutation<User, AddUserPayload>({
      query: (post) => ({
        url: `users/`,
        method: "POST",
        body: post,
      }),
      transformErrorResponse: (response) =>
        response,
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useGetUsersQuery, useUpdateUserMutation, useAddUserMutation } =
  apiSlice;
