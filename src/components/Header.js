import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Row from 'react-bootstrap/Row';
import NavPages from "./NavPages";
import "./../scss/Header.scss";
import Container from "react-bootstrap/Container";
// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>     
   
 <Container className="header__container">
    <Row className="justify-content-md-end" style={{zindex: 2000}}>
  <NavPages></NavPages>
    </Row>
    <Row className="justify-content-md-end">
    <Nav></Nav>
    </Row>
    </Container>
  </header>
);

export default Header;
