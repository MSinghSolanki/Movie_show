import React from 'react';
import { Link } from 'react-router-dom';
import './main.css';

const WelcomePage = () => {
    return (
      <div className="welcome-page">
        <img src='https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='backgorund'/>
        <div className="content">
          <h1>Welcome to our TV show booking site</h1>
          <Link to="/showlist" className="get-started-button">
            Get Started
          </Link>
        </div>
      </div>
    );
  };

export default WelcomePage;
