import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import decoration from "./../../assets/Decoration.svg";
const HomeOrganization = () =>  {

    return (<>
  
      <div className="Organization">

<Container>
  <Row className="justify-content-center">
<h2 className="Organization__title">Komu pomagamy</h2>

</Row>
<Row className="justify-content-center AboutUs__decoration">
              <img src={decoration} alt="" />
            </Row>
</Container>

      </div></>
   );
    }
    
    export default HomeOrganization;
    