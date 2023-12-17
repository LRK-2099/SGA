import React, { createContext, useState } from 'react';

// Create the context
// This is the context that will be used to share the appointments data between components
export const AppointmentContext = createContext();

// Create a provider component
export const AppointmentProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);

  return (
    <AppointmentContext.Provider value={{ appointments, setAppointments }}>
      {children}
    </AppointmentContext.Provider>
  );
};