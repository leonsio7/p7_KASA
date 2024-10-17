import { NavLink } from "react-router-dom";
function Header() {
    return (
        <header>
        <nav>
            <div className="logo">K<span className="home-icon">🏠</span>sa</div>
            <ul>
                <li><NavLink to="/">Accueil</NavLink></li>
                <li><NavLink to="/About">À Propos</NavLink></li>
            </ul>
        </nav>
    </header>
    );
  }
  
  export default Header;