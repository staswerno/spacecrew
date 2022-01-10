import React from "react";
import { Card } from "react-bootstrap";
import Data from "./Data/crewmembers.json";

export default function CrewMembers() {
  return (
    <div className="container">
      <div className="posts  scrollbar scrollbar-success p-5">
        {Data.map((post) => {
          return (
            <div
              key={post.id}
              className="decoration force-overflow overflow-auto m-3 "
            >
              <div className="d-flex flex-lg-row">
                <h4 className="p-4">{post.Name} </h4>
                <p className="p-3">
                  Science <br /> {post.Science}{" "}
                </p>
                <p>Mining {post.Mining} </p>
                <p>Farming {post.Farming} </p>
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
