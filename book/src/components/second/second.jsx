import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const  ShowDetails=()=> {
  const { id } = useParams();
  const [show, setShow] = useState({});

  useEffect(() => {
    axios.get(`https://api.tvmaze.com/shows/${id}`)
      .then(response => {
        setShow(response.data);
      })
      .catch(error => {
        console.error('Error fetching show details:', error);
      });
  }, [id]);

  return (
    <div>
      <h1>{show.name}</h1>
      <p>{show.summary}</p>
      <button>Book Movie Ticket</button>
    </div>
  );
}


