import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import PersonalDetailsForm from './components/PersonalDetailsForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<PersonalDetailsForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
