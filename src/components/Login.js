import React, { useRef, useState } from "react"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import decoration from "./../assets/Decoration.svg";
import Container from "react-bootstrap/Container";
import "./../scss/Login.scss"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth} from "./../contexts/AuthContext.js"
import { Link, useHistory } from "react-router-dom"
import firebase from "firebase/app"
import "firebase/auth";


const Login = () => {
  const {logout} = useAuth()
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const user = firebase.auth().currentUser;
if (user !== null) {
  // The user object has basic properties such as display name, email, etc.
  const displayName = user.displayName;
  const email = user.email;
  const photoURL = user.photoURL;
  const emailVerified = user.emailVerified;

  // The user's ID, unique to the Firebase project. Do NOT use
  // this value to authenticate with your backend server, if
  // you have one. Use User.getToken() instead.
  const uid = user.uid;
  console.log("email: "+email);
  console.log("Current user: "+firebase.auth().currentUser.email)
}

if (user == null) {
  console.log("użytkownik niezalogowany")
}

  // firebase.auth().onAuthStateChanged(function(user) {
  //   if (user) {
  //    console.log("zalogowany")
     
  //   } else {
  //    console.log("nie zalogowany")
  //   }
  // });
  const handleLogout = () => {
    try {
    logout();
     console.log('Wylogowano użytkownika:'+firebase.auth().currentUser.email);
     console.log('Status: ');
    } catch (err) {
     console.log('err:', err);
    }
   }


  async function handleSubmit(e) {
    e.preventDefault()

    if (!/\S+@\S+\.\S+/.test(emailRef.current.value)) {
      return setError('Podany email jest nieprawidłowy!')
    }

    if(passwordRef.current.value.length < 6){
      return setError("Hasło musi mieć co najmniej 6 znaków!")
  }

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (<>
  <div className="Login">
  <Container fluid>
        <Row className="justify-content-center">
  <h2 className="Login__title">Zaloguj się</h2>
</Row>
  <Row className="justify-content-center Login__decoration">
    <img src={decoration} alt="" />
  </Row>

  <Row className="justify-content-center Login__text">

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
            <Row className="buttons__container justify-content-center ">
            <button className=""><Link  onClick={handleLogout} to="/wylogowano">Wyloguj się</Link>
      </button>
            <button className=""><Link to="/rejestracja">Załóż konto</Link>
        {error && <p>{error.message}</p>}
      </button>
            <button disabled={loading} className="" type="submit">
              Zaloguj się
            </button>
            </Row>
          </Form>
          {/* <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div> */}
    
     


  </Row>
</Container>
  </div>
  </>
  );
}


export default Login
