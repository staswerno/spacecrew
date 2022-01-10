import React from "react";
import CrewMembersData from "./../Data/crewmembers.json";

export default function CrewMembers() {
  return (
    <div>
      <h1>Add crew members</h1>
      <div className="post">
        {CrewMembersData.map((post) => {
          return (
            <div>
              <h1>{post.name}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
