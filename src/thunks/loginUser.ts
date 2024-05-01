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
      "https://test-assignment.emphasoft.com/api/v1/login/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify(user),
      }
    );

    if (!res.ok) {
      if (res.status === 400) throw new Error("incorrect username or password");
      if (res.status >= 500) throw new Error("internal server error");
      throw new Error("unknown error");
    }

    return res.json();
  }
);

export default loginUser;
