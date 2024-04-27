import { Navigate, Route, Routes } from "react-router-dom";
import UserList from "./pages/users/UserList";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import NewUser from "./pages/users/AddUser";
import EditUser from "./pages/users/EditUser";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="users" />} />
      <Route path="login" element={<Login />} />
      <Route path="users" element={<ProtectedRoute />}>
        <Route index={true} element={<UserList />} />
        <Route path="new" element={<NewUser />} />
        <Route path=":userId" element={<EditUser />} />
      </Route>
    </Routes>
  );
}

export default App;
