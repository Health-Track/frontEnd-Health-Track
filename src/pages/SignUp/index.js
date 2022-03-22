import { Button, Form, Input } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

import useForm from '../../hooks/useForm';
import Landing from '../../assets/landing.png';
import Logo from '../../assets/logo.png';

import './style.css';

function SignUp() {
  const initialValue = {
    name: '',
    lastname: '',
    email: '',
    password: '',
    passwordCheck: ''
  };

  const { handleChange, values, clearForm } = useForm(initialValue);

  function sendRegisterRequest() {
    console.log(values);
    clearForm();
  }

  return (
    <div className="signup-container">
      <div className="signup-background-container" span={12}>
        <div>
          <Link to="/">
            <img src={Landing} alt="" />
          </Link>
        </div>
      </div>
      <div className="form-container" span={12}>
        <div className="signup-logo-container">
          <Link className="logo-link" to="/">
            <img className="health-logo" src={Logo} alt="" />
          </Link>
        </div>
        <div>
          <div className="form-comum">
            <h1>Cadastro</h1>
            <Form>
              <Form.Item>
                <Input
                  type="text"
                  id="name"
                  value={values.name}
                  placeholder="Nome"
                  name="name"
                  onChange={handleChange}
                  className="health-track-input"
                />
              </Form.Item>
              <Form.Item>
                <Input
                  type="text"
                  id="lastname"
                  value={values.lastname}
                  placeholder="Sobrenome"
                  name="lastname"
                  onChange={handleChange}
                  className="health-track-input"
                />
              </Form.Item>
              <Form.Item>
                <Input
                  type="text"
                  id="email"
                  value={values.email}
                  placeholder="E-mail"
                  name="email"
                  onChange={handleChange}
                  className="health-track-input"
                />
              </Form.Item>
              <Form.Item>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  value={values.password}
                  placeholder="Senha"
                  onChange={handleChange}
                  className="health-track-input"
                />
              </Form.Item>
              <Form.Item>
                <Input
                  type="password"
                  id="passwordCheck"
                  name="passwordCheck"
                  value={values.passwordCheck}
                  placeholder="Confirme sua senha"
                  onChange={handleChange}
                  className="health-track-input"
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  onClick={() => sendRegisterRequest()}
                  style={{ width: '100%' }}
                >
                  Cadastrar
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
