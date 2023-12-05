import { useGetSenatorsQuery } from "./senatorSlice"
import SenatorInfo from "./Senatorinfo"; 
import CreateSenator from "./CreateSenator";

export default function Senators() {
  const { data, isLoading,  } = useGetSenatorsQuery();
  console.log("Senator array is here", data);

if (isLoading) {
  return <p>Loading senators...</p>;
}
//added loading 


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
