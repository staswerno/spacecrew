import React from "react";
import CrewMembers from "./CrewMembers";
// import {NavLink} from 'react-router-dom';

function Select() {
  return (
    <div>
      <h5>Select 10 Crew members for your planet</h5>
      <div className="d-flex flex-lg-row">
        <div>
          <h1> jai's planet carousel </h1>
        </div>
        <div>
          <CrewMembers />
        </div>
      </div>
    </div>
  );
}

export default Select;
