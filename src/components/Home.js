import React, {Component} from "react";
import Scheduler from '/Users/alextyurin/Desktop/WebStorm_projects/app/src/components/Sheduler.js';


class Home extends Component{
    constructor(props){
        super(props);

        if (this.props.location.state === undefined){
            this.is_authenticated = false;
            this.user = null;
        }
        else {
            this.is_authenticated = this.props.location.state.is_authenticated;
            this.user = this.props.location.state.user;
            this.group_name = this.props.location.state.group_name;
        }

        if (this.is_authenticated === false || this.user === null){
            this.props.history.push("/");
        }

    }

    render(){

        return (
           <Scheduler group_name={this.group_name}/>
        )
    }
}

export default Home;