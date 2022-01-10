import React from "react";
import Data from "./Data/crewmembers.json";

export default function CrewMembers() {
  return (
    <div className="container">
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
                <h4>{post.Name} </h4>
                <p>{post.Science} </p>
              </div>
              <h3></h3>
              <p></p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
