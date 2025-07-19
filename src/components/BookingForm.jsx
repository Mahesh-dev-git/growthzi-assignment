import React from "react";
import '../styles/BookingForm.css';


const BookingForm = () => {
  return (
    <div className="booking-form">
      <div className="booking-input">
        <label>Check In</label>
        <input type="date" />
      </div>

      <div className="booking-input">
        <label>Check Out</label>
        <input type="date" />
      </div>

      <div className="booking-input">
        <label>Room</label>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>

      <button className="booking-button">
        Check Availability →
      </button>
    </div>
  );
};

export default BookingForm;
