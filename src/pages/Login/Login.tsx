import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../app/store";
import loginUser from "../../thunks/loginUser";
import { Navigate } from "react-router-dom";
import { clearError, selectAuth } from "../../features/authSlice";
import { useForm } from "react-hook-form";
import TextInput from "../../components/TextInput/TextInput";
import { useEffect } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./login.scss";

interface Inputs {
  username: string;
  password: string;
}

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user, error } = useSelector(selectAuth);

  const { handleSubmit, control, reset } = useForm<Inputs>({
    resolver: yupResolver<Inputs>(
      yup.object().shape({
        username: yup
          .string()
          .strict()
          .trim("It cannot contain spaces at the end")
          .required("Required field"),
        password: yup.string().required("Required field"),
      })
    ),
  });

  const onSubmit = ({ username, password }: Inputs) => {
    dispatch(loginUser({ username, password }));
  };

  useEffect(() => {
    reset();
    dispatch(clearError());
  }, [dispatch, reset]);

  if (user) return <Navigate to="/users" />;

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign In</h1>
        {error && <div className="feedback">{error}</div>}
        <TextInput
          name="username"
          control={control}
          rules={{ required: true }}
          label="Username"
          defaultValue=""
        />
        <TextInput
          name="password"
          control={control}
          rules={{ required: true }}
          label="Password"
          defaultValue=""
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
