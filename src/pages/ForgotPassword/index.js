import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.png';
import DefaultFooter from '../../components/DefaultFooter';

import './style.css';

export default function ForgotPassword() {
  return (
    <div className="forgot-password-container">
      <div className="logo-container">
        <Link to="/">
          <img className="health-logo" src={Logo} alt="" />
        </Link>
      </div>
      <div className="form-forgot-password-container">
        <div className="form-comum">
          <h1>Recupere sua senha</h1>
          <form>
            <p>
              <input type="text" id="email" value="" placeholder="E-mail" />
            </p>
            <p className="submit">
              <input
                type="submit"
                id="commit"
                onClick="validateEmail()"
                className="submitBtn"
                value="Recuperar"
              />
            </p>
          </form>
        </div>
      </div>
      <DefaultFooter />
    </div>
  );
}
