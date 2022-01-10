import React from "react";
import { Card } from "react-bootstrap";
import crewMembersData from "./Data/crewmembers.json";

const CrewMembers = crewMembersData.map((data) => {
  return (
    <Card key={data.id}>
      <Card.Body>
        <Card.Title>{data.name} </Card.Title>
        <Card.Text>{data.science} </Card.Text>
      </Card.Body>
    </Card>
  );
});
export default CrewMembers;
