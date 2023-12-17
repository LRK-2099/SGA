import React, { useEffect } from 'react';
import { useGetAppointmentsQuery } from './appointmentSlice';


const Appointments = () => {
  const { data, isLoading, isError } = useGetAppointmentsQuery();

  useEffect(() => {
    // This function will run whenever `data` changes
  }, [data]);

  if (isLoading) {
    return <p>Loading appointments...</p>;
  }

  if (isError || !data) {
    return <p>No Data provided</p>;
  }

  if (!data.length) {
    return <p>Appointments not defined</p>;
  }

  return (
    <main>
      <h1>Appointments</h1>
      <ul>
        {data.map((appointment) => (
          <li key={appointment.id}>
            Date: {appointment.date}, Time Slot: {appointment.timeSlot}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Appointments;
