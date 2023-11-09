import { NavLink } from "react-router-dom";

const Header = () => {
  
    return (
        <div className="head">
           <ul className="navigation">
            <NavLink to="/">
                <li>Accueil</li></NavLink>

            <NavLink to="/favorites">
                <li>Favoris</li>
                </NavLink></ul>
<div className="logo"><h1>CineMap</h1></div>
        </div>
    );
};

export default Header;