import { useState } from "react";
import { useCreateResolutionMutation } from "./resolutionSlice";
import "./CreateResolution.less";
// Form for creating a new resolution
export default function CreateResolution() {
  const [resname, setResName] = useState("");
  const [email, setEmail] = useState("");
  const [createResolution] = useCreateResolutionMutation();

  const create = (event) => {
    event.preventDefault();
    createResolution({ resname, email,});
  };

  return (
    <form onSubmit={create}>
      <label>
      Funding request please be as detailed as possible with the following 
      information:
      <br></br>
      1. What is the funding for?
      <br></br>
      2. How much funding is needed?
      <br></br>
      3. When is the funding needed?
      <br></br>
      4. Name of the organization 
      <textarea
        value={resname}
        onChange={(e) => setResName(e.target.value)}
        required
        rows="4" // Set the number of visible text lines
        cols="50" // Set the number of visible characters per line
        style={{ width: '100%' }} // Or use CSS to make the textarea take up the full width of its container
      />
      </label>
      <label>
        Email of presedent of club:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>

      <button>send funding Resolution</button>
    </form>
  );
}
