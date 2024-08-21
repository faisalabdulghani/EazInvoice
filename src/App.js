import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import TermsAndCondition from './page/termsconditions/TermsAndCondition';
import PrivacyPolicy from './page/PrivacyPolicy/PrivacyPolicy';
import './App.css';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        {/* Set TermsAndCondition as the default home page */}
        <Route path="/" element={<TermsAndCondition />} />
        <Route path="/termsandcondition" element={<TermsAndCondition />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        {/* Redirect any unknown paths to the home page */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
