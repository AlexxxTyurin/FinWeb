import React, {Component} from "react";
import {Container, Row, Col} from "react-bootstrap";


class Day extends Component{
    render(){
        let listItems = this.props.classes.map((class_) =>
            <Container style={{fontFamily: 'Menlo'}}>
                <Row>
                    <Col>{class_.beginLesson} - {class_.endLesson}</Col>
                    <Col>{class_.auditorium}</Col>
                    <Col>{class_.discipline}</Col>
                    <Col>{class_.lecturer}</Col>
                </Row>
            </Container>
        );
        return(
            <ul style={{margin: '10px'}}>{listItems}</ul>

        )
    }
}

export default Day;
