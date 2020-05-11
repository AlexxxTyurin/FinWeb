import React, {Component} from "react";
import Day from '/Users/alextyurin/Desktop/WebStorm_projects/project/src/components/Day.js';
import {Container, Row} from "react-bootstrap";

class Timetable extends Component{
    render(){
        let listItems = this.props.days.map((day) =>
            <Container>
                <Row style={{margin: '10px'}}>{day.day}</Row>
                <Container><Day classes={day.classes}/></Container>
            </Container>

        );
        return(
            <ul>{listItems}</ul>
        )
    }
}

export default Timetable;
