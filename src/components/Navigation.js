import React, {Component} from "react";
import 'bootstrap';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {createBrowserHistory} from "history";
import LoginForm from '/Users/alextyurin/Desktop/WebStorm_projects/project/src/components/LoginForm.js';
import RegistrationForm from '/Users/alextyurin/Desktop/WebStorm_projects/project/src/components/RegistrationForm.js';
import Home from '/Users/alextyurin/Desktop/WebStorm_projects/project/src/components/Home.js';


const history = createBrowserHistory();

class Navigation extends Component{
    render(){
        return(
            <BrowserRouter history={history}>
                <div>
                    <ul>
                        <li><Link to="/registration">Register</Link></li>
                        <li><Link to="/login">Log in</Link></li>
                    </ul>
                    <Route path="/login" component={LoginForm}/>
                    <Route path="/registration" component={RegistrationForm}/>
                    <Route path="home" component={Home}/>
                </div>
            </BrowserRouter>
        )
    }
}
export default Navigation;