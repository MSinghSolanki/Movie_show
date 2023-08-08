import React, { useState } from "react";
import "./bookingform.css";

export const BookingForm = ({ movieName, movieImage, onClose }) => {
  const storedUserDetails = JSON.parse(localStorage.getItem('userDetails')) || {};
  const [userDetails, setUserDetails] = useState({});
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUserDetails(prevDetails => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
    setUserDetails({});
    setBookingConfirmed(true);
    // onClose(); // Optionally close the popup here
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        {bookingConfirmed ? (
          <div className="confirmation-message">
            <h2>Thanks for booking with us!</h2>
          </div>
        ) : (
          <div className="booking-form-container">
            <div className="movie-details">
              <div className="movie-image">
                <img src={movieImage} alt={movieName} />
              </div>
              <div className="booking-details">
                <h2>Book Ticket for {movieName}</h2>
                <form onSubmit={handleSubmit}>
                  <label>
                    Name:
                    <input
                      type="text"
                      name="name"
                      value={userDetails.name || ''}
                      onChange={handleInputChange}
                    />
                  </label>
                  <label>
                    Email:
                    <input
                      type="email"
                      name="email"
                      value={userDetails.email || ''}
                      onChange={handleInputChange}
                    />
                  </label>
                  <label>
                    Number of Seats:
                    <input
                      type="number"
                      name="seat"
                      value={userDetails.seat || ''}
                      onChange={handleInputChange}
                    />
                  </label>

                  <button type="submit">Submit Booking</button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
