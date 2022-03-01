import React from 'react';

import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.png';

function SignUp() {
  return (
    <>
      <div className="username-header" id="username-header" />
      <Link to="/">
        <img className="health-logo" src={Logo} alt="" />
      </Link>

      <div className="form-comum">
        <h1>Cadastro</h1>
        <form>
          <p>
            <input type="text" id="nome" value="" placeholder="Nome" />
          </p>
          <p>
            <input
              type="text"
              id="sobrenome"
              value=""
              placeholder="Sobrenome"
            />
          </p>
          <p>
            <input type="text" id="email" value="" placeholder="E-mail" />
          </p>
          <p>
            <input
              type="password"
              id="password"
              value=""
              placeholder="Senha (Mínimo 8 caracteres)"
            />
          </p>
          <p>
            <input
              type="password"
              id="password2"
              value=""
              placeholder="Confirmacao de senha"
            />
          </p>
          <p className="submit">
            <input
              type="submit"
              id="commit"
              onClick="validatePasswordisEqual(), validateEmail(), login()"
              className="submitBtn"
              value="Entrar"
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

export default SignUp;
