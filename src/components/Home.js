import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleShowDetails = () => {
    navigate('/details');
  };

  return (
    <div className="home">
      <button onClick={handleShowDetails} className="show-details-btn">
        Show Details
      </button>
    </div>
  );
}

export default Home;
