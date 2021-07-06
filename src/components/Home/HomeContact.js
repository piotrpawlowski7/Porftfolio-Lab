import {useState} from 'react';
import ContactValidation from './../ContactValidation';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import decoration from './../../assets/Decoration.svg';
import "./../../scss/HomeContact.scss"

const HomeContact = () =>  {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [okData, setOkData] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(ContactValidation(formValues));
    setOkData(true);

    const data = {
      name: formValues.name,
      email: formValues.email,
      message: formValues.message,
    };

    fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
      method: 'POST',
      headers: {'Content-Type': 'application/json',},
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          console.log('Success:', data, 'Request status:', res.status);
          return res;
        } else {
          throw Error(
            `Request rejected with status ${res.status}, ${res.statusText}`
          );
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
      
  };

  
  const handleValue = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

    return (<>
    <div className="Contact">
    <Container className="container">
  <Row className="Contact__inside">
  <Col></Col>
  <Col className="Contact__form">
  <Row className="justify-content-center">
    <h2>Skontaktuj się z nami</h2>
    </Row>
  <Row className="justify-content-center decoration"><img src={decoration} alt=""/></Row>
  <div className="Contact__form__container">
  {okData && Object.keys(errors).length === 0 && (
            <p className="ok-message">
              Wiadomość została wysłana!
              <br />
              Wkrótce się skontaktujemy.
            </p>
          )}

  <div className="form">
            <form onSubmit={handleSubmit}>
              <div className="form-data">
                <div className="data1">
                  <label for="name">Wpisz swoje imię</label>
                  <br />
                  <input
                   className={errors.name ? 'error-border' : null}
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Krzysztof"
                    value={formValues.name}
                    onChange={handleValue}
                  ></input>
                  {errors.name && <p className="error">{errors.name}</p>}
                </div>
                <div className="data2">
                  <label for="email">Wpisz swój email</label>
                  <br />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="abc@xyz.pl"
                    value={formValues.email}
                    onChange={handleValue}
                    className={errors.email ? 'error-border' : null}
                  ></input>
                  {errors.email && <p className="error">{errors.email}</p>}
                </div>
              </div>
              <div className="contact-textarea">
                <label for="message">Wpisz swoją wiadomość</label>
                <br />
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                  value={formValues.message}
                  onChange={handleValue}
                  className={errors.message ? 'error-border' : 'null'}
                ></textarea>
                {errors.message && <p className="error">{errors.message}</p>}
              </div>
              <button className="btn btn-form" type="submit">
                Wyślij
              </button>
            </form></div>
           

  </div>
  </Col>
     </Row>
  
 
</Container> </div>
    </>
    );
    }
    
    export default HomeContact;
    