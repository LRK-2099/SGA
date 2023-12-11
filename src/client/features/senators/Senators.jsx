import { useGetSenatorsQuery } from "./senatorSlice";

import AppointmentScheduler from "./AppointmentScheduler";
import { Link } from "react-router-dom";

export default function Senators() {
  const { data, isLoading } = useGetSenatorsQuery();
 

  if (isLoading) {
    return <p>Loading senators...</p>;
  }
  //added loading

  return (
    <>
      <h1>Our Current staff </h1>

      <ul>
        <h2>Student Staff List</h2>
        {data?.map((senator) => (
         <>
          <h1>{senator.firstName}</h1>
          //find a way to add position too before to late 
          //maybe change major to postion variable
         <Link to={`/senators/${senator.id}`}>More Info</Link>
         </>
        ))}
      </ul>
      <AppointmentScheduler senator={Senators} />
    </>
  );
}
