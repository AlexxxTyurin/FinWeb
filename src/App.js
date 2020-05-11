import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Link, Route, Redirect, Router} from 'react-router-dom';
import LoginForm from '/Users/alextyurin/Desktop/WebStorm_projects/app/src/components/LoginForm.js';
import RegistrationForm from '/Users/alextyurin/Desktop/WebStorm_projects/app/src/components/RegistrationForm.js';
import Home from "./components/Home";
import Routes from '/Users/alextyurin/Desktop/WebStorm_projects/app/src/routes.js';
import history from '/Users/alextyurin/Desktop/WebStorm_projects/app/src/history.js';


class App extends Component{
  render(){
    return(
        <BrowserRouter history={history}>
            <div>
                <Link to="/login">Log in</Link>
                <Link to="register">Register </Link>
                <Route path="/" component={App}>
                    <Route exact={true} path="/login" component={LoginForm}/>
                    <Route exact={true} path="/register" component={RegistrationForm}/>
                    <Route exact={true} path="/home" component={Home}/>
                </Route>
            </div>
        </BrowserRouter>
    )
  }
}

export default App;
