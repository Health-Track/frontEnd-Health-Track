import React from 'react';
import { Link } from 'react-router-dom';

import DefaultFooter from '../../components/DefaultFooter';
import Logo from '../../assets/logo.png';

import './style.css';

function Signin() {
  return (
    <div className="signin-container">
      <div className="logo-container">
        <Link className="logo-link" to="/">
          <img className="health-logo" src={Logo} alt="" />
        </Link>
      </div>
      <div className="form-container">
        <div className="form-comum">
          <h1>Login</h1>
          <form>
            <p>
              <input type="text" id="email" value="" placeholder="E-mail" />
            </p>
            <p>
              <input
                type="password"
                id="password"
                value=""
                placeholder="Senha"
              />
            </p>
            <p className="submit">
              <input
                type="submit"
                id="commit"
                onClick="validatePassword(), validateEmail(), login()"
                className="submitBtn"
                value="Entrar"
              />
            </p>
          </form>
        </div>
        <div id="footer">
          <p>
            Ainda não é cadastrado? <Link to="/sign-up">Cadastrar</Link>
          </p>
          <p style={{ 'font-size': '10px' }}>
            Esqueceu a senha? <Link to="/forgot-password">Recuperar senha</Link>
          </p>
        </div>
      </div>
      <DefaultFooter />
    </div>
  );
}

export default Signin;
