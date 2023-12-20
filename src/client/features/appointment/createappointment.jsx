import { useState } from "react";
import { useCreateAppointmentMutation } from "./appointmentSlice";

//Form for creating a new appointment
export default function CreateAppointment() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [createAppointment] = useCreateAppointmentMutation();

  const create = (event) => {
    event.preventDefault();
    createAppointment({ date, time, email, phoneNumber });
  };

  return (
    <>
      <form onSubmit={create}>
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
          Time:   
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
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

        <button>Add Appointment</button>
      </form>
    </>
  );
}