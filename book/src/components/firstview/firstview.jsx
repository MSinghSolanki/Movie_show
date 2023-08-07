import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const  ShowList=()=> {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios.get('https://api.tvmaze.com/search/shows?q=all')
      .then(response => {
        setShows(response.data);
      })
      .catch(error => {
        console.error('Error fetching show data:', error);
      });
  }, []);

  return (
    <div>
      <h1>TV Shows</h1>
      <ul>
        {shows.map(show => (
          <li key={show.show.id}>
            <Link to={`/show/${show.show.id}`}>
              {show.show.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

