import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppCanvas from '@/app/Welcome/index';
import ContactCanvas from '@/app/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppCanvas />} />
        <Route path="/about" element={<ContactCanvas />} />
      </Routes>
    </Router>
  );
}

export default App;
