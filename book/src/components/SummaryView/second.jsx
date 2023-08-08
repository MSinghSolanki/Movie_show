import React, { useState, useEffect } from 'react';
import { BookingForm } from '../booking/bookform.jsx';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './secondscreen.css';

export const ShowDetails = () => {
  const { id } = useParams(0);
  const [show, setShow] = useState({});
  const [bookingFormVisible, setBookingFormVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => {
        setShow(response.data);
      })
      .catch((error) => {
        console.error('Error fetching show details:', error);
      });
  }, [id]);

  const handleBookTicketClick = () => {
    setBookingFormVisible(true);
  };
  const handlebackBtn = () => {
    navigate(-1);
  };

  const removeHtmlTags = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  };

  return (
    <div className="container">
      <div>
        <button className="back-button" onClick={handlebackBtn}>
          Back
        </button>
      </div>
      <h1 className="movie-name">{show.name}</h1>
      <div className="movie-details-s">
        <div className="movie-image-s">
          <img src={show.image?.medium} alt={show.name} />
        </div>
        <div className="booking-details">
          {/* Show show details here */}
        </div>
      </div>
      <p className="summary">{removeHtmlTags(show.summary)}</p>
      <div className="button-container">
        {!bookingFormVisible && (
          <button className="action-button" onClick={handleBookTicketClick}>
            Book Movie Ticket
          </button>
        )}
      </div>
      {bookingFormVisible && (
        <BookingForm
          movieImage={show.image.medium}
          movieName={show.name}
          onClose={() => setBookingFormVisible(false)}
        />
      )}
    </div>
  );
};
