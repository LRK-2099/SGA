// UpdateSenator.jsx

import React, { useState } from 'react';
import { useUpdateSenatorMutation } from './senatorSlice.js'; // Adjust the import path

export default function UpdateSenator({ senatorId }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [major, setMajor] = useState("");

  const [updateSenator] = useUpdateSenatorMutation();

  const update = (event) => {
    event.preventDefault();

    updateSenator({ id: senatorId, firstName, lastName, email, imageUrl, major });
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
          Major:
          <input
            type="text"
            value={major}
            onChange={(e) => setMajor(e.target.value)}
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
