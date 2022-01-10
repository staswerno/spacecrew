import React from "react";
import crewMembersData from "./Data/crewmembers.json";

const CrewMembers = crewMembersData.map((data) => {
  return (
    <div key={data.id}>
      <div>
        <h1>{data.name} </h1>
        <h6>{data.science} </h6>
      </div>
    </div>
  );
});
export default CrewMembers;
