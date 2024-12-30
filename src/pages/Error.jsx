import { NavLink } from "react-router-dom";
import "../styles/error.scss";

function Error() {
  return (
    <div className="error">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <span>
        <NavLink to="/">Retourner sur la page d’accueil</NavLink>
      </span>
    </div>
  );
}

export default Error;
