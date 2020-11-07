import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class FronPage extends Component{
    render() {
        return(
            <div>
                <Link to="/login">Log in</Link>
                <Link to="register">Register </Link>
            </div>
        )
    }
}