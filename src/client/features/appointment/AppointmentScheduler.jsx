import React, { useState, useEffect } from "react";
import { useCreateAppointmentMutation } from "./appointmentSlice";
import { useDispatch } from "react-redux";


import "./appointment-scheduler.less";

const AppointmentScheduler = () => {
  const [createAppointment, { isLoading }] = useCreateAppointmentMutation();
  const dispatch = useDispatch();


  const generateTimeSlots = (startHour, endHour, increment) => {
    const timeSlots = [];
    for (let hour = startHour; hour <= endHour; hour++) {
      for (let minute = 0; minute < 60; minute += increment) {
        const formattedHour = hour.toString().padStart(2, "0");
        const formattedMinute = minute.toString().padStart(2, "0");
        const timeSlot = `${formattedHour}:${formattedMinute}`;
        timeSlots.push(timeSlot);
      }
    }
    return timeSlots;
  };

  const isHoliday = (date) => {
    const holidays = [/* Add holiday dates here */];
    const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;

    return holidays.includes(formattedDate);
  };

  const timeSlots = generateTimeSlots(8, 18, 15);

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    if (notification) {
      const timeoutId = setTimeout(() => {
        setNotification(null);
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [notification]);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeSlotChange = (e) => {
    setSelectedTimeSlot(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const scheduleAppointment = async () => {
    const conflict = appointments && appointments.some(
      (appointment) =>
        appointment.date === selectedDate && appointment.timeSlot === selectedTimeSlot
    );

    if (conflict) {
      setNotification("Time slot is already booked. Please choose another time.");
      return;
    }


    if (selectedDate && selectedTimeSlot && email && phoneNumber) {
      try {
        const newAppointment = { date: selectedDate, timeSlot: selectedTimeSlot, email, phoneNumber };
        const result = await createAppointment(newAppointment).unwrap();

        dispatch(addAppointment(newAppointment));

        setNotification("Appointment scheduled successfully!");

        setSelectedDate("");
        setSelectedTimeSlot("");
        setEmail("");
        setPhoneNumber("");
      } catch (error) {
        console.error('Error scheduling appointment:', error);
        setNotification("Error scheduling appointment. Please try again.");
      }
    } else {
      setNotification("Please fill in all required fields before scheduling.");
    }
  };

  return (
    <div className="appointment-scheduler">
      <h1>Appointment Scheduler</h1>
      {notification && <div className="notification">{notification}</div>}
      <div>
        <label>Select Date:</label>
        <input type="date" onChange={handleDateChange} value={selectedDate} />
      </div>
      <div>
        <label>Select Time Slot:</label>
        <select onChange={handleTimeSlotChange} value={selectedTimeSlot}>
          <option value="">Select Time Slot</option>
          {timeSlots.map((slot) => (
            <option key={slot} value={slot}>
              {slot}
            </option>
          ))}
        </select>
      </div>
      {selectedDate && selectedTimeSlot && (
        <>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={handleEmailChange} />
          </div>
          <div>
            <label>Phone Number:</label>
            <input type="tel" value={phoneNumber} onChange={handlePhoneNumberChange} />
          </div>
          <button onClick={scheduleAppointment}>Schedule Appointment</button>
        </>
      )}
    </div>
  );
};

export default AppointmentScheduler;
