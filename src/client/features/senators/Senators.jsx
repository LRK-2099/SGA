import { useGetSenatorsQuery } from "./senatorSlice"
import SenatorInfo from "./Senatorinfo"; 
import CreateSenator from "./CreateSenator";

export default function Senators() {
  const { data, isLoading, isError } = useGetSenatorsQuery(); // Fixed the typo in the function name
  console.log("Senator array is here", data);

if (isLoading) {
  return <p>Loading senators...</p>;
}
//added loading 

if (isError) {
  return <p>error fetching senators</p>;
}

  return (
    <>
      <h1>our lvely senators </h1>

      <ul>
        {data?.map((senator) => (
          <SenatorInfo key={senator.id} senator={senator} /> // Fixed the key assignment and component name
        ))}
      </ul>
      <CreateSenator />
    </>
  );
}
