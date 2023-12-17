import { useState } from "react";
import { useCreateResolutionMutation } from "./resolutionSlice";

// Form for creating a new resolution
export default function CreateResolution() {
  const [ResName, setResName] = useState("");
  const [email, setEmail] = useState("");
  const [createResolution] = useCreateResolutionMutation();

  const create = (event) => {
    event.preventDefault();
    createResolution({ ResName, email,});
  };

  return (
    <form onSubmit={create}>
      <label>
        Create a Resolution Funding request:
        <input
          type="text"
          value={ResName}
          onChange={(e) => setResName(e.target.value)}
          required
        />
      </label>
      <label>
        Email associated with the Orginaztion:
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
