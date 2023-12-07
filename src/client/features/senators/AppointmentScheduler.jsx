import React, { useState } from "react";

const senators = [
  { id: 1, name: "Mohamed Souhail", position: "Athletic Senator" },
  { id: 2, name: "Ashley Wrobeh", position: "Health and Wellness Senator" },
  // Add more senators as needed
];

const AppointmentScheduler = () => {
  const [selectedSenator, setSelectedSenator] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  const handleSenatorChange = (senatorId) => {
    setSelectedSenator(senatorId);
    // Reset the selected time slot when the senator changes
    setSelectedTimeSlot(null);
  };

  const handleTimeSlotChange = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
  };

  const scheduleAppointment = () => {
    // Implement logic to handle appointment scheduling
    if (selectedSenator && selectedTimeSlot) {
      console.log(`Appointment scheduled with ${selectedSenator} at ${selectedTimeSlot}`);
      // Add your logic here to handle the appointment scheduling
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
          {/* Replace the following with your own time slot logic */}
          <select onChange={(e) => handleTimeSlotChange(e.target.value)}>
            <option value="">Select Time Slot</option>
            <option value="10:00 AM">10:00 AM</option>
            <option value="2:00 PM">2:00 PM</option>
            <option value="4:00 PM">4:00 PM</option>
            {/* Add more time slots as needed */}
          </select>
        </div>
      )}
      <button onClick={scheduleAppointment}>Schedule Appointment</button>
    </div>
  );
};

export default AppointmentScheduler;
