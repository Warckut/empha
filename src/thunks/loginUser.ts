import axios from "axios";
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
    // const res = await axios({
    //   method: "POST",
    //   url: "https://tesdfsfphasoft.com/api/login",
    //   data: user,
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });

    // return res.data;
    return {
      token: "sdfsdfsd",
      username: user.username,
      password: user.password,
    };
  }
);

export default loginUser;
