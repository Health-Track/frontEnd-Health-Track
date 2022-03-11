import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.png';
import Landing from '../../assets/landing.png';

import './style.css';

export default function ForgotPassword() {
  return (
    <div className="forgot-password-container">
      <div className="forgot-password-background-container" span={12}>
        <div>
          <Link to="/">
            <img src={Landing} alt="" />
          </Link>
        </div>
      </div>
      <div className="form-container" span={12}>
        <div className="forgot-password-logo-container">
          <Link className="logo-link" to="/">
            <img className="health-logo" src={Logo} alt="" />
          </Link>
        </div>
        <div>
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
      </div>
    </div>
  );
}
