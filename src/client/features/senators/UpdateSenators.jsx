import { useState } from 'react';
import { useUpdateSenatorMutation } from './senatorsSlice'; // Updated import

export default function UpdateSenator({ senatorId }) { // Updated component name
  const [firstName, setFirstName] = useState(""); // Updated state variable name
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [gpa, setGpa] = useState("");

  const [updateSenator] = useUpdateSenatorMutation(); // Updated hook

  const update = (event) => {
    event.preventDefault();

    updateSenator({ id: senatorId, firstName, lastName, email, imageUrl, gpa }); // Updated variable
  };

  return (
    <>
      <form onSubmit={update}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
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

        <button>Update Senator Info</button>
      </form>
    </>
  );
}
