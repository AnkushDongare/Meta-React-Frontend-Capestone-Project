import React from "react";
import { render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import { initializeTimes } from './pages/BookingPage';

test("Static label is rendered in BookingForm", () => {
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  render(<BookingForm availableTimes={availableTimes} />);

  const labelElement = screen.getByLabelText("Choose date");
  expect(labelElement).toBeInTheDocument();
});


test('initializeTimes returns the expected array of available times', () => {
    const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const actualTimes = initializeTimes();

    expect(actualTimes).toEqual(expectedTimes);
});