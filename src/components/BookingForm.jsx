import React, { useState, useEffect } from "react";

const BookingForm = ({
  availableTimes,
  updateTimes,
  initializeTimes,
  submitForm,
}) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState(availableTimes[0]);
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [formIsValid, setFormIsValid] = useState(false);

  const handleDateChange = (event) => {
    const newDate = event.target.value;
    setSelectedDate(newDate);
    updateTimes(new Date(newDate));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      selectedDate,
      selectedTime,
      numberOfGuests,
      occasion,
    };
    submitForm(formData);
  };

  useEffect(() => {
    const isValid =
      selectedDate && selectedTime && numberOfGuests >= 1 && occasion;
    setFormIsValid(isValid);
  }, [selectedDate, selectedTime, numberOfGuests, occasion]);

  useEffect(() => {
    initializeTimes();
  }, [initializeTimes]);

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        aria-label="Choose date"
        required
        value={selectedDate}
        onChange={handleDateChange}
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        required
        value={selectedTime}
        aria-label="Choose time"
        onChange={(e) => setSelectedTime(e.target.value)}
      >
        {availableTimes.map((time) => (
          <option key={time}>{time}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        aria-label="Choose number of guests"
        required
        value={numberOfGuests}
        onChange={(e) => setNumberOfGuests(e.target.value)}
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        required
        value={occasion}
        aria-label="Choose occasion"
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <input
        type="submit"
        value="Make Your reservation"
        disabled={!formIsValid}
      />
    </form>
  );
};

export default BookingForm;
