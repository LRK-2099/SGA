import { useGetSenatorsQuery } from "./senatorSlice"; // Fixed the import statement
import SenatorInfo from "./SenatorInfo"; // Corrected the component name
import CreateSenator from "./CreateSenator";

export default function Senator() {
  const { data } = useGetSenatorsQuery(); // Fixed the typo in the function name
  console.log("Senator array is here", data);

  return (
    <>
      <h1>This is where the list of senators should render</h1>

      <ul>
        {data?.map((senator) => (
          <SenatorInfo key={senator.id} senator={senator} /> // Fixed the key assignment and component name
        ))}
      </ul>

      <CreateSenator />
    </>
  );
}
