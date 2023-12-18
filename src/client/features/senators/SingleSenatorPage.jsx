import React from "react";
import { useParams } from "react-router-dom";
import { useGetSenatorQuery } from "./senatorSlice";
import AppointmentScheduler from "../appointment/AppointmentScheduler";
// import CreateAppointment from "../appointment/createappointment";
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
       <div className="AppointmentScheduler"></div><AppointmentScheduler senator={senator} />
        {/* <CreateAppointment senator={senator} /> */}
      </main>
    </>
  );
}


