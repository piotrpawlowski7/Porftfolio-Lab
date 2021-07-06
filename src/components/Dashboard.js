import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import Row from "react-bootstrap/Row";
import decoration from "./../assets/Decoration.svg";
import Container from "react-bootstrap/Container";
import "./../scss/Dashboard.scss";

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/logowanie")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
    <div className="Dashboard">
    <Container fluid>
    <Row className="justify-content-center">
            <h2 className="Logout__title">Dashboard</h2>
          </Row>
          <Row className="justify-content-center Dashboard__decoration">
            <img src={decoration} alt="" />
          </Row>
    <Row className="justify-content-center">
        <div
        >
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
         
          </div>
       </Row>
       <Row className="buttons__container justify-content-center">
      <div className="">
      <Link to="/update-profile" className="">
            Zaktualizuj profil
          </Link>
          <Link><button variant="link" onClick={handleLogout}>
          Wyloguj
        </button></Link> 
      </div>
      </Row>
      </Container>
      </div>
    </>
  )
}