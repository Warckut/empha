import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetUsersQuery } from "../../../api/apiSlice";
import usePrepareUserData from "../../../hooks/usePrepareData";
import Button from "../../../components/Button/Button";
import triangle from "../../../assets/images/triangle.svg";
import Loading from "../../../components/Loading/Loading";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../app/store";
import { logout } from "../../../features/authSlice";
import "./user-list.scss";

const view = { ascending: 90, descending: -90 };

const UserList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { data: users, isLoading, error } = useGetUsersQuery();
  const [filterValue, setFilterValue] = useState("");
  const [preparedUsers, requestSort, sortDir] = usePrepareUserData(
    users,
    filterValue
  );

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((error as any).status >= 400) {
      dispatch(logout());
    }
  }

  return (
    <div className="container">
      <h1>List</h1>
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
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {preparedUsers.map((v) => (
            <tr key={v.id} className={v.is_active ? "active" : ""}>
              <td style={{ textAlign: "center" }}>{v.id}</td>
              <td>{v.username}</td>
              <td>{v.first_name}</td>
              <td>{v.last_name}</td>
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
