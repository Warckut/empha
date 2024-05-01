import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/authSlice";
import { AppDispatch, RootState } from "../../app/store";
import { Link } from "react-router-dom";
import "./navigation.scss";

function Navigation() {
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <nav className="nav">
      <div className="container nav__container">
        <Link to={"/"}>Home</Link>
        <Link to={"/login"} onClick={() => user && dispatch(logout())}>
          {user ? "Logout" : "Sign In"}
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
