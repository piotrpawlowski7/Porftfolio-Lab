import React from "react";
// import { Link as Link1 } from 'react-scroll';
// import { Link as Link2 } from 'react-router-dom';
import { NavHashLink } from "react-router-hash-link";

const Nav = () => {
  return (
    <div className="NavHome">
      <NavHashLink className="p-2"
        to="/"
        activeClassName="selected"
        activeStyle={{ color: "red" }}
        className="nav--home"
      >
        Start
      </NavHashLink>

      <NavHashLink className="p-2" to="/#about-project" className="nav--home">O co chodzi?</NavHashLink>

      <NavHashLink className="p-2" to="/#about-us" className="nav--home"> O nas</NavHashLink>

      <NavHashLink className="p-2" to="/#organization" className="nav--home">Fundacja i organizacje</NavHashLink>

      <NavHashLink className="p-2" to="/#contact" className="nav--home">Kontakt</NavHashLink>

    
    </div>
  );
};

export default Nav;
