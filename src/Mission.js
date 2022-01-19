import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";
import Rules from "./Rules";

function Mission() {
	return (
		<Container className="mission">
			<Row className="p-2 mission-heading mt-5 justify-content-center">
				<h1> SPACECREW ASSEMBLE !! </h1>
			</Row>

			<Row className="p-2  mt-5 mb-4  justify-content-center">
				<Col md={9} className="mission-subtext">
					As a result of an Alien invasion our Galaxy has been destroyed. Only
					you and your crew survived the Apocalypse. As a captain of your
					spaceship you must now decide how to populate alien planets with your
					skillful crew and save it from extinction.
					<br />
					<br />
					Good Luck! <br />
				</Col>
			</Row>
			<Row>
				<Rules />
			</Row>
			<Row>
				<br />
			</Row>
			<Row>
				<NavLink to="/select">
					<Button variant="light" type="button" className="startBtn ">
						Prepare Mission!
					</Button>
				</NavLink>	
			</Row>
		</Container>
	);
}

export default Mission;
