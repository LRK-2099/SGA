import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout, selectToken } from "../features/auth/authSlice";

import "./Navbar.less";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector(selectToken);

  const handleLogout = async () => {
    await dispatch(logout());
    navigate("/");
  };

  return (
    <nav className="top">
      <h1>Monroe Community College</h1>
      <menu>
        
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {token ? (
          <li>
            <a onClick={handleLogout}>Log Out</a>
          </li>
        ) : (
          <li>
            <NavLink to="/login">Log In</NavLink>
          </li>
        )}
         <li>
          <NavLink to="/Senators">Senators</NavLink>
        </li>
        <li>
          <NavLink to="/resolutions">Resolutions</NavLink>
        </li>
      </menu>
    </nav>
  );
}
