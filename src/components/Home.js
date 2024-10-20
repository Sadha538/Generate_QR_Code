import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Home.css';


function Home() {
  const navigate = useNavigate();

  const handleShowDetails = () => {
    navigate('/details');
  };

  return (
    <div className="home">
      <h1>Welcome to Ferrogloble VCard</h1>
      <p>This is a simple VCard generator that allows you to create a QR code for your personal details.</p>
      <button onClick={handleShowDetails} className="show-details-btn">
        Show Details
      </button>
    </div>
  );
}

export default Home;
