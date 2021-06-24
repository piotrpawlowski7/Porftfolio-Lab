import React from "react";
// import { Link as Link1 } from 'react-scroll';
// import { Link as Link2 } from 'react-router-dom';
import { NavHashLink } from "react-router-hash-link";

const Nav = () => {
  return (
    <>
      <NavHashLink className="p-2"
        to="/"
        activeClassName="selected"
        activeStyle={{ color: "red" }}
      >
        Start
      </NavHashLink>

      <NavHashLink className="p-2" to="/#about-project">O co chodzi?</NavHashLink>

      <NavHashLink className="p-2" to="/#about-us">O nas</NavHashLink>

      <NavHashLink className="p-2" to="/#organization">Fundacja i organizacje</NavHashLink>

      <NavHashLink className="p-2" to="/#contact">Kontakt</NavHashLink>

      {/* <ul style={{display: 'flex', listStyle: 'none', justifyContent: 'space-around'}}>
    <li><Link2 to='/' spy={true} smooth={true}>Start</Link2></li>
    <li><Link1  to="about-project" spy={true} smooth={true}>O co chodzi?</Link1></li>
    <li><Link1  to="about-us" spy={true} smooth={true}>O nas</Link1></li>
    <li><Link1  to="organization" spy={true} smooth={true}>Fundacja i organizacje</Link1></li>
    <li><Link1  to="contact" spy={true} smooth={true}>Kontakt</Link1></li>
      </ul> */}
    </>
  );
};

export default Nav;
