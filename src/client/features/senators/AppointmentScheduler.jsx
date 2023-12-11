import React, { useState } from "react";

const senators = [
  { id: 1, name: "Mohamed Souhail", position: "Athletic Senator" },
  { id: 2, name: "Ashley Wrobeh", position: "Health and Wellness Senator" },
  { id: 3, name: "Alicia Crimmins", position: "Resident Halls Senator" },
  { id: 4, name: "Lorieta Ellis", position: "Virtual Campus Senator" },
  { id: 5, name: "Giomar Garcia Maldonado", position: "Clubs and Organization Senator" },
  { id: 6, name: "Daniel Kalumbwe", position: "Clubs and Organizations Senator" },

];

const AppointmentScheduler = () => {
  const [selectedSenator, setSelectedSenator] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  const handleSenatorChange = (senatorId) => {
    setSelectedSenator(senatorId);
  
    setSelectedTimeSlot(null);
  };

  const handleTimeSlotChange = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
  };

  const scheduleAppointment = async () => {
    // Implement logic to handle appointment scheduling
    if (selectedSenator && selectedTimeSlot) {
      try {
        const response = await fetch('http://localhost:3001/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ senator: selectedSenator, timeSlot: selectedTimeSlot }),
        });

        if (response.ok) {
          console.log('Email sent successfully');
        } else {
          console.error('Failed to send email');
        }
      } catch (error) {
        console.error('Error sending email:', error);
      }
    } else {
      console.error("Please select a senator and a time slot before scheduling.");
    }
  };

  return (
    <div>
      <h1>Appointment Scheduler</h1>
      <div>
        <label>Select Senator:</label>
        <select onChange={(e) => handleSenatorChange(e.target.value)}>
          <option value="">Select Senator</option>
          {senators.map((senator) => (
            <option key={senator.id} value={senator.id}>
              {senator.name} - {senator.position}
            </option>
          ))}
        </select>
      </div>
      {selectedSenator && (
        <div>
          <label>Select Time Slot:</label>
  
          <select onChange={(e) => handleTimeSlotChange(e.target.value)}>
            <option value="">Select Time Slot</option>
            <option value="10:00 AM">10:00 AM</option>
            <option value="2:00 PM">2:00 PM</option>
            <option value="4:00 PM">4:00 PM</option>
     
          </select>
        </div>
      )}
      <button onClick={scheduleAppointment}>Schedule Appointment</button>
    </div>
  );
};

export default AppointmentScheduler;