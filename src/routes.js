import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
// import Route from '/Users/alextyurin/Desktop/WebStorm_projects/app/src/components/MyRouter.js';
import App from '/Users/alextyurin/Desktop/WebStorm_projects/app/src/App.js';
import LoginForm from '/Users/alextyurin/Desktop/WebStorm_projects/app/src/components/LoginForm.js';
import RegistrationForm from '/Users/alextyurin/Desktop/WebStorm_projects/app/src/components/RegistrationForm.js';
import Home from '/Users/alextyurin/Desktop/WebStorm_projects/app/src/components/Home.js';


class Routes extends Component{
    render() {
        return (
                <Switch>
                    <Route path="/" exact component={App}>
                        <Route path="/login" component={LoginForm}/>
                        <Route path="/register" component={RegistrationForm}/>
                        <Route path="/home" component={Home}/>
                    </Route>
                </Switch>
            );
    }
}

export default Routes;

