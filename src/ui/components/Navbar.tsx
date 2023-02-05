import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth";

export const Navbar = () => {
  const navigate = useNavigate();
  const { logOut, state } = useContext(AuthContext);

  const isNavActive = (isActive: boolean) =>
    `nav-item nav-link ${isActive ? "active" : ""}`;

  const onLogOut = () => {
    logOut();
    navigate("/login", { replace: true });
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark px-5 bg-dark">
      <Link className="navbar-brand" to="/">
        Home
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) => isNavActive(isActive)}
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink className={({ isActive }) => isNavActive(isActive)} to="/dc">
            DC
          </NavLink>

          <NavLink
            className={({ isActive }) => isNavActive(isActive)}
            to="/search"
          >
            Search
          </NavLink>

          {/* <NavLink
            className={({ isActive }) => isNavActive(isActive)}
            to="/search"
          >
            SEARCH
          </NavLink> */}
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-primary_2">
            {state?.name}
          </span>
          <button onClick={onLogOut} className="nav-item nav-link btn">
            LogOut
          </button>
        </ul>
      </div>
    </nav>
  );
};
