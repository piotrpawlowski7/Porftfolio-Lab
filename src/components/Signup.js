import React, { useRef, useState, useEffect } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import decoration from "./../assets/Decoration.svg";
import Container from "react-bootstrap/Container";
import "./../scss/Signup.scss";
import {resetPassword} from "./../contexts/AuthContext.js"
import firebase from "firebase/app"
import "firebase/auth";

const Signup = () => {
  const {resetPassword} = useAuth()
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
  const listener = event => {
    if (event.code === "Enter" || event.code === "NumpadEnter") { 
      event.preventDefault();
      handleSubmit()
    }
  };
  document.addEventListener("keydown", listener);
  return () => {
    document.removeEventListener("keydown", listener);
  };
}, []);

  async function handleSubmit(e) {

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Hasła się nie zgadzają");
    }

    if (!/\S+@\S+\.\S+/.test(emailRef.current.value)) {
      return setError("Podany email jest nieprawidłowy!");
    }

    if (passwordRef.current.value.length < 6) {
      return setError("Hasło musi mieć co najmniej 6 znaków!");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError(`Failed to create an account. Możliwe, że konto już istnieje.`);
      // resetPasswordLink();
    }

    setLoading(false);
  }

  const resetPasswordLink = () => {
    resetPassword(firebase.auth().currentUser.email)
  }
  return (
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
            {error && <p className="error">{error}</p>}
            <Form onSubmit={handleSubmit}>
            <div className="Signup__inputs">
              <Form.Group id="email">
                <Form.Label>Adres e-mail</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Hasło</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>
              <Form.Group id="password-confirm">
                <Form.Label>Potwierdzenie hasła</Form.Label>
                <Form.Control
                  type="password"
                  ref={passwordConfirmRef}
                  required
                />
              </Form.Group>
              </div>
              <Row className="buttons__container justify-content-center ">
                <Link to="/logowanie">
                  <button className="">Zaloguj się</button>
                </Link>

                <Link>  <button disabled={loading} className="" type="submit">
                  Załóż konto
                </button> </Link> 
              </Row>
            </Form>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Signup;
