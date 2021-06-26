import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import decoration from "./../assets/Decoration.svg";
import Container from "react-bootstrap/Container";
import React from 'react'
import "./../scss/Login.scss"

const Login = () => {
  return (<>
  <div className="Login">
  <Container fluid>
        <Row className="justify-content-center">
  <h2 className="Login__title">Zaloguj się</h2>
</Row>
  <Row className="justify-content-center Login__decoration">
    <img src={decoration} alt="" />
  </Row>

  <Row className="justify-content-center Login__text">
   
  </Row>
</Container>
  </div>
  </>
  );
}


export default Login
