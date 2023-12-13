import React from "react";
import { useParams } from "react-router-dom";
import { useGetSenatorQuery } from "./senatorSlice";
import AppointmentScheduler from "./AppointmentScheduler";
import "./appointment-scheduler.less";
import "./SenatorDetails.less"

 export default function SenatorDetails(){
  const { id } = useParams();
  const { data: senator, isLoading } = useGetSenatorQuery(id);

  return isLoading ? (
    <p>Loading archives...</p>
  ) : (
    <>
      <main>
        <img src={senator.imageUrl} alt="Senator" />

        <h1>{senator.firstName} {senator.lastName}</h1>
        <h2>{senator.email}</h2>
        <h3>{senator.major}</h3>
        <AppointmentScheduler senator={senator} />
      </main>
    </>
  );
}


