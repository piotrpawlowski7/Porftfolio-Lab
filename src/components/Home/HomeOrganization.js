import React, { useState, useEffect, Fragment } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import decoration from "./../../assets/Decoration.svg";
import "./../../scss/HomeOrganization.scss"

const HomeOrganization = () => {
  const [ins, setIns] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(3);
  const [isActive, setActive] = useState("fundacje");

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = ins.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    fetch("http://localhost:3000/fundacje")
      .then((res) => res.json())
      .then((json) => setIns(json));
  }, []);

  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(ins.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const renderPageNumbers = pages.map((number) => {
    return (
      <li
        key={number}
        id={number}
        onClick={handleClick}
        className={currentPage == number ? "active" : null}
      >
        {number}
      </li>
    );
  });

  const renderData = (ins) => {
    return (
      <ul>
        {ins.map((ins, index) => {
          return (
            <li key={index} className="Organization__single_container">
              <div className="Organization__single_main">
                <p className="Organization__single_title">{ins.organization}</p>
                <p className="Organization__single_tags">
                  {ins.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </p>
                </div>
              <div>
                <p className="Organization__single_description">
                  {" "}
                  {ins.description}
                </p>
              </div>
             
            </li>
          );
        })}
      </ul>
    );
  };

  function getInstitution(ins) {
    fetch("http://localhost:3000/" + ins)
      .then((res) => res.json())
      .then((ins) => {
        setIns(ins);
        setcurrentPage(1);
      })

      .catch(function (error) {
        console.log("Error: " + error.message);
      });
  }

  function handleToggle(name) {
    setActive(name);
  }

  return (
    <>
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
              <button
                className={isActive === "fundacje" ? "active" : ""}
                onClick={() => {
                  getInstitution("fundacje");
                  handleToggle("fundacje");
                }}
              >
                Fundacjom
              </button>
              <button
                className={isActive === "organizacje" ? "active" : ""}
                onClick={() => {
                  getInstitution("organizacje");
                  handleToggle("organizacje");
                }}
              >
                Organizaciom
                <br />
                pozarządowym
              </button>
              <button
                className={isActive === "lokalne" ? "active" : ""}
                onClick={() => {
                  getInstitution("lokalne");
                  handleToggle("lokalne");
                }}
              >
                Lokalnym
                <br />
                zbiórkom
              </button>
            </div>
          </Row>
          <div>
            <Row className="justify-content-center">
              <div className="Organization__description">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
              </div>{" "}
            </Row>
            <div>
              <div className="Organization__slider">
                {renderData(currentItems)}
              </div>
            </div>
          </div>
          <Row className="Organization__pages justify-content-center">
            <ul className="Organization__pages__numbers">
              {renderPageNumbers}
            </ul>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default HomeOrganization;
