import React, {Component} from "react";
import {Container, Row, Col} from "react-bootstrap";
import {Segment} from "semantic-ui-react";


class Day extends Component{
    render(){
        let listItems = this.props.classes.map((class_) =>
            <Segment style={{width: "70%", marginLeft: "12%"}}>
                <Container style={{fontFamily: 'Menlo'}}>
                    <Row>
                        <Col>{class_.beginLesson} - {class_.endLesson}</Col>
                        <Col>{class_.auditorium}</Col>
                        <Col>{class_.discipline}</Col>
                        <Col>{class_.lecturer}</Col>
                    </Row>
                </Container>
            </Segment>
            // <Container style={{fontFamily: 'Menlo'}}>
            //     <Row>
            //         <Col>{class_.beginLesson} - {class_.endLesson}</Col>
            //         <Col>{class_.auditorium}</Col>
            //         <Col>{class_.discipline}</Col>
            //         <Col>{class_.lecturer}</Col>
            //     </Row>
            // </Container>
        );
        return(
            //<Segment textAlign="center">
                <ul style={{margin: '10px'}}>{listItems}</ul>
            //</Segment>
            // <ul style={{margin: '10px'}}>{listItems}</ul>

        )
    }
}

export default Day;
