import React from "react";
import CrewMembers from "./CrewMembers";
import Planets from "./Planets";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { NavLink } from "react-router-dom";

function Select() {
	const [show, setShow] = useState(false);
	const [selectedPeople, setSelectedPeople] = useState([]);
	const [selectedCrew, setSelectedCrew] = useState([]);
	const [selectedLeadership, setSelectedLeadership] = useState(0);
	const [crewMemberIndex, setCrewMemberIndex] = useState();
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const onChangeSelectedPerson = (
		id,
		Name,
		Origin,
		Leadership,
		Mining,
		Farming,
		Building,
		Combat,
		Science,
		Fertility
	) => {
		const isSelected =
			selectedPeople.indexOf(
				id,
				Name,
				Origin,
				Leadership,
				Mining,
				Farming,
				Building,
				Combat,
				Science,
				Fertility
			) > -1;

		const newSelectedPeople = isSelected
			? selectedPeople.filter((person) => person != id)
			: [
					...selectedPeople,
					id,
					Name,
					Origin,
					Leadership,
					Mining,
					Farming,
					Building,
					Combat,
					Science,
					Fertility,
			  ];

		setSelectedPeople(newSelectedPeople);

		if (selectedCrew.includes(id)) {
			setCrewMemberIndex(selectedCrew.indexOf(id)); //Takes an old index for some reason

			console.log("crewmemberindex" + crewMemberIndex);
			selectedCrew.splice(crewMemberIndex, 1);
			setSelectedLeadership(selectedLeadership - Leadership);
		} else {
			setSelectedCrew([...selectedCrew, id]);
			setSelectedLeadership(selectedLeadership + Leadership);
		}
		console.log("the id " + id);
	};

	//console.log(selectedPeople);
	console.log("Leadership:" + selectedLeadership);
	console.log("Selected Crew:" + selectedCrew);
	console.log("crewmemberindex" + crewMemberIndex);

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
						<CrewMembers
							selectedPeople={selectedPeople}
							onChangeSelectedPerson={onChangeSelectedPerson}
						/>{" "}
					</div>
				</Col>
			</Row>
			<br />
			<Row>
				<Button
					variant="light"
					type="button"
					className="startBtn "
					onClick={handleShow}
				>
					View Mission Status!
				</Button>

				<Modal show={show} onHide={handleClose} centered>
					<Modal.Header closeButton>
						<Modal.Title>
							<h1>Mission - Success </h1>
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<h3>The Planet has thrived !</h3>
						<h3>A good Leader guided them to success !</h3>
						<h3>The And the Scloopies walked on stilts !</h3>
					</Modal.Body>
					<Modal.Footer>
						<NavLink to="/mission">
							<Button
								variant="primary"
								className="startBtn "
								onClick={handleClose}
							>
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
