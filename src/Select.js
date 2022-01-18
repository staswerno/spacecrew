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
import Bairkan from "./../src/Data/Planets/Bairkan.png";
import Faihu from "./../src/Data/Planets/Faihu.png";
import Horst from "./../src/Data/Planets/Horst.png";
import Jer from "./../src/Data/Planets/Jer.png";
import Kusma from "./../src/Data/Planets/Kusma.png";
import Lagus from "./../src/Data/Planets/Lagus.png";
import Manna from "./../src/Data/Planets/Manna.png";
import Raida from "./../src/Data/Planets/Raida.png";
import Scloop from "./../src/Data/Planets/Scloop.png";
import Urus from "./../src/Data/Planets/Urus.png";
import Carousel from "react-bootstrap/Carousel";

const name = {
	Bairkan,
	Jer,
	Scloop,
	Faihu,
	Horst,
	Kusma,
	Lagus,
	Manna,
	Raida,
	Urus,
};

function Select() {
	const [show, setShow] = useState(false);
	const [selectedPeople, setSelectedPeople] = useState([]);
	const [selectedCrew, setSelectedCrew] = useState([]);
	const [selectedLeadership, setSelectedLeadership] = useState(0);
	const [crewMemberIndex, setCrewMemberIndex] = useState();
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	// variables used for planets
	const [planets, setPlanets] = useState([]);
	const [isLoading, setIsLoading] = useState([true]);
	//info about planet selected by player
	const [selectedPlanet, setSelectedPlanet] = useState({});
	const [iShow, setIShow] = useState(false);

	//fetching planets data from api
	useEffect(() => {
		fetch("https://space-crew.herokuapp.com/planets")
			.then((res) => res.json())
			.then((result) => {
				setIsLoading(false);
				setPlanets(result);
				// console.log(result);
			});
	}, []);

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
	console.log("Selected Crew Length:" + selectedCrew.length);

	const crewAlert = () => {
		if (selectedCrew.length > 10) {
			alert("Your crew is too big! Please select only 10 crew members");
		}
	};

	crewAlert();

	return (
		<Container className="selectContainer">
			<Row className="m-3 ">
				<h3>Select 10 Crew members and a Planet to colonize</h3>
			</Row>
			<Row>
				<Col>
					<div>
						{" "}
						<div
							className=" selection "
							style={{ visibility: iShow ? "visible" : "hidden" }}
						>
							<h4>You selected Planet {selectedPlanet.Planet}</h4>
						</div>
						<div className="planetsCaro mt-3">
							{isLoading ? (
								<div>is loading...</div>
							) : (
								<Carousel interval={null}>
									{planets.map((planet, index) => (
										<Carousel.Item key={index}>
											<Row style={{ cursor: "pointer" }}>
												<img
													className="testimonialImages d-block w-100"
													src={name[planet.Planet]}
													alt="Bairkan"
													onClick={() => {
														setSelectedPlanet(planet);
														setIShow(true);
													}}
												/>
											</Row>
											<Row className="m-5  justify-content-md-center planetInfo">
												<h4>Planet {planet.Planet}</h4>
												<br />
												<Row>
													<h6>Solar System : {planet.SolarSystem}</h6>
													<h6>Location X : {planet.LocationX}</h6>
													<h6>Location Y: {planet.LocationY}</h6>
													<h6>Location Z: {planet.LocationZ}</h6>
													<h6>Vegetation: {planet.Vegetation}</h6>
													<h6>Resources: {planet.Resources}</h6>
													<h6>Alien-Life: {planet.AlienLife}</h6>
													<h6>Climatehostility: {planet.ClimateHostility}</h6>
													<h6>Suitability: {planet.Suitability}</h6>
													<h6>
														SuitabilityControl: {planet.SuitabilityControl}
													</h6>
												</Row>
											</Row>
										</Carousel.Item>
									))}
								</Carousel>
							)}
						</div>{" "}
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
					onClick={selectedCrew.length > 10 ? crewAlert : handleShow}
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
