import { useParams } from 'react-router-dom';
import { useGetSenatorQuery } from './senatorsSlice'; // Updated import
import UpdateSenator from './UpdateSenator'; // Updated import

export default function SenatorDetails() { // Updated component name
  const { id } = useParams();
  const { data: senator, isLoading } = useGetSenatorQuery(id); // Updated hook and variable

  return isLoading ? (
    <p>Loading archives...</p>
  ) : (
    <>
      <main>
        <img src={senator.imageUrl} alt="Senator" /> {/* Updated variable and added alt attribute */}
        <h1>First Name: {senator.firstName}</h1> {/* Updated variable */}
        <h1>Last Name: {senator.lastName}</h1> {/* Updated variable */}
        <h2>Email: {senator.email}</h2> {/* Updated variable */}
        <h3>GPA: {senator.gpa}</h3> {/* Updated variable */}
        <div className='updateForm'><UpdateSenator senatorId={id} /></div> {/* Updated variable */}
      </main>
    </>
  );
}
