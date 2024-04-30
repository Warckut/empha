import { useEffect } from "react";
import { useAddUserMutation } from "../../api/apiSlice";
import UserForm from "../../components/UserForm/UserForm";

const AddUser = () => {
  const [addUser, result] = useAddUserMutation();

  useEffect(() => {
    console.log(result);
  }, [result]);

  return (
    <div className="container">
      <h1>profile</h1>
      <UserForm onSubmit={(user) => addUser(user)} />
    </div>
  );
};

export default AddUser;
