import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.png';

function Signin() {
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
          <p>
            <input type="password" id="password" value="" placeholder="Senha" />
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
      <div id="footer" style={{ 'font-size': '10px' }}>
        <p>ENGENHARIA DE SOFTWARE</p>
      </div>
    </>
  );
}

export default Signin;
