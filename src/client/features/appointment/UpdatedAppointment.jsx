import React, { useState } from 'react';
import { useUpdateAppointmentMutation } from './appointmentSlice.js'; // Adjust the import path

export default function UpdateAppointment({ appointmentId }) {
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [updateAppointment] = useUpdateAppointmentMutation();

  const update = (event) => {
    event.preventDefault();

    updateAppointment({ id: appointmentId, date, timeSlot, email, phoneNumber });
  };

  return (
    <>
      <form onSubmit={update}>
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
        <br />
        <br />
        <label>
          Time Slot:
          <select onChange={(e) => setTimeSlot(e.target.value)} value={timeSlot}>
            {/* Include your time slot options here */}
          </select>
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
          Phone Number:
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </label>
        <br />
        <br />
        <button>Update Appointment Info</button>
      </form>
    </>
  );
}
