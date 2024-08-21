import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import TermsAndCondition from './page/termsconditions/TermsAndCondition';
import PrivacyPolicy from './page/PrivacyPolicy/PrivacyPolicy';
import Form from './page/form/Form';
import './App.css';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<TermsAndCondition />} />
        <Route path="/termsandcondition" element={<TermsAndCondition />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </Router>
  );
};

export default App;
