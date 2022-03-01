import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// import Login from './pages/Login';

import './App.css';
import HealthTrackRoutes from './routes';

export default function App() {
  return (
    <BrowserRouter>
      <HealthTrackRoutes />
    </BrowserRouter>
    // <Login />
  );
}
