import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './styles/App.css';
import HealthTrackRoutes from './routes';

export default function App() {
  return (
    <BrowserRouter>
      <HealthTrackRoutes />
    </BrowserRouter>
  );
}
