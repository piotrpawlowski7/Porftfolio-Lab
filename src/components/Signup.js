
import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import decoration from "./../assets/Decoration.svg";
import Container from "react-bootstrap/Container";
import "./../scss/Signup.scss"


const Signup = () => {

  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const {signup} = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()



    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Hasła się nie zgadzają")
    }

    if (!/\S+@\S+\.\S+/.test(emailRef.current.value)) {
      return setError('Podany email jest nieprawidłowy!')
    }

    if(passwordRef.current.value.length < 6){
      return setError("Hasło musi mieć co najmniej 6 znaków!")
  }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to create an account. Możliwe, że konto już istnieje.")
    }

    setLoading(false)
  }

  return(
    <>
    <div className="Login">
  <Container fluid>
        <Row className="justify-content-center">
  <h2 className="Login__title">Załóż konto</h2>
</Row>
  <Row className="justify-content-center Signup__decoration">
    <img src={decoration} alt="" />
  </Row>

  <Row className="justify-content-center Signup__text">

          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Row className="buttons__container justify-content-center ">
     
     <button className="">
       <Link to="/logowanie">Zaloguj się</Link>
     </button>

     <button disabled={loading} className="" type="submit">
             Załóż konto
           </button>
     </Row>
          </Form>
   
      </Row>
    
     
</Container>
  </div>
 </> 
)
  }


export default Signup
