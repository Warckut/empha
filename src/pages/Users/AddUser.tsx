import { useEffect } from "react";
import { useAddUserMutation } from "../../api/apiSlice";

const AddUser = () => {
  const [addUser, result] = useAddUserMutation();

  useEffect(() => {
    console.log(result);
  }, [result]);

  return (
    <>
      <h1>profile</h1>
      <button
        onClick={() => {
          addUser({
            username: "AAAAA",
            first_name: "AAAAA",
            last_name: "string",
            password:
              "Y'THsY}<,b1{Y|)^R#r+D{{tO*(Ils+r<& UvfQmWzr^!-),f/Bagsc5(yt",
            is_active: true,
          });
        }}
      >
        Add user
      </button>
    </>
  );
};

export default AddUser;
