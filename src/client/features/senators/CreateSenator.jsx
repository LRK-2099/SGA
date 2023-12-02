import { useState } from "react";
import { useCreateSenatorMutation } from "./senatorsSlice"; // Updated import

// Form for creating a new senator
export default function CreateSenator() { // Updated component name
  const [firstName, setFirstName] = useState(""); // Updated state variable name
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [gpa, setGpa] = useState("");

  const [createSenator] = useCreateSenatorMutation(); // Updated hook

  const create = (event) => {
    event.preventDefault();
    createSenator({ firstName, lastName, email, imageUrl, gpa }); // Updated variable
  };

  return (
    <>
      <form onSubmit={create}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)} // Updated function
            required
          />
        </label>
        <br />
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
        <br />
        <br />

        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <br />

        <label>
          imageUrl:
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </label>
        <br />
        <br />

        <label>
          GPA:
          <input
            type="number"
            value={gpa}
            onChange={(e) => setGpa(e.target.value)}
            required
          />
        </label>
        <br />
        <br />

        <button>Add Senator</button>
      </form>
    </>
  );
}
