import { useNavigate } from "react-router-dom";
import { useGetUsersQuery } from "../../api/apiSlice";

const UserList = () => {
  const { data: users, isLoading, isError, error } = useGetUsersQuery();
  const navigate = useNavigate();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    console.error(error);
  }

  return (
    <>
      <h1>list</h1>
      <button
        onClick={() => {
          navigate("new");
        }}
      >
        add User
      </button>
      <ul>
        {users &&
          users.map((v) => (
            <li
              key={v.id}
              onClick={() => {
                navigate(`${v.id}`);
              }}
            >
              {v.username}
            </li>
          ))}
      </ul>
    </>
  );
};

export default UserList;
