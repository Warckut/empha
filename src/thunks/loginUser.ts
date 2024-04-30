// import axios from "axios";
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
    //   method: "post",
    //   url: "https://test-assignment.emphasoft.com/api/v1/login",
    //   data: user,
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    console.log(user);
    // const res = await axios.post(
    //   "https://test-assignment.emphasoft.com/api/v1/login",
    //   user,
    //   {
    //     headers: {
    //       "Content-Type": "application/json",
    //       accept: "application/json",
    //       "X-CSRFTOKEN":
    //         "wETviWr15l2J8myYqxLb8QmmLc8gG8CtwIBt3F8zlnC1aXZuYWCr1ZkiKTfrgQLI",
    //     },
    //   }
    // );

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
    // return {
    //   token: "sdfsdfsd",
    //   username: user.username,
    //   password: user.password,
    // };
  }
);

export default loginUser;
