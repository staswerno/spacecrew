import React from "react";
import CrewMembers from "./CrewMembers";
import Planets from "./Planets";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import {NavLink} from 'react-router-dom';

function Select() {
  return (
    <Container className = "selectContainer">
      <Row className = "m-3 ">
        <h3>Select 10 Crew members and a Planet to colonize</h3>
      </Row>
      <Row >
        <Col> 
          <div> <Planets /> </div>  
        </Col>
        <Col> 
        <div><CrewMembers /> </div>
        </Col>
      </Row> 
    </Container>
  
  );
}

export default Select;




   // <div className="container mt-5">
    //   <h5>Select 10 Crew members for your planet</h5>
    //   <div className="d-flex flex-lg-row">
    //     <div>
    //       <h1> jai's planet carousel </h1>
    //     </div>
    //     <div>
    //       <CrewMembers />
    //     </div>
    //   </div>
    // </div>