import { useGetSenatorsQuery } from "./senatorSlice";
import SenatorInfo from "./Senatorinfo";
import CreateSenator from "./CreateSenator";
import { Link } from "react-router-dom";

export default function Senators() {
  const { data, isLoading } = useGetSenatorsQuery();
 

  if (isLoading) {
    return <p>Loading senators...</p>;
  }
  //added loading

  return (
    <>
      <h1>our lovely senators </h1>

      <ul>
        <h2>Senator List</h2>
        {data?.map((senator) => (
          // <SenatorInfo key={senator.id} senator={senator} />
         <>
          <h1>{senator.firstName}</h1>
         <Link to={`/senators/${senator.id}`}>More Info</Link>
         </>
        ))}
      </ul>
      <CreateSenator />
    </>
  );
}
