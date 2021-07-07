import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./../scss/Footer.scss";

const Footer = () => {
    return (
        <>
        <div className="Footer">
        <Container fluid>
            <Row className="justify-content-center">
                <div className="Footer__content"><p>Copyright by Coders Lab</p></div></Row>
        </Container>
        </div>
        </>
    );
}

export default Footer;