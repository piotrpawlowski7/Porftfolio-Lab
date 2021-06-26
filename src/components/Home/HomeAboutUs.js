import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import signature from "./../../assets/Signature.svg";
import people from "./../../assets/People.jpg";
import decoration from "./../../assets/Decoration.svg";
import Container from "react-bootstrap/Container";

const HomeAboutUs = () => {
  return (
    <>
      <div className="AboutUs">
      <Container fluid>
        <Row>
          <Col className="AboutUs__left">
                <div className="AboutUs__container">
            <Row className="justify-content-center">
              <h1 className="AboutUs__title">O nas</h1>
            </Row>
            <Row className="justify-content-center AboutUs__decoration">
              <img src={decoration} alt="" />
            </Row>

            <Row className="justify-content-center AboutUs__text">
              <p>
                Nori grape silver beet broccoli kombu beet greens fava bean
                potato quandong celery. Bunya nuts black-eyed pea prairie turnip
                leek lentil turnip greens parsnip.
              </p>
            </Row>
            <Row className="AboutUs__signature">
              <img src={signature} alt="" />
            </Row>
            </div>
          </Col>
          <Col className="AboutUs__right"></Col>
        </Row>
        </Container>
      </div>
    </>
  );
};

export default HomeAboutUs;
