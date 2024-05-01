import { createAsyncThunk } from "@reduxjs/toolkit";

interface LoginPayload {
  token: string;
  username: string;
  password: string;
}

const loginUser = createAsyncThunk(
  "auth/login",
  async (user: {
    username: string;
    password: string;
  }): Promise<LoginPayload> => {
    const res = await fetch(
      "https://test-assignment.emphasoft.com/api/v1/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
          "X-CSRFTOKEN":
            "wETviWr15l2J8myYqxLb8QmmLc8gG8CtwIBt3F8zlnC1aXZuYWCr1ZkiKTfrgQLI",
        },
        body: JSON.stringify(user),
      }
    );
    return res.json();
  }
);

export default loginUser;
