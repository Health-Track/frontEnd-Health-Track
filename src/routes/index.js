import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';
import HomePage from '../pages/HomePage';

function HealthTrackRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} exact />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/home-page" element={<HomePage />} />
    </Routes>
  );
}

export default HealthTrackRoutes;
