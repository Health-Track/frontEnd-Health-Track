import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';

import Landing from '../../assets/landing.png';
import Logo from '../../assets/logo.png';

import './style.css';

function SignUp() {
  return (
    <Row className="signup-container">
      <Col className="background-container" span={12}>
        <div>
          <Link to="/">
            <img src={Landing} alt="" />
          </Link>
        </div>
      </Col>
      <Col className="form-container" span={12}>
        <div className="signup-logo-container">
          <Link className="logo-link" to="/">
            <img className="health-logo" src={Logo} alt="" />
          </Link>
        </div>
        <div>
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
      </Col>
    </Row>
  );
}

export default SignUp;
