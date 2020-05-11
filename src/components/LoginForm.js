import React, {Component} from "react";
import 'reactstrap';
import {isEmptyStatement} from "@babel/types";
import {createBrowserHistory} from 'history';
import {Redirect} from "react-router";

const fetch = require('node-fetch');
const history = createBrowserHistory();

class LoginForm extends Component{
    constructor(props){
        super(props);
        this.state = {login: '', password:''};
        this.data = {};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event){
        let name = event.target.name;
        let value = event.target.value;

        this.setState({[name]:value})
    }

    async handleSubmit(event) {

        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        let body_ = JSON.stringify({login: this.state.login, password: this.state.password});


        let requestOptions = {
            method: 'POST',
            body: body_, headers: headers
        };

        await fetch("http://localhost:1337/api/login", requestOptions)
            .then(response => response.json())
            .then(result => this.data = result);


        if(JSON.stringify(this.data) === '[]'){
            alert("Incorrect login or password");
        }

        else{
            if(this.data[0]["PASSWORD"] === this.state.password){
                alert(JSON.stringify(history));
                history.push("/home");
            }
            else {
                alert("Incorrect login or password");
            }
        }

        event.preventDefault();
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    <h0>Login</h0>
                    <input type="text" name="login" value={this.state.login} onChange={this.handleChange} placeholder="Login"/>
                    <h0>Password</h0>
                    <input type="text" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password"/>
                    <input type="submit" value="Log in"/>
                </label>
            </form>
        )
    }
}

export default LoginForm;
