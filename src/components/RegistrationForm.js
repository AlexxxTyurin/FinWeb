import React, {Component} from "react";
import 'reactstrap';

class RegistrationForm extends Component{
    constructor(props){
        super(props);
        this.state = {login: '', password:'', group_name:''};
        this.data = {};
        this.response = {};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event){
        let name = event.target.name;
        let value = event.target.value;

        this.setState({[name]:value})
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

        await fetch('http://localhost:1337/api/register/', requestOptions);

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
                    <h0>Group name</h0>
                    <input type="text" name="group_name" value={this.state.group_name} onChange={this.handleChange} placeholder="Group name"/>
                    <input type="submit" value="Register"/>
                </label>
            </form>
        )
    }
}

export default RegistrationForm;