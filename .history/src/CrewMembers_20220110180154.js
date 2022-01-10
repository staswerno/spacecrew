import React from "react";
import { Card } from "react-bootstrap";
import Data from "./Data/crewmembers.json";

export default function CrewMembers() {
  return (
    <div className="container scrollbar">
      <Card className="posts  overflow-auto">
        {Data.map((post) => {
          return (
            <div key={post.id} className="decoration p-5">
              <div>
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
