import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import loginUser from "../../thunks/loginUser";
import { Navigate } from "react-router-dom";
import { clearError } from "../../features/authSlice";
import { useForm } from "react-hook-form";
import TextInput from "../../components/TextInput/TextInput";
import { useEffect } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./login.scss";
import Spinner from "../../components/Spinner/Loading";

interface Inputs {
  username: string;
  password: string;
}

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user, error, loading } = useSelector(
    (state: RootState) => state.auth
  );

  const { handleSubmit, control, reset } = useForm<Inputs>({
    resolver: yupResolver<Inputs>(
      yup.object().shape({
        username: yup
          .string()
          .strict()
          .trim("It cannot contain spaces at the end")
          .required("Required field"),
        password: yup
          .string()
          .required("Required field")
          .min(8, "Password should be 8+ characters"),
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
        {loading && <Spinner />}
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
