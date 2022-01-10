import React from "react";
import { Card } from "react-bootstrap";
import crewMembersData from "./Data/crewmembers.json";

const CrewMembers = crewMembersData.map((data) => {
    return(
        <Card key={data.id}>
            <Card.Body>
                <Card.Title>{data.neme} </Card.Title>
                <Card.Text>{data.} </Card.Text>
            </Card.Body>
        </Card>
    )
})