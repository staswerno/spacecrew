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
	const [selectedCrew, setSelectedCrew] = useState([]);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	// variables used for planets
	const [planets, setPlanets] = useState([]);
	const [isLoading, setIsLoading] = useState([true]);
	//info about planet selected by player
	const [selectedPlanet, setSelectedPlanet] = useState({});
	const [iShow, setIShow] = useState(false);

	//variables used for game logic
	const [planetPlantLife, setPlanetPlantLife] = useState(); //select.planet.vegetation
	const [planetClimate, setPlanetClimate] = useState();
	const [planetAlienLife, setPlanetAlienLife] = useState();
	const [planetResources, setPlanetResources] = useState();

	const [colonyFarming, setColonyFarming] = useState(0);
	const [colonyMining, setColonyMining] = useState(0);
	const [colonyBuilding, setColonyBuilding] = useState(0);
	const [colonyCombat, setColonyCombat] = useState(0);
	const [colonyScience, setColonyScience] = useState(0);
	const [colonyLeadership, setColonyLeadership] = useState(0);
	const [colonyFertility, setColonyFertility] = useState(0);

	const [hasColonySurvived, setHasColonySurvived] = useState(false);

	const [outPutColonySurvival, setOutPutColonySurvival] = useState();
	const [outPutColonyGovernment, setOutPutColonyGovernment] = useState();
	const [outPutColonyScience, setOutPutColonyScience] = useState();
	const [outPutColonyWealth, setOutPutColonyWealth] = useState();
	const [outPutColonyPopulation, setOutPutColonyPopulation] = useState();

	const [colonySize, setColonysize] = useState(0);

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
		const newCrew = selectedCrew.includes(id)
			? selectedCrew.filter((crewId) => id !== crewId)
			: [...selectedCrew, id];
		setSelectedCrew(newCrew);

		if (selectedCrew.includes(id)) {
			setColonyFarming(colonyFarming - Farming);
			setColonyMining(colonyMining - Mining);
			setColonyBuilding(colonyBuilding - Building);
			setColonyCombat(colonyCombat - Combat);
			setColonyScience(colonyScience - Science);
			setColonyLeadership(colonyLeadership - Leadership);
			setColonyFertility(colonyFertility - Fertility);
			setColonysize(colonySize - 1);
			determineColonySurvival();
			
			//Put stuff on one object
		} else {
			setColonyFarming(colonyFarming + Farming);
			setColonyMining(colonyMining + Mining);
			setColonyBuilding(colonyBuilding + Building);
			setColonyCombat(colonyCombat + Combat);
			setColonyScience(colonyScience + Science);
			setColonyLeadership(colonyLeadership + Leadership);
			setColonyFertility(colonyFertility + Fertility);
			setColonysize(colonySize + 1);
			determineColonySurvival();
			
			
		}
	};

	//console.log(selectedPeople);

	const determineColonySurvival = () => {
		if (colonyFarming + planetPlantLife / 2 < 85) {
			setOutPutColonySurvival(
				"There was not enough food for your colony. The people starved to death."
			);
		} else if (colonyBuilding + colonyMining / 2 < planetClimate) {
			setOutPutColonySurvival(
				"The climate was too hostile for your colony. The hostile weather tore down their shelter and protection and killed everyone on the planet."
			);
		} else if (colonyCombat + colonyScience / 2 < planetAlienLife) {
			setOutPutColonySurvival(
				"Aliens on the planet started a war with the colony. Sadly your colony was defeated and got wiped out from the aliens."
			);
		} else {
			setHasColonySurvived(true);
			setOutPutColonySurvival("Your colony survived!");
			console.log("Farming " + colonyFarming + " Pflanzen " + planetPlantLife);
		}
	};

	const determineColonyWealth = () => {
		if (hasColonySurvived === false) {
			setOutPutColonyWealth(null);
		} else if (colonyMining + planetResources/2 < 55) {
			setOutPutColonyWealth(
				"The people in the colony are very poor, but they get by."
			);
			console.log("Wealth outcome: " + colonyMining + planetResources);
		} else if (colonyMining + planetResources/2 < 75) {
			setOutPutColonyWealth(
				"The people in the colony developed an economy, but it isn't very strong."
			);
		} else if (colonyMining + planetResources/2 < 90) {
			setOutPutColonyWealth(
				"The people in the colony are wealthy and have a strong economy."
			);
		} else {
			setOutPutColonyWealth(
				"Your colonies wealth is thriving and their economy is booming."
			);
			console.log("Wealth outcome: " + colonyMining + planetResources);
		}
	};

	const determineColonyGovernment = () => {
		if (hasColonySurvived === false) {
			setOutPutColonyGovernment(null);
		} else if (colonyLeadership + colonyFertility / 2 < 55) {
			setOutPutColonyGovernment(
				"The society broke apart and the people live in anarchy."
			);
		} else if (colonyLeadership + colonyFertility / 2 < 75) {
			setOutPutColonyGovernment(
				"A tyrann has gained power and dominates the colony."
			);
		} else if (colonyLeadership + colonyFertility / 2 < 90) {
			setOutPutColonyGovernment(
				"The colony has developed a functioning democracy."
			);
		} else {
			setOutPutColonyGovernment(
				"The people have developed a new form of government, we wouldn't even have dared to dream of on earth. They call it the perfectarchy."
			);
		}
	};

	const determineColonyScience = () => {
		if (hasColonySurvived === false) {
			setOutPutColonyScience(null);
		} else if (colonyScience + colonyLeadership / 2 < 55) {
			setOutPutColonyScience(
				"The colony has scientifically fallen back to the middle ages."
			);
		} else if (colonyScience + colonyLeadership / 2 < 75) {
			setOutPutColonyScience(
				"No wisdom past the industrialization survived the first few generations."
			);
		} else if (colonyScience + colonyLeadership / 2 < 90) {
			setOutPutColonyScience(
				"While building up the colony some researchers came up with new brilliant technologies."
			);
		} else {
			setOutPutColonyScience(
				"New scientific breakthroughs have led the colony into a new age. Soon they will send a team back in time to save our beloved earth."
			);
		}
	};

	const determineColonyPopulation = () => {
		if (hasColonySurvived === false) {
			setOutPutColonyPopulation(null);
		} else if (colonyFertility + colonyFarming / 2 < 55) {
			setOutPutColonyPopulation(
				"Due to a rare number of children the colonies size has strongly decreased over time. Only few colonists are left."
			);
		} else if (colonyFertility + colonyFarming / 2 < 75) {
			setOutPutColonyPopulation(
				"The population has barely increased since the start of the colonization."
			);
		} else if (colonyFertility + colonyFarming / 2 < 90) {
			setOutPutColonyPopulation(
				"The population of the colony increased greatly, just as it was planned."
			);
		} else {
			setOutPutColonyPopulation(
				"The population of the colony exploded. Soon they will overpopulate the planet, if they don't expand to another solar system."
			);
		}
	};

	/** 
		const colonyReport = (hasColonySurvived, determineColonySurvival, determineColonyWealth, determineColonyGovernment, determineColonyScience, determineColonyPopulation) => {
		  if (hasColonySurvived = false) {
			return determineColonySurvival
		  } else {
			return  
			determineColonySurvival, <br></br>
			determineColonyGovernment, <br></br>
			determineColonyScience, <br></br>
			determineColonyWealth, <br></br>
			determineColonyPopulation
		  }
		}
		*/

	const onClickPlanet = (planet) => {
		console.log(planet);
		setSelectedPlanet(planet);
		setIShow(true);
		setPlanetPlantLife(planet.Vegetation);
		setPlanetClimate(planet.ClimateHostility);
		setPlanetAlienLife(planet.AlienLife);
		setPlanetResources(planet.Resources);
		

	};

	console.log(selectedPlanet, " from select.js");
	console.log(selectedPlanet._id, " selected id");
	console.log("Leadership:" + colonyLeadership);
	console.log("Selected Crew:" + selectedCrew);

	console.log(hasColonySurvived);

	if (selectedCrew.length > 10) {
		alert("Your crew is too big! Please select only 10 crew members");
	}

	const missionStatusCheck = () => {
		if (selectedCrew.length > 10) {
			alert("Your crew is too big! Please select only 10 crew members");
		} else if (!selectedPlanet._id) {
			alert("Please select a planet to colonize.");
		} else {
			determineColonyWealth();
			
			determineColonyGovernment();
			determineColonyScience();
			determineColonyPopulation();
			handleShow();
		}
	};

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
										<Carousel.Item
											key={index}
											onClick={() => onClickPlanet(planet)}
										>
											<Row style={{ cursor: "pointer" }}>
												<img
													className="testimonialImages d-block w-100"
													src={name[planet.Planet]}
													alt="Bairkan"
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
							selectedCrew={selectedCrew}
							onChangeSelectedPerson={onChangeSelectedPerson}
						/>{" "}
					</div>
				</Col>
			</Row >
				<h3>Colony overview</h3><br />
				<div className="teamStats">
				<div>Leadership: {colonyLeadership}</div> 
				<div>Mining: {colonyMining}</div>
				<div>Farming: {colonyFarming}  </div>
				<div>Building: {colonyBuilding} </div>
				<div>Combat: {colonyCombat} </div>
				<div>Science: {colonyScience} </div>
				<div>Fertility: {colonyFertility} </div>
				<div>Colony size: {colonySize} </div>
				</div>
			<Row>
			</Row>
			<br /> 
			<Row>
				<Button
					variant="light"
					type="button"
					className="startBtn "
					onClick={missionStatusCheck}
				>
					Launch Colony!
				</Button>

				<Modal show={show} onHide={handleClose} centered>
					<Modal.Header closeButton>
						<Modal.Title>
							<h1>Mission - Report </h1>
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<div>
							{outPutColonySurvival} <br />
							{outPutColonyGovernment} <br />
							{outPutColonyScience} <br />
							{outPutColonyWealth} <br />
							{outPutColonyPopulation} <br />
						</div>
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
