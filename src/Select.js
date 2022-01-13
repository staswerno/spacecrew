import React from "react";
import CrewMembers from "./CrewMembers";
import Planets from "./Planets";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import {NavLink} from 'react-router-dom';

function Select() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      <Button variant="light" type="button" className="startBtn " onClick={handleShow}>
            View Mission Status!
          </Button>

      <Modal show={show} onHide={handleClose} centered >
        <Modal.Header closeButton>
          <Modal.Title>
            <h1>Mission - Success </h1></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>The Planet has thrived !</h3>
          <h3>A good Leader guided them to success !</h3>
          <h3>The And the Scloopies walked on stilts !</h3>
        </Modal.Body>
        <Modal.Footer>
          <NavLink to="/mission"> 
            <Button variant="primary" className="startBtn " onClick={handleClose}>
              Play Again
            </Button>
          </NavLink>
        </Modal.Footer>
      </Modal>
      </Row>
    </Container>
  );
}

export default Select;


