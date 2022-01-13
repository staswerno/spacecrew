import React from "react";
import { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";

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

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Planets() {
  const [planets, setPlanets] = useState([]);
  const [isLoading, setIsLoading] = useState([true]);
  const [select, setSelect] = useState([]);

  useEffect(() => {
    fetch("https://space-crew.herokuapp.com/planets")
      .then((res) => res.json())
      .then((result) => {
        setIsLoading(false);
        setPlanets(result);
        console.log(result);
      });
  }, []);

  return (
    <div className="planetsCaro">
      {isLoading ? (
        <div>is loading...</div>
      ) : (
        <Carousel pause="{true}">
          {planets.map((planet, index) => (
            <Carousel.Item key={index}>
              <Row>
                <img
                  className="testimonialImages d-block w-100"
                  src={Scloop}
                  //  src={` {planet.Planet} `}

                  alt="Bairkan"
                  //  onClick={ setSelect(planet)}
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
                  <h6>SuitabilityControl: {planet.SuitabilityControl}</h6>
                </Row>
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      )}
      {/* { console.log(select)}  */}
    </div>
  );
}

export default Planets;
