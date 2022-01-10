import React from "react";
import { Card } from "react-bootstrap";
import Data from "./Data/crewmembers.json";

export default function CrewMembers() {
  return (
    <div className="container">
      <Card className="posts">
        {Data.map((post) => {
          return (
            <div key={post.id} className="decoration">
              <div
                data-bs-spy="scroll"
                data-bs-offset="0"
                class="scrollspy-example"
                tabindex="10"
              >
                <h4>{post.Name} </h4>
                <p>{post.Science} </p>
              </div>
              <h3></h3>
              <p></p>
            </div>
          );
        })}
      </Card>
    </div>
  );
}
