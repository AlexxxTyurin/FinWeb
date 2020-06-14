import React, {Component} from 'react';
import './App.css';
import {Route, Router, Switch} from 'react-router-dom';
import LoginForm from '/Users/alextyurin/Desktop/WebStorm_projects/app/src/components/LoginForm.js';
import RegistrationForm from '/Users/alextyurin/Desktop/WebStorm_projects/app/src/components/RegistrationForm.js';
import Home from "/Users/alextyurin/Desktop/WebStorm_projects/app/src/components/Home.js";
import {createBrowserHistory} from 'history';
import Links from "./components/Links";



class App extends Component{
  constructor(){
      super();

      this.state = {
          loggedInStatus: "NOT_LOGGED_IN",
          user: {}
      };

      this.history = createBrowserHistory();
  }

  componentDidMount() {
      document.body.style.backgroundColor = "#216367";
  }


  render(){
    return(
        <Router history={this.history}>
            <Switch>
                <Route exact={true} path="/" render = {props =>(
                    <LoginForm
                        history = {this.history}
                    />
                )}/>
                <Route exact={true} path="/register" render={props =>(
                    <RegistrationForm
                        history = {this.history}
                    />
                )}/>
                <Route exact={true} path="/home" render={props =>(
                    <Home
                        {...props}
                    />
                )}/>
                {/*<Route exact={true} path="/" render={props => (*/}
                {/*    <Links/>*/}
                {/*)}/>*/}
            </Switch>
        </Router>
    )
  }
}

export default App;
