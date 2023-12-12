import React from "react";
import { useGetSenatorsQuery } from "./senatorSlice";

import { Link } from "react-router-dom";
import "./Senators.less"

export default function Senators() {
  const { data, isLoading } = useGetSenatorsQuery();

  if (isLoading) {
    return <p>Loading senators...</p>;
  }

  return (
    <>
      <h1>Our Current Staff</h1>
      <div className="image-grid">
        {data?.map((senator) => (
          <Link to={`/senators/${senator.id}`} key={senator.id}>
            <div className="image-container">
              <img
                src={senator.imageUrl}
                alt={senator.lastName}
                className="senator-image"
                style= {{ height: "200px", width: "200px" }}
              />
              <div className="overlay">
                <h2>{senator.firstName} {senator.lastName}</h2>
                <h1>{senator.major}</h1>
               
              </div>
            </div>
          </Link>
        ))}
      </div>

    </>
  );
}
