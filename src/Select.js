import React from "react";
import CrewMembers from "./CrewMembers";
import Planets from "./Planets";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

// import {NavLink} from 'react-router-dom';

function Select() {
  return (
    <Container className="selectContainer">
      <Row className="m-3 ">
        <h3>Select 10 Crew members and a Planet to colonize</h3>
      </Row>
      <Row>
        <Col>
          <div>
            {" "}
            <Planets />{" "}
          </div>
        </Col>
        <Col>
          <div>
            <CrewMembers />{" "}
          </div>
        </Col>
      </Row>
      <br />
      <Row>
      <Button variant="light" type="button" className="startBtn ">
            View Mission Status!
          </Button>
      </Row>
    </Container>
  );
}

export default Select;


