import { useState } from "react";
import { useCreateResolutionMutation } from "./resolutionSlice";

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
       Funding request:
        <input
          type="text"
          value={resname}
          onChange={(e) => setResName(e.target.value)}
          required
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>

      <button>Add Resolution</button>
    </form>
  );
}
