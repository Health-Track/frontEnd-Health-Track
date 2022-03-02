import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.png';

export default function ForgotPassword() {
  return (
    <>
      <div className="username-header" id="username-header" />
      <Link to="/">
        <img className="health-logo" src={Logo} alt="" />
      </Link>
      <div className="form-comum">
        <h1>Login</h1>
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

      <div id="footer" style={{ 'font-size': '10px' }}>
        <p>ENGENHARIA DE SOFTWARE</p>
      </div>
    </>
  );
}
