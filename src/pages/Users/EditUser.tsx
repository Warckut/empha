import { useEffect } from "react";
import { useGetUsersQuery, useUpdateUserMutation } from "../../api/apiSlice";
import { useParams } from "react-router-dom";
import UserForm from "../../components/UserForm/UserForm";

const EditUser = () => {
  const { data: users } = useGetUsersQuery();
  const [updateUser, result] = useUpdateUserMutation();
  const { userId } = useParams();
  const user = users?.find((u) => u.id === Number(userId));

  useEffect(() => {
    console.log(result);
  }, [result]);

  return (
    <div className="container">
      <h1>profile</h1>
      <UserForm
        defaultValues={user}
        onSubmit={(user) => updateUser({ id: Number(userId), ...user })}
      />
    </div>
  );
};

export default EditUser;
