import React from "react";
import crewmembers from "./Data/crewmembers.json";

export default function CrewMembers() {
  return (
    <div>
      <h1>Add crew members</h1>
      {crewmembers}
    </div>
  );
}
