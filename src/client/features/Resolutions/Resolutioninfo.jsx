import React from "react";
import { useParams } from "react-router-dom";
import { useGetResolutionQuery } from "./resolutionSlice"; 

export default function ResolutionDetails() {
  const { id } = useParams();
  const { data: resolution, isLoading } = useGetResolutionQuery(id);

  return isLoading ? (
    <p>Loading archives...</p>
  ) : (
    <>
      <main>
        <h1>Resolution Name: {resolution.ResName}</h1>
        <h1>Submitted By: {resolution.email}</h1>
      </main>
    </>
  );
}
