import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

function Mission() {
  return (
    <div className="justify-content-center">
      <Container className=" mission ">
        <Row className="p-2 mission-heading mt-5 justify-content-center">
          <h1> SPACECREW ASSEMBLE !! </h1>
        </Row>
        <Row className="p-2 mission-subtext mt-5 justify-content-center">
          As a result of an Alien invasion our Galaxy has been destroyed. Only
          you and your crew survived the Apocalypse. As a captain of your
          spaceship you must now decide how to populate alien planets with your
          skillful crew and save it from extinction.
          <br />
          <br />
          <br />
          Good Luck! <br />
        </Row>
        <Row class="p-2 mt-5 justify-content-center">
          <NavLink to="/select">
            <Button variant="light" type="button" className="startBtn">
              Start Mission!
            </Button>
          </NavLink>
        </Row>
      </Container>
    </div>
  );
}

export default Mission;
