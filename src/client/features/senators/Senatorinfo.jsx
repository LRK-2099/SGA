import { Link } from "react-router-dom";
import { useDeleteSenatorMutation } from "./senatorSlice.js"; // Updated import
import UpdateSenator from "./UpdateSenators"; // Updated import

// This should display all the details of a single senator
export default function SenatorInfo({ senator }) {
  // Updated component name

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
          <img src={senator.imageUrl} alt="Senator" />{" "}
          {/* Added alt attribute */}
        </div>
        <section className="senator-info">
          {" "}
          <h2>{senator.firstName}</h2>
          <h2>{senator.lastName}</h2> 
          <h3>Email: {senator.email}</h3> 
          <h4>Major: {senator.major}</h4> 
          <p>School: Galaxy's Edge</p>
          <Link to={`/Senators/${senator.id}`}>More Info</Link>{" "}
         
          <button onClick={onDelete} aria-label="delete">
            EXPELL
          </button>
        </section>
      </li>
    </>
  );
}
