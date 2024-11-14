import { NavLink } from "react-router-dom";
import photo from '../assets/LOGO.png';
function Header() {
    return (
        <header>
        <nav>
        <div><img src={photo} alt="logo" /></div>
            <ul>
                <li><NavLink to="/">Accueil</NavLink></li>
                <li><NavLink to="/About">À Propos</NavLink></li>
            </ul>
        </nav>
    </header>
    );
  }
  
  export default Header;