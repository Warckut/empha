import { Navigate, Route, Routes } from "react-router-dom";
import UserList from "./pages/UserList";
import Login from "./pages/Login";
import NewUserProfile from "./pages/NewUserProfile";
import UserProfile from "./pages/UserProfile";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthProvider from "./contexts/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Navigate to="posts" />} />
        <Route path="login" element={<Login />} />
        <ProtectedRoute role="asd">
          <Route path="posts" element={<UserList />}>
            <Route path="new" element={<NewUserProfile />} />
            <Route path=":postId" element={<UserProfile />} />
          </Route>
        </ProtectedRoute>
      </Routes>
    </AuthProvider>
  );
}

export default App;
