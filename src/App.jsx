import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import HealthTrackRoutes from './routes';

import './styles/App.css';
import 'antd/dist/antd.css';

export default function App() {
  return (
    <BrowserRouter>
      <HealthTrackRoutes />
    </BrowserRouter>
  );
}
