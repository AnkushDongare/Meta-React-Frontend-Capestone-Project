import React from 'react';

const BookingForm = ({ selectedDate, availableTimes, onDateChange }) => {
    const handleTimeChange = (event) => {
        // Handle time change here
    };

    const handleGuestsChange = (event) => {
        // Handle guests change here
    };

    const handleOccasionChange = (event) => {
        // Handle occasion change here
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can implement the logic to send the form data to an API
    };

    return (
        <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={selectedDate} onChange={onDateChange} />

            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" onChange={handleTimeChange}>
                {availableTimes.map(time => (
                    <option key={time} value={time}>{time}</option>
                ))}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={handleGuestsChange} />

            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" onChange={handleOccasionChange}>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>

            <input type="submit" value="Make Your Reservation" />
        </form>
    );
}

export default BookingForm;
