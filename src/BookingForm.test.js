import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./components/BookingForm";

describe("BookingForm Validation Tests", () => {
  describe("HTML5 Validation", () => {
    it("applies required attribute to date input", () => {
      render(<BookingForm availableTimes={[]} />);
      const dateInput = screen.getByLabelText("Choose date");
      expect(dateInput).toHaveAttribute("required");
    });

    it("applies required attribute to time select", () => {
      render(<BookingForm availableTimes={[]} />);
      const timeSelect = screen.getByLabelText("Choose time");
      expect(timeSelect).toHaveAttribute("required");
    });

    it("applies required attribute to guests input", () => {
      render(<BookingForm availableTimes={[]} />);
      const guestsInput = screen.getByLabelText("Number of guests");
      expect(guestsInput).toHaveAttribute("required");
    });

    it("applies required attribute to occasion select", () => {
      render(<BookingForm availableTimes={[]} />);
      const occasionSelect = screen.getByLabelText("Occasion");
      expect(occasionSelect).toHaveAttribute("required");
    });
  });

  describe("JavaScript Validation", () => {
    it("disables submit button for invalid input", () => {
      render(<BookingForm availableTimes={[]} />);
      const submitButton = screen.getByText("Make Your reservation");
      fireEvent.click(submitButton); // Try submitting with empty fields
      expect(submitButton).toBeDisabled();
    });

    it("enables submit button for valid input", () => {
      render(<BookingForm availableTimes={[]} />);
      const submitButton = screen.getByText("Make Your reservation");
      const dateInput = screen.getByLabelText("Choose date");
      const timeSelect = screen.getByLabelText("Choose time");
      const guestsInput = screen.getByLabelText("Number of guests");
      const occasionSelect = screen.getByLabelText("Occasion");

      fireEvent.change(dateInput, { target: { value: "2023-08-30" } });
      fireEvent.change(timeSelect, { target: { value: "19:00" } });
      fireEvent.change(guestsInput, { target: { value: 2 } });
      fireEvent.change(occasionSelect, { target: { value: "Birthday" } });

      expect(submitButton).not.toBeDisabled();
    });
  });
});
