import React from "react";
import { Link } from "react-router-dom";
import "./../scss/NavPages.scss"
// The Header creates links that can be used to navigate
// between routes.
const NavPages = () => {
  

  return(<>
  
<nav className="NavPages">
      <ul className="d-flex flex-row">
        <li className="p-2">
          <Link to="/logowanie"className="nav__pages nav--pages">Zaloguj</Link>
        </li>
        <li className="p-2">
          <Link to="/rejestracja" className="nav__pages nav--pages">Załóż konto</Link>
        </li>
      </ul>
    </nav>
</>
  );
};

export default NavPages;
