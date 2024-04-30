import { yupResolver } from "@hookform/resolvers/yup";
import TextInput from "../TextInput/TextInput";
import * as yup from "yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Checkbox from "../Checkbox/Checkbox";
import "./user-form.scss";

interface Inputs {
  username: string;
  first_name: string;
  last_name: string;
  password: string;
  is_active: boolean;
}

interface UserFormProps {
  defaultValues?: Inputs;
  onSubmit: (data: Inputs) => void;
}

function UserForm({ defaultValues, onSubmit }: UserFormProps) {
  const { handleSubmit, control, reset } = useForm<Inputs>({
    defaultValues,
    resolver: yupResolver<Inputs>(
      yup.object().shape({
        username: yup
          .string()
          .strict()
          .trim("It cannot contain spaces at the end")
          .required("Required field"),
        first_name: yup.string().required("Required field"),
        last_name: yup.string().required("Required field"),
        password: yup.string().required("Required field"),
        is_active: yup.bool().default(false),
      })
    ),
  });

  useEffect(() => {
    reset();
  }, [reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        name="username"
        control={control}
        rules={{ required: true }}
        label="Username"
        defaultValue=""
      />
      <TextInput
        name="first_name"
        control={control}
        rules={{ required: true }}
        label="First name"
        defaultValue=""
      />
      <TextInput
        name="last_name"
        control={control}
        rules={{ required: true }}
        label="Last name"
        defaultValue=""
      />
      <TextInput
        name="password"
        control={control}
        rules={{ required: true }}
        label="Password"
        defaultValue=""
      />
      <Checkbox name="is_active" control={control} label="Is active" />
      <input type="submit" value="Save" />
    </form>
  );
}

export default UserForm;
