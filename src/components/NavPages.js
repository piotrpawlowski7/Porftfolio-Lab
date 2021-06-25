import React from "react";
import { Link } from "react-router-dom";
// The Header creates links that can be used to navigate
// between routes.
const NavPages = () => (
<nav>
      <ul className="d-flex flex-row">
        <li className="p-2">
          <Link to="/login"className="nav__pages nav--pages">Zaloguj</Link>
        </li>
        <li className="p-2">
          <Link to="/register" className="nav__pages nav--pages">Załóż konto</Link>
        </li>
      </ul>
    </nav>

);

export default NavPages;
