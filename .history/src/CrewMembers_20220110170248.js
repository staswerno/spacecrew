import React from "react";
import CrewMembersData from "../../Data/crewmembers.json";

export default function CrewMembers() {
  const loadData = [...CrewMembersData];
  return (
    <div>
      <h1>Add crew members</h1>
      <div className="post">
        {loadData.map((post) => {
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
