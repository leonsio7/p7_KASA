import { NavLink } from "react-router-dom";

function Card({ cover, title, id }) {
  return (
    <NavLink to={"/Location/" + id} className="Card">
      <img src={cover} alt={title} />
      <h3>{title}</h3>
    </NavLink>
  );
}

export default Card;
