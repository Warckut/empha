import { Navigate, Route, Routes } from "react-router-dom";
import UserList from "./pages/Users/UserList/UserList";
import Login from "./pages/Login/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import NewUser from "./pages/Users/AddUser";
import EditUser from "./pages/Users/EditUser";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="users" />} />
        <Route path="login" element={<Login />} />
        <Route path="users" element={<ProtectedRoute />}>
          <Route index={true} element={<UserList />} />
          <Route path="new" element={<NewUser />} />
          <Route path=":userId" element={<EditUser />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
