import { NavLink } from "react-router-dom";

const Header = () => {
  
    return (
        <div className="head">
           <ul className="navigation">
            <NavLink to="/">
                <li>Accueil</li></NavLink>

            <NavLink to="/favorites">
                <li>Coups de coeur</li>
                </NavLink></ul>
<div className="logo"><h1>CinéApp</h1></div>
        </div>
    );
};

export default Header;