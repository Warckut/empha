import { useEffect } from "react";
import { useUpdateUserMutation } from "../../api/apiSlice";
import { useParams } from "react-router-dom";

const EditUser = () => {
  const [updateUser, result] = useUpdateUserMutation();
  const { userId } = useParams();

  useEffect(() => {
    console.log(result);
  }, [result]);

  return (
    <>
      <h1>profile</h1>
      <button
        onClick={() => {
          updateUser({
            id: Number(userId),
            username: "AAAAA",
          });
        }}
      >
        Edit user
      </button>
    </>
  );
};

export default EditUser;
