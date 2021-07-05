import React, { useRef, useState } from "react";
import Row from "react-bootstrap/Row";
import decoration from "./../assets/Decoration.svg";
import Container from "react-bootstrap/Container";
import "./../scss/Login.scss";


const Logout = () => {
 

  return (
    <>
      <div className="Logout">
        <Container fluid>
          <Row className="justify-content-center">
            <h2 className="Logout__title">Wylogowano</h2>
          </Row>
          <Row className="justify-content-center Login__decoration">
            <img src={decoration} alt="" />
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Logout;
