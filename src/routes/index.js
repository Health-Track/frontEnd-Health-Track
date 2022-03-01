import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';

function HealthTrackRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} exact />
      <Route path="/sign-up" element={<Cadastro />} />
    </Routes>
  );
}

export default HealthTrackRoutes;
