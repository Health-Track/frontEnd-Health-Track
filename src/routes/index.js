import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Cabecalho from '../components/Cabecalho';
import Login from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';

function HealthTrackRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} exact />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/home" element={<Cabecalho />} />
    </Routes>
  );
}

export default HealthTrackRoutes;
