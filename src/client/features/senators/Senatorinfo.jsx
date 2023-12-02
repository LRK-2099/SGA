import { Link } from 'react-router-dom';
import { useDeleteSenatorMutation } from './senatorsSlice'; // Updated import
import UpdateSenator from './UpdateSenator'; // Updated import

// This should display all the details of a single senator
export default function SenatorInfo({ senator }) { // Updated component name

  // Grabs delete crud method from senatorsSlice
  const [deleteSenator] = useDeleteSenatorMutation(); // Updated hook

  // This should be added to the 'expell' button
  const onDelete = async (event) => {
    event.preventDefault();
    deleteSenator(senator.id); // Updated variable
  };

  return (
    <>
      <li>
        <div>
          <img src={senator.imageUrl} alt="Senator" /> {/* Added alt attribute */}
        </div>
        <section className="senator-info"> {/* Updated class name */}
          <h2>{senator.firstName}</h2> {/* Updated variable */}
          <h2>{senator.lastName}</h2> {/* Updated variable */}
          <h3>Email: {senator.email}</h3> {/* Updated variable */}
          <h4>GPA: {senator.gpa}</h4> {/* Updated variable */}
          <p>School: Galaxy's Edge</p>
          <Link to={`/senators/${senator.id}`}>More Info</Link> {/* Updated variable */}
          <button onClick={onDelete} aria-label="delete">EXPELL</button>
        </section>
      </li>
    </>
  );
}
