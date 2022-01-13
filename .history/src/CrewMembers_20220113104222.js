import React, { useEffect, useState } from "react";

export default function CrewMembers() {
  const [data, getData] = useState([]);

  const API = "https://space-crew.herokuapp.com/crewmembers";

  const fetchData = () => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        getData(res);
      });
  };

  useEffect(() => {
    fetchData();
    getData(
      data.map((post) => {
        return {
          select: false,
          id: post.id,
        };
      })
    );
  }, []);

  return (
    <div className="container mt-5">
      <div className="posts  scrollbar scrollbar-success  ">
        {data.map((post) => 
           (
            <div
              key={post.id}
              className="decoration force-overflow overflow-auto m-3 "
            >
              <div className="d-flex text-center flex-row flex-wrap justify-content-between">
                <h4 className="p-3 fw-bold ">{post.Name} </h4>
                <p className="p-1">
                  Origin <br /> {post.Origin}{" "}
                </p>
                <p className="p-1">
                  Leadership <br /> {post.Leadership}{" "}
                </p>
                <p className="p-1">
                  Mining <br /> {post.Mining}{" "}
                </p>
                <p className="p-1">
                  Farming <br /> {post.Farming}{" "}
                </p>
                <p className="p-1">
                  Building <br /> {post.Building}{" "}
                </p>
                <p className="p-1">
                  Combat <br /> {post.Combat}{" "}
                </p>
                <p className="p-1">
                  Science <br /> {post.Science}{" "}
                </p>
                <p className="p-1">
                  Fertility <br /> {post.Fertility}{" "}
                </p>
                <p>
                  {" "}
                  <input
                    style={{ backgroundColor: "green" }}
                    type="checkbox"
                    className="checkMark bg-success"
                    checked={post.select}
                    onChange={(event) => {
                      let checked = event.target.checked;
                      getData(
                        data.map((data) => {
                          if (post.id === data.id) {
                            data.select = checked;
                          }
                          return data;
                        })
                      );
                    }}
                  />
                </p>
              </div>
            </div>
          );
        )}
      </div>
      <br />
    </div>
  );
}
