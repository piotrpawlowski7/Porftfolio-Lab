import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import decoration from './../../assets/Decoration.svg';

const HomeContact = () =>  {

    return (<>
    <div className="Contact">
    <Container className="container">
  

  <Row className="contact__inside">
  <Col></Col>
  <Col className="Contact__form">
  <Row className="justify-content-center">
    <h2>Skontaktuj się z nami</h2>
    </Row>
  <Row className="justify-content-center decoration"><img src={decoration} alt=""/></Row>
  <div className="Contact__form__container">
  <form>
    <div className="form-box">
      <input type="name" name="" required=""/>
      <label>Wpisz swoje imię</label>
    </div>
    <div className="form-box">
      <input type="email" name="" required=""/>
      <label>Wpisz swój email</label>
    </div>
    <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
     Wyślij
    </a>
  </form>

  </div>
  </Col>
     </Row>
  
 
</Container> </div>
    </>
    );
    }
    
    export default HomeContact;
    