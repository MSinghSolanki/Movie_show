import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './firstview.css';



export const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.tvmaze.com/search/shows?q=all')
      .then(response => {
        setShows(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.error('Error fetching show data:', error);
      });
  }, []);

  return (
    <div className="show-list-container">
      <h1>TV Shows</h1>
      <div className="show-card-list">
        {shows.map(showEntry => {
          const show = showEntry.show;
          return (
            <div className="show-card" key={show.id}>
              {show.image && (
                <img
                  className="show-image"
                  src={show.image.medium}
                  alt={show.name}
                />
              )}
              <Link to={`/show/${show.id}`} className="show-link">
                <h2 className="show-title">{show.name}</h2>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
