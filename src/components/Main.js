import React from 'react'
import Home from './Home'
import Login from './Login';
import Signup from './Signup';
import Logout from './Logout';
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./Dashboard";

import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    
        <AuthProvider>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/logowanie' component={Login}/>
      <Route path='/rejestracja' component={Signup}/>
      <Route path='/wylogowano' component={Logout}/>
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
    </Switch>
    </AuthProvider>
  </main>
)

export default Main
