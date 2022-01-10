import React from "react";
import crewMembersData from "./Data/crewmembers.json";

const CrewMembers = crewMembersData.map((data) => {
    return(
        <Card key={data.id}
    )
})