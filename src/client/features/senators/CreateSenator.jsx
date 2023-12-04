import { useState } from "react";
// import { useCreateSenatorMutation } from "./senatorSlice.js";

// Form for creating a new senator
export default function CreateSenator() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [major, setMajor] = useState("");

  const [createSenator] = useCreateSenatorMutation();

  const create = (event) => {
    event.preventDefault();
    createSenator({ firstName, lastName, email, imageUrl, major });
  };

  return (
    <form onSubmit={create}>
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
        Image URL:
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </label>
      <br />
      <br />
      <label>
        major
        <input
          type="text"
          value={major}
          onChange={(e) => setMajor(e.target.value)}
          required
        />
      </label>
      <br />
      <br />
      <button>Add Senator</button>
    </form>
  );
}
