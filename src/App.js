import logo from './logo.svg';
import './scss/App.scss';
import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Container from "react-bootstrap/Container";

const App = () => (
  <div>
    
      <Header />
    
      <Main />
      <Footer/>
  </div>
)

export default App