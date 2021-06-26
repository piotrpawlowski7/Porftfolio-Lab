import react from "react";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container";

const HomeThreeColumns = () => {
    return <>
    <div className="HomeThreeColumns">
    <Container className="container">
    <Row className="HomeThreeColumns__container d-flex justify-content-between">
      <Col className="HomeThreeColumns__box ">
      <h1 className="HomeThreeColumns--stat">10</h1>
        <h3 className="HomeThreeColumns--title">ODDANYCH WORKÓW</h3>
        <div className="HomeThreeColumns--para">
        <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
        </div> </Col>
      <Col className="HomeThreeColumns__box">
      <h1 className="HomeThreeColumns--stat">5</h1>
        <h3 className="HomeThreeColumns--title">WSPARTYCH ORGANIZACJI</h3>
        <div className="HomeThreeColumns--para">
        <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
        </div> 
        </Col>
      <Col className="HomeThreeColumns__box">
      <h1 className="HomeThreeColumns--stat">7</h1>
        <h3 className="HomeThreeColumns--title">ZORGANZOWANYCH ZBIÓREK</h3>
        <div className="HomeThreeColumns--para">
        <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
        </div> 
        </Col>
    </Row>
    </Container>
  </div>
    </>;
  };
  
  export default HomeThreeColumns;