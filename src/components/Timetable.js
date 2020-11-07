import React, {Component} from "react";
import Day from './Day.js';
import {Container, Row} from "react-bootstrap";
import {Segment} from "semantic-ui-react";
class Timetable extends Component{
    render(){
        let listItems = this.props.days.map((day) =>
            <Segment style={{width: "60%", marginLeft: "20%", marginTop: "2%"}} textAlign={"center"}>
                <Container>
                    <Row style={{margin: '10px'}}>{day.day}</Row>
                    <Container><Day classes={day.classes}/></Container>
                </Container>
            </Segment>

        );
        return(
            <ul style={{padding: 0}}>{listItems}</ul>
        )
    }
}

export default Timetable;