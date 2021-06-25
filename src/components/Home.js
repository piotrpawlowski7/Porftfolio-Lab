import React from 'react';
import "./../scss/Home.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import decoration from './../assets/Decoration.svg';
import AboutProject from './HomeAboutProject'

const Home = () => {
    return (<>
        <div className="home">
  <Container className="container">
  
      <div id="home">
      <Row className="home__inside">
      <Col></Col>
      <Col>
      <Row className="justify-content-center">
        <h1>Zacznij pomagać</h1>
        </Row>
        <Row className="justify-content-center">
        <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
      </Row>
      <Row className="justify-content-center decoration"><img src={decoration} alt=""/></Row>
      <Row className="home__buttons">
<a href="#"><button>ODDAJ<br/>RZECZY</button></a>
<a href="#"><button>ZORGANIZUJ<br/>ZBIÓRKĘ</button></a>

      </Row>
      </Col>
         </Row>
      
      </div>
    </Container>
    </div>
    <div id="about-project">
    <Container className="container">
   <AboutProject/>
      </Container>
      </div>
    <div id="about-us" style={{height: 500}}>
    <h1>O nas</h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
    </div>
    <div id="organization" style={{height: 500}}>
    <h1>Fundacja i organizacje</h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
    </div>
    <div id="contact" style={{height: 500}}>
    <h1>Kontakt</h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
    </div>
    </>
    );
    }

export default Home
