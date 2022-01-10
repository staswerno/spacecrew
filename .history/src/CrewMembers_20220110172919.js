import React from "react";
import Data from "./Data/crewmembers.json";

export default function CrewMembers() {
  return (
    <div>
      <h1>Select 10 Crew Members for your planet</h1>
      <div className="posts">{Data.map()}</div>
    </div>
  );
}
