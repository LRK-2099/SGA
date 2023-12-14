import React, { useEffect, useState } from 'react';

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);

  // Fetch appointments data from the server
  const fetchAppointments = async () => {
    try {
      const response = await fetch('/api/appointments'); // Assuming this is your API endpoint
      const data = await response.json();
      setAppointments(data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  // Fetch appointments on component mount
  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <div>
      <h1>Appointments</h1>
      <ul>
        {appointments.map((appointment, index) => (
          <li key={index}>
            Date: {appointment.date}, Time Slot: {appointment.timeSlot}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Appointments;
