import React, { useState, useReducer } from 'react';
import BookingForm from '../components/BookingForm';

export const initializeTimes = () => ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

const BookingPage = () => {
    const [selectedDate, setSelectedDate] = useState('');
    
    const updateTimes = (selectedDate) => {
        // You can implement logic here to update availableTimes based on the selectedDate.
        // For now, let's keep it simple and use the initializeTimes function.
        return initializeTimes();
    };

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    const handleDateChange = (event) => {
        const newDate = event.target.value;
        setSelectedDate(newDate);
        const newTimes = updateTimes(newDate);
        dispatch(newTimes);
    };

    return (
        <div>
            <h1>Table Booking App</h1>
            <BookingForm selectedDate={selectedDate} availableTimes={availableTimes} onDateChange={handleDateChange} />
        </div>
    );
}

export default BookingPage;