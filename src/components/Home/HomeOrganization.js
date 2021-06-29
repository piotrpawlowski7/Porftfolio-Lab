
import React, { useState, useEffect, Fragment } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import decoration from "./../../assets/Decoration.svg";

const HomeOrganization =() =>{
  const [ins, setIns] =useState([]);

  const API_URL = "http://localhost:3000";
  
  const getIntitution = (ins) => {
    fetch('http://localhost:3000/'+ins)
  
    .then((res) => res.json())
  .then((ins) => setIns(ins))

    .catch(function (error) {
      console.log('Error during fetch: ' + error.message);
    });
  }


    return (<>
  
      <div className="Organization">

<Container>
  <Row className="justify-content-center">
<h2 className="Organization__title">Komu pomagamy</h2>

</Row>
<Row className="justify-content-center AboutUs__decoration">
              <img src={decoration} alt="" />
            </Row>
            <Row className="justify-content-center">
<div className="Organization__buttons">
<button onClick={()=> {getIntitution("fundacje")}} className="home__button">Fundacjom</button>
 <button onClick={()=> {getIntitution("organizacje")}} className="home__button">Organizaciom<br/>pozarządowym</button>
 <button onClick={()=> {getIntitution("lokalne")}} className="home__button">Lokalnym<br/>zbbiórkom</button>
</div>
            </Row>
            <div>
              <Row>
{ins.map((ins,index) => (
  <div>
  <h2>{ins.organization}</h2>
  <p>{ins.description}</p>
  <p>{ins.tags}</p>
  </div>
))}
            </Row>
            </div>
</Container>

      </div></>
   );
    }
    
    export default HomeOrganization;
    