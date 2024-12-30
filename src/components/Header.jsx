import { NavLink } from "react-router-dom";
import photo from "../assets/logo-header.png";
import "../styles/header.scss";

function Header() {
  return (
    <header>
      <nav>
        <div>
          <img src={photo} alt="logo" />
        </div>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/About"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
