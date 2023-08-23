import React, { useReducer } from "react";
import BookingForm from "../components/BookingForm";
import {
  fetchAPI,
  submitAPI,
} from "https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api";
import { useNavigate } from "react-router-dom";

const BookingPage = () => {
  const [availableTimes, dispatchAvailableTimes] = useReducer(
    (state, action) => {
      return state;
    },
    ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
  );

  const updateTimes = async (selectedDate) => {
    try {
      const availableTimes = await fetchAPI(selectedDate);
      dispatchAvailableTimes(availableTimes);
    } catch (error) {
      console.error("Error fetching available times:", error);
    }
  };

  const initializeTimes = async () => {
    try {
      const today = new Date();
      const availableTimes = await fetchAPI(today);
      dispatchAvailableTimes(availableTimes);
    } catch (error) {
      console.error("Error fetching available times:", error);
    }
  };

  const navigate = useNavigate();

  const submitForm = async (formData) => {
    try {
      const isSubmitted = await submitAPI(formData);
      if (isSubmitted) {
        navigate("/confirmed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
      <h2>Booking Page</h2>
      <BookingForm
        availableTimes={availableTimes}
        updateTimes={updateTimes}
        initializeTimes={initializeTimes}
        submitForm={submitForm}
      />
    </div>
  );
};

export default BookingPage;
