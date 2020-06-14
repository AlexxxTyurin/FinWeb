import React, {Component} from "react";
import Scheduler from '/Users/alextyurin/Desktop/WebStorm_projects/app/src/components/Sheduler.js';


let monday = {day: 'Monday', classes:[
    {subject_name: 'Web', start: '10:10', end: '11:40', teacher: 'Чернышов', auditory: 707},
    {subject_name: 'DM', start: '11:50', end: '13:20', teacher: 'Моисеев', auditory: 706},
    {subject_name: 'Web', start: '14:00', end: '15:30', teacher: 'Чернышов', auditory: 304}
]};

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

    // componentDidMount() {
    //     if (this.is_authenticated === false || this.user === null){
    //         this.props.history.push("/");
    //     }
    // }

    render(){

        return (
           <Scheduler group_name={this.group_name}/>
        )
    }
}

export default Home;