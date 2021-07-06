import React, { useRef, useState, useEffect } from "react"
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
  
  const [LoggedIn, setLoggedIn]=useState(false);

  const user = firebase.auth().currentUser;
  
if (user !== null) {
  const displayName = user.displayName;
  const email = user.email;
  const photoURL = user.photoURL;
  const emailVerified = user.emailVerified;

  const uid = user.uid;
  console.log("email: "+email);
  console.log("Current user: "+firebase.auth().currentUser.email)
}

if (user == null) {
  
  console.log("użytkownik niezalogowany")
}


useEffect(() => {
  function displayLogged() {
    if (user !== null) {
      setLoggedIn(true);
    }
   
  }
  
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


  const handleLogout = () => {
    try {
    logout();
     console.log('Wylogowano użytkownika:'+firebase.auth().currentUser.email);
     console.log('Status: '+user);
    } catch (err) {
     console.log('err:', err);
    }
   }


  async function handleSubmit(e) {
 

    if (!/\S+@\S+\.\S+/.test(emailRef.current.value)) {
      return setError('Podany email jest nieprawidłowy!')
    }

    if(passwordRef.current.value.length < 6){
      return setError("Hasło musi mieć co najmniej 6 znaków!")
  }

    try {
      setError("")
      setLoading(true)
      setLoggedIn(true)
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

  {error && <p className="error">{error}</p>}
          <Form onSubmit={handleSubmit} className="Login__container">
            <div className="Login__inputs">
            <Form.Group id="email">
              <Form.Label>Adres e-mail</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Hasło</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            </div>
           
            <Row className="buttons__container justify-content-center">
    {user !== null &&        
            <Link  onClick={handleLogout} to="/wylogowano"><button className="">Wyloguj się   </button></Link>
   }
  {user == null &&   <Link to="/rejestracja">         <button className="">Załóż konto     </button>  {error && <p>{error.message}</p>}</Link>
}
 
           <Link> <button disabled={loading} className="" type="submit">
              Zaloguj się
            </button></Link>
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
