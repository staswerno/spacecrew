import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";
import Bairkan from "./../src/Data/Planets/Bairkan.png";
import planets from "./Data/Planets/planets.json";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Planets() {
  return (
    <div className="planetsCaro">
      <Carousel>
        {planets.map((planet) => (
          <Carousel.Item>
            <img
              className="testimonialImages d-block w-100"
              src={Bairkan}
              alt="Bairkan"
            />
            <Carousel.Caption>
              <h5>Planet : {planet.name}</h5>
              <br />
              <Row>
                <Col>
                  <h6>Solar System : {planet.Solarsystem}</h6>
                  <h6>Location X : {planet.Locationx}</h6>
                  <h6>Location Y: {planet.Locationx}</h6>
                  <h6>Location Z: {planet.Locationx}</h6>
                  <h6>Vegetation: {planet.Vegetation}</h6>
                </Col>
                <Col>
                  <h6>Resources: {planet.HighValueResources}</h6>
                  <h6>Alien-Life: {planet.AlienLife}</h6>
                  <h6>Climatehostility: {planet.Climatehostility}</h6>
                  <h6>Suitability: {planet.Suitability}</h6>
                  <h6>SuitabilityControl: {planet.SuitabilityControl}</h6>
                </Col>
              </Row>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Planets;
