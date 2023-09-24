import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import { FaCheckCircle } from 'react-icons/fa'; // Import the checkmark icon from react-icons/fa
import './Success.css'; // Import your CSS stylesheet

export default function Success() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 100);
  }, []);

  return (
    <div className={`success-page ${fadeIn ? 'fade-in' : ''}`}>
      <div className="success-content">
        <FaCheckCircle className="success-icon" />
        <h2>Successfully Applied</h2>
        <Link to="/Home" className="home-button">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
