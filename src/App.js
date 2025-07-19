import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage01 from './pages/HomePage01';
import Page404 from './pages/Page404';

function App() {
  return (
    <Router>
      <Routes>
        {/* ✅ Main page */}
        <Route path="/" element={<HomePage01 />} />

        {/* ✅ Add more routes here when you build them */}
        {/* <Route path="/about" element={<AboutPage />} /> */}
        {/* <Route path="/service" element={<ServicePage />} /> */}

        {/* ✅ Catch-all route for 404 */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
