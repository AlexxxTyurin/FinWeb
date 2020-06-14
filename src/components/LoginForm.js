import React, {Component} from "react";
import 'reactstrap';
import {withRouter} from "react-router-dom";
import {Button, Divider, Form, Grid, Segment} from "semantic-ui-react";
import FormInput from "semantic-ui-react/dist/commonjs/collections/Form/FormInput";

const fetch = require('node-fetch');
// const history = createBrowserHistory();

class LoginForm extends Component{
    constructor(props){
        super(props);
        this.state = {login: '', password:''};
        this.data = {};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.switchToRegistration = this.switchToRegistration.bind(this);
    }


    handleChange(event){
        let name = event.target.name;
        let value = event.target.value;

        this.setState({[name]:value});
    }

    switchToRegistration(){
        this.props.history.push("/register")
    }


    async handleSubmit(event) {

        // let headers = new Headers();
        // headers.append("Content-Type", "application/json");
        //
        // let body_ = JSON.stringify({login: this.state.login, password: this.state.password});
        //
        // let requestOptions = {
        //     method: 'POST',
        //     body: body_, headers: headers
        // };
        //
        // await fetch("http://localhost:1337/api/login", requestOptions)
        //     .then(response => response.json())
        //     .then(result => this.data = result);
        //
        // alert(JSON.stringify(this.data));
        //
        // if(JSON.stringify(this.data) === '[]'){
        //     alert("Incorrect login or password");
        // }
        //
        // else{
        //     if(this.data[0]["PASSWORD"] === this.state.password){
        //         alert("Something")
        //     }
        //     else {
        //         alert("Incorrect login or password");
        //     }
        // }

        if (this.state.login === "alexander" && this.state.password === "1234"){
            alert("Success");
        }

        this.props.history.push("/home", {user: "alexander", is_authenticated: true, group_name: "ПИ3-2"});

        event.preventDefault();
    }

    render() {
        return(
            <Segment placeholder textAlign="center" style={{width: "50%", margin: "25%", marginTop: "15%"}} >
                <Grid columns={2} relaxed="very" stackable verticalAlign="middle">
                    <Grid.Column style={{width: '50%', padding: "4%"}}>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Input
                                type="text"
                                style={{width: '50%'}}
                                icon='user'
                                iconPosition='left'
                                label="Login"
                                placeholder="Login..."
                                value={this.state.login}
                                onChange={this.handleChange}
                                name="login"

                            />

                            <Form.Input
                                style={{width: '50%'}}
                                icon='lock'
                                iconPosition='left'
                                label='Password'
                                type='password'
                                placeholder="Password..."
                                value={this.state.password}
                                onChange={this.handleChange}
                                name="password"
                            />

                            <Button content='Login' primary />
                        </Form>
                    </Grid.Column>

                    <Grid.Column verticalAlign='middle' style={{width: "20%"}}>
                        <Button
                            content='Sign up'
                            icon='signup'
                            size='big'
                            style={{width: "200%"}}
                            onClick={this.switchToRegistration}
                        />
                    </Grid.Column>
                </Grid>
            </Segment>
        )
    }
}

export default withRouter(LoginForm);
