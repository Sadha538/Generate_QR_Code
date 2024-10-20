import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QRCodeDisplay from './QRCodeDisplay';
// Change this line
import '../PersonalDetailsForm.css';

function PersonalDetailsForm() {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '',
    phone: '', gender: '', address: '',
    city: '', state: '', zip: '', country: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email.endsWith('@ferrogloble.com')) {
      alert('Email must end with @ferrogloble.com');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="form-container">
      <button className="back-button" onClick={() => navigate('/')}>Back</button>
      <button className="edit-button" onClick={() => setSubmitted(false)}>Edit</button>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
          <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email (@ferrogloble.com)" onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} />
          <input type="text" name="gender" placeholder="Gender" onChange={handleChange} />
          <input type="text" name="address" placeholder="Address" onChange={handleChange} />
          <input type="text" name="city" placeholder="City" onChange={handleChange} />
          <input type="text" name="state" placeholder="State" onChange={handleChange} />
          <input type="text" name="zip" placeholder="Zip Code" onChange={handleChange} />
          <input type="text" name="country" placeholder="Country" onChange={handleChange} />
          <input type="submit" value="Submit" />
        </form>
      ) : (
        <QRCodeDisplay formData={formData} />
      )}
    </div>
  );
}

export default PersonalDetailsForm;
