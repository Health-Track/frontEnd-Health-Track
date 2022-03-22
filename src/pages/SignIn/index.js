import { React } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Input } from 'antd';

import useForm from '../../hooks/useForm';
import DefaultFooter from '../../components/DefaultFooter';
import Logo from '../../assets/logo.png';

import './style.css';

function Signin() {
  const initialValue = {
    email: '',
    password: ''
  };

  function requestLogin() {
    console.log(values);
    clearForm();
  }

  const { handleChange, values, clearForm } = useForm(initialValue);

  return (
    <div className="signin-container">
      <div className="signin-logo-container">
        <Link className="logo-link" to="/">
          <img className="health-logo" src={Logo} alt="" />
        </Link>
      </div>
      <div className="form-container">
        <div className="form-comum">
          <h1>Login</h1>
          <Form>
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
              <Button
                type="primary"
                htmlType="submit"
                onClick={() => requestLogin()}
                style={{ width: '100%' }}
              >
                Login
              </Button>
            </Form.Item>
          </Form>
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
