// import { Link } from "react-router-dom";
import React from "react";
import { useGetResolutionsQuery } from "./resolutionSlice";
 import CreateResolution from "./CreateResolution";
// creating a resoultion is not a thing yet so we will comment it out

export default function Resolutions() {
  const { data, isLoading, error } = useGetResolutionsQuery();

  if (isLoading) {
    return <p>Loading resolutions...</p>;
  }

  if (error) {
    return <p>Something went wrong...</p>;
  }

  if (!data) {
    return <p>Something went wrong...</p>;
  }


  return (
    <>
      <h1>Current Resolutions</h1>
      <CreateResolution />
      <ul>
        <h2>Resolution List</h2>
        {data.map((resolutions) => (
          <div key={resolutions.id}>
            <h3>{resolutions.resname}</h3>
            <p>{resolutions.email}</p>
            <p>{resolutions.description}</p>
            <p>{resolutions.date}</p>
          </div>
        ))}
      </ul>
    </>
  );
}
