import React from 'react';
import { Link } from "react-router-dom";
import "./../scss/Home.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import decoration from './../assets/Decoration.svg';
import HomeAboutProject from './Home/HomeAboutProject'
import HomeAboutUs from "./Home/HomeAboutUs"
import HomeOrganization from './Home/HomeOrganization';
import HomeContact from "./Home/HomeContact";
import HomeThreeColumns from "./Home/HomeThreeColumns";

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
      <Link to="/login"className=""><button>ODDAJ<br/>RZECZY</button></Link>
      <Link to="/login"className=""><button>ZORGANIZUJ<br/>ZBIÓRKĘ</button></Link>

      </Row>
      </Col>
         </Row>
      
      </div>
    </Container>
    </div>
 
   <HomeThreeColumns/>

    <div id="about-project">
   <HomeAboutProject/>
      </div>
    <div id="about-us">
   <HomeAboutUs/>
    </div>
    <div id="organization">
    <Container className="container">
    <HomeOrganization/>
    </Container>
    </div>
    <div id="contact">
    <Container className="container">
      <HomeContact/>
      </Container>
     </div>
    </>
    );
    }

export default Home
