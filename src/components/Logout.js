import React from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import decoration from "./../assets/Decoration.svg";
import Container from "react-bootstrap/Container";
import "./../scss/Logout.scss";


const Logout = () => {
 

  return (
    <>
      <div className="Logout">
        <Container fluid>
          <Row className="justify-content-center">
            <h2 className="Logout__title">Wylogowanie nastiąpiło pomyślnie!</h2>
          </Row>
          <Row className="justify-content-center Login__decoration">
            <img src={decoration} alt="" />
          </Row>

          <Row className="justify-content-center"><div className="Logout__button">
      <Link to="/" className=""><button>Strona główna</button></Link></div>
     

      </Row>
        </Container>
      </div>
    </>
  );
};

export default Logout;
