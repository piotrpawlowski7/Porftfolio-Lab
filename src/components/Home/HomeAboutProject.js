import react from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import decoration from "./../../assets/Decoration.svg";
import icon1 from "./../../assets/Icon-1.svg";
import icon2 from "./../../assets/Icon-2.svg";
import icon3 from "./../../assets/Icon-3.svg";
import icon4 from "./../../assets/Icon-4.svg";
import { Link } from "react-router-dom";

const HomeAboutProject = () => (
  <>
    <div className="AboutProject">
     
      <Container fuid>
      <Row className="justify-content-center">
        <h1 className="AboutProject__title">Wystarczą 4 proste kroki</h1>
      </Row>
      <Row className="justify-content-center AboutProject__decoration">
        <img src={decoration} alt="" />
      </Row>
      </Container>
      <div className="section--gray">

        <div className="AboutProject__row">
          <div className="AboutProject__FourColumns">
            <div className="AboutProject__FourColumns__inside">
              <Col className="AboutProject__box">
                <icon>
                  <img src={icon1}></img>
                </icon>
                <h4>Wybierz rzeczy</h4>
                <p>ubrania, zabawki, sprzęt i inne</p>
              </Col>
              <Col className="AboutProject__box">
                <icon>
                  <img src={icon2}></img>
                </icon>
                <h4>Spakuj je</h4>
               
                <p>skorzystaj z worków na śmieci</p>
              </Col>
              <Col className="AboutProject__box">
                <icon>
                  <img src={icon3}></img>
                </icon>
                <h4>Zdecyduj komu chcesz pomóc</h4>
              
                <p>wybierz zaufane miejsce</p>
              </Col>
              <Col className="AboutProject__box">
                <icon>
                  <img src={icon4}></img>
                </icon>
                <h4>Zamów kuriera</h4>
               
                <p>kurier przyjedzie w dogodnym terminie</p>
              </Col>
            </div>
          </div>
        </div>
      </div>
      <Container fuid>
    <Row className="AboutProject__buttons">
    <Link to="/login" className=""><button>ODDAJ<br/>RZECZY</button></Link>

      </Row>
      </Container>
      </div>
  </>
);

export default HomeAboutProject;
