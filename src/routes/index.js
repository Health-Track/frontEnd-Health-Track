import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';
import HomePage from '../pages/HomePage';
import Hemograma from '../pages/Hemograma';
import Colesterol from '../pages/Colesterol';
import Fezes from '../pages/Fezes';
import Glicemia from '../pages/Glicemia';

function HealthTrackRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} exact />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/home-page" element={<HomePage />} />
      <Route path="/hemograma" element={<Hemograma />} />
      <Route path="/colesterol" element={<Colesterol />} />
      <Route path="/fezes" element={<Fezes />} />
      <Route path="/glicemia" element={<Glicemia />} />
    </Routes>
  );
}

export default HealthTrackRoutes;
