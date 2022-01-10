import React from "react";
import Data from "./Data/crewmembers.json";

export default function CrewMembers() {
  return (
    <div>
      <h1>Select 10 Crew Members for your planet</h1>
      <div className="posts">
        {Data.map((post) => {
          return (
            <div key={post.id} className="decoration">
              <div
                data-bs-spy="scroll"
                data-bs-target="#navbar-example2"
                data-bs-offset="0"
                class="scrollspy-example"
                tabindex="0"
              >
                <h4 id="scrollspyHeading1">First heading</h4>
                <p>...</p>
                <h4 id="scrollspyHeading2">Second heading</h4>
                <p>...</p>
                <h4 id="scrollspyHeading3">Third heading</h4>
                <p>...</p>
                <h4 id="scrollspyHeading4">Fourth heading</h4>
                <p>...</p>
                <h4 id="scrollspyHeading5">Fifth heading</h4>
                <p>...</p>
              </div>
              <h3>{post.Name} </h3>
              <p>{post.Science} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
