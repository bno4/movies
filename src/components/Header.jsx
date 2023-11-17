import { NavLink } from "react-router-dom";

const Header = () => {
  
    return (
        <div className="head">
            <div className="logo">
            <NavLink to="/">
                <h1><i className="fa-solid fa-ticket"></i> CineMap </h1></NavLink></div>
           <ul className="navigation">
            <NavLink to="/">
                <li>Accueil</li></NavLink>

            <NavLink to="/favorites">
                <li>Favoris</li>
                </NavLink></ul>

        </div>
    );
};

export default Header;