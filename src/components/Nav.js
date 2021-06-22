import React from 'react';
import { Link } from 'react-scroll'

const Nav = () => {
    return (

    <ul style={{display: 'flex', listStyle: 'none', justifyContent: 'space-around'}}>
    <li><Link activeClass="active" to="home" spy={true} smooth={true}>Start</Link></li>
    <li><Link  to="about-project" spy={true} smooth={true}>O co chodzi?</Link></li>
    <li><Link  to="about-us" spy={true} smooth={true}>O nas</Link></li>
    <li><Link  to="organization" spy={true} smooth={true}>Fundacja i organizacje</Link></li>
    <li><Link  to="contact" spy={true} smooth={true}>Kontakt</Link></li>
      </ul>
      )
}

export default Nav