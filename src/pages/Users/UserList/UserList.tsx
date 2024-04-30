import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetUsersQuery } from "../../../api/apiSlice";
import usePrepareUserData from "../../../hooks/usePrepareData";
import Button from "../../../components/Button/Button";
import { formatter } from "./utils";
import "./user-list.scss";
import triangle from "../../../assets/images/triangle.svg";

const view = { ascending: 90, descending: -90 };

const UserList = () => {
  const navigate = useNavigate();
  const { data: users, isLoading, isError, error } = useGetUsersQuery();
  const [filterValue, setFilterValue] = useState("");
  const [preparedUsers, requestSort, sortDir] = usePrepareUserData(
    users,
    filterValue
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    console.error(error);
  }

  return (
    <div className="container">
      <h1>list</h1>
      <div className="panel">
        <input
          type="text"
          value={filterValue}
          onChange={(v) => setFilterValue(v.currentTarget.value)}
        />
        <Button name="Add user" onClick={() => navigate("new")} />
      </div>
      <table>
        <thead>
          <tr>
            <th className="triangle" onClick={requestSort}>
              <a style={{ display: "flex", justifyContent: "space-between" }}>
                id
                <img
                  src={triangle}
                  style={{ transform: `rotate(${view[sortDir]}deg)` }}
                  alt="arrow"
                />
              </a>
            </th>
            <th>name</th>
            <th>first name</th>
            <th>last name</th>
            <th>last login</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {preparedUsers.map((v) => (
            <tr key={v.id} className={v.is_active ? "active" : ""}>
              <td>{v.id}</td>
              <td>{v.username}</td>
              <td>{v.first_name}</td>
              <td>{v.last_name}</td>
              <td>{formatter.format(new Date(v.last_login))}</td>
              <td>
                <Button name={"edit"} onClick={() => navigate(`${v.id}`)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
