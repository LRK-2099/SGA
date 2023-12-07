import React from "react";
import { useParams } from "react-router-dom";
import { useGetSenatorQuery } from "./senatorSlice";
import AppointmentScheduler from "./AppointmentScheduler";

 export default function SenatorDetails(){
  const { id } = useParams();
  const { data: senator, isLoading } = useGetSenatorQuery(id);

  return isLoading ? (
    <p>Loading archives...</p>
  ) : (
    <>
      <main>
        <img src={senator.imageUrl} alt="Senator" />
        <h1>First Name: {senator.firstName}</h1>
        <h1>Last Name: {senator.lastName}</h1>
        <h2>Email: {senator.email}</h2>
        <h3>Major: {senator.major}</h3>
        <AppointmentScheduler senator={senator} />
      </main>
    </>
  );
}


