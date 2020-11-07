import React, {Component} from "react";
import 'reactstrap';
import {Button, Form, Grid, Segment} from "semantic-ui-react";
import FormInput from "semantic-ui-react/dist/commonjs/collections/Form/FormInput";
import Dropdown from "semantic-ui-react/dist/commonjs/modules/Dropdown";
import Select from "semantic-ui-react/dist/commonjs/addons/Select";

const groups = [
    {key: "ПИ17-2", value: "ПИ17-2", text: "ПИ17-2"},
    {key: "ПИ17-1", value: "ПИ17-1", text: "ПИ17-1"}
];

class RegistrationForm extends Component{
    constructor(props){
        super(props);
        this.state = {login: '', password:'', group_name:''};
        this.data = {};
        this.response = {};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.switchToLogin = this.switchToLogin.bind(this);
        this.changeSelect = this.changeSelect.bind(this);
    }

    switchToLogin(){
        this.props.history.push("/")
    }

    handleChange(event){
        let name = event.target.name;
        let value = event.target.value;

        this.setState({[name]:value})
    }

    changeSelect(event, {value}){
        this.setState({["group_name"]:value});
    }

    async handleSubmit(event) {

        var headers = new Headers();
        headers.append("Content-Type", "application/json");

        var body_ = JSON.stringify(
            {login: this.state.login, password: this.state.password, group_name: this.state.group_name});

        var requestOptions = {
            method: 'POST',
            body: body_, headers: headers
        };

        await fetch('http://localhost:1337/api/register/', requestOptions)
            .then(response => response.json())
            .then(result => this.data = result);

        if (this.data.status === "Success"){
            this.props.history.push("/home", {user: this.state.login, is_authenticated: true, group_name: this.state.group_name});
        }

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

                            <Form.Select
                                label="Group name"
                                style={{width: "20%"}}
                                placeholder="Group name..."
                                options={groups}
                                name="group_name"
                                value={this.state.group_name}
                                onChange={this.changeSelect}
                            />

                            <Button content='Register' primary />
                        </Form>
                    </Grid.Column>

                    <Grid.Column verticalAlign='middle' style={{width: "20%"}}>
                        <Button
                            content='Log in'
                            icon='sign in'
                            size='big'
                            style={{width: "200%"}}
                            onClick={this.switchToLogin}
                        />
                    </Grid.Column>
                </Grid>
            </Segment>
        )



        // return(
        //     <form onSubmit={this.handleSubmit}>
        //         <label>
        //             <h0>Login</h0>
        //             <input type="text" name="login" value={this.state.login} onChange={this.handleChange} placeholder="Login"/>
        //             <h0>Password</h0>
        //             <input type="text" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password"/>
        //             <h0>Group name</h0>
        //             <input type="text" name="group_name" value={this.state.group_name} onChange={this.handleChange} placeholder="Group name"/>
        //             <input type="submit" value="Register"/>
        //         </label>
        //     </form>
        // )
    }
}

export default RegistrationForm;