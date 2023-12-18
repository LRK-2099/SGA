import React, { useEffect, useState } from 'react';
import { useGetAppointmentsQuery } from './appointmentSlice';
import './Appointments.less';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../auth/authSlice'; // adjust the path as needed
import { useDeleteAppointmentMutation } from './appointmentSlice';
import AppointmentScheduler from './AppointmentScheduler';


const Appointments = () => {
  const { data, isLoading, isError } = useGetAppointmentsQuery();
  const [deleteAppointment] = useDeleteAppointmentMutation();
  const isAuthenticated = useSelector(selectIsAuthenticated);

  useEffect(() => {
    // No need to keep a separate state for isLoggedIn, y
    //you can directly use isAuthenticated
  }, [isAuthenticated]);

  const handleDelete = async (id) => {
    try {
      await deleteAppointment(id).unwrap();
      // refresh the appointments list after deleting
    } catch (error) {
      console.error('Failed to delete the appointment: ', error);
    }
  };

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
    <h1 style={{ color: '#4B4E6D', fontSize: '24px' }}>Appointments</h1>
    <ul style={{ listStyleType: 'none', padding: '0' }}>
      {data.map((appointment) => (
        <li key={appointment.id} style={{ backgroundColor: '#F0F2F5', margin: '10px 0', padding: '20px', borderRadius: '8px', border: '1px solid #DADDE1' }}>
          <div style={{ backgroundColor: '#E4E6EB', padding: '10px', borderRadius: '8px', margin: '10px 0' }}>Date: {appointment.date}</div>
          <div style={{ backgroundColor: '#E4E6EB', padding: '10px', borderRadius: '8px', margin: '10px 0' }}>Time Slot: {appointment.timeSlot}</div>
          <div style={{ backgroundColor: '#E4E6EB', padding: '10px', borderRadius: '8px', margin: '10px 0' }}>Email: {appointment.email}</div>
          <button 
            onClick={() => handleDelete(appointment.id)} 
            style={{
              color: 'white', 
              backgroundColor: 'red', 
              border: 'none', 
              borderRadius: '50%', 
              width: '20px', 
              height: '20px', 
              textAlign: 'center', 
              cursor: 'pointer', 
              fontSize: '12px', 
              lineHeight: '20px', 
              padding: '0'
            }}
          >
            X
          </button>
          <h2>cant make it that day </h2>
          <AppointmentScheduler />
        </li>
      ))}
    </ul>
  </main>
);
};

export default Appointments;