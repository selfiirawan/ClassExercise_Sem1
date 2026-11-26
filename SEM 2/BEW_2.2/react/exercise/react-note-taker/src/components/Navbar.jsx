import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary shadow">
      <div className="container-fluid justify-content-start">
        <NavLink to={"/"} className="navbar-brand fs-lg">
          My Notes App
        </NavLink>

        <div className="collapse navbar-collapse show">
          <ul className="navbar-nav flex-row mx-auto fs-sm gap-3">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                <i className="bi bi-house-door-fill"></i>
                ALL NOTES
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                <i className="bi bi-plus-lg"></i>
                ADD NOTES
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                <i className="bi bi-boxes"></i>
                CATEGORIES
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
