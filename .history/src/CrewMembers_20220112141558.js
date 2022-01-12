import React from "react";
import { Card } from "react-bootstrap";
import Data from "./Data/crewmembers.json";

export default function CrewMembers() {
  return (
    <div className="container mt-5">
      <div className="posts  scrollbar scrollbar-success  ">
        {Data.map((post) => {
          return (
            <div
              key={post.id}
              className="decoration force-overflow overflow-auto m-3 "
            >
              <div className="d-flex flex-row justify-content-between">
                <h4 className="p-4">{post.Name} </h4>
                <p className="p-3">
                  Origin <br /> {post.Origin}{" "}
                </p>
                <p className="p-3">
                  Leadership <br /> {post.Leadership}{" "}
                </p>
                <p className="p-3">
                  Mining <br /> {post.Mining}{" "}
                </p>
                <p className="p-3">
                  Farming <br /> {post.Farming}{" "}
                </p>
                <p className="p-3">
                  Mining <br /> {post.Mining}{" "}
                </p>
                <p className="p-3">
                  Farming <br /> {post.Farming}{" "}
                </p>
                <p>
                  {" "}
                  <input
                    style={{ backgroundColor: "green" }}
                    type="checkbox"
                    class="checkMark bg-success"
                  />
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
