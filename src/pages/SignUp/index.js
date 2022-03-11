import React from 'react';
import { Link } from 'react-router-dom';

import Landing from '../../assets/landing.png';

import './style.css';

function SignUp() {
  return (
    <div className="signup-container">
      <div className="background-container">
        <div>
          <Link to="/">
            <img src={Landing} alt="" />
          </Link>
        </div>
      </div>
      <div className="form-container">
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
      </div>
    </div>
  );
}

export default SignUp;
