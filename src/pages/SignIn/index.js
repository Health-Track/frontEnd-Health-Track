import { React, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form, Input, notification } from 'antd';
import { LoginOutlined, WarningFilled } from '@ant-design/icons';

import useForm from '../../hooks/useForm';
import DefaultFooter from '../../components/DefaultFooter';
import Logo from '../../assets/logo.png';
import api from '../../services/apiClient';
import isValidEmail from '../../utils/emailValidator';

import './style.css';

function Signin() {
  const initialValue = {
    email: '',
    password: ''
  };

  const navigate = useNavigate();

  const requestLogin = useCallback(async ({ email, password }) => {
    if (isValidEmail(email)) {
      api
        .post('/auth/login', {
          email,
          senha: password
        })
        .then(resp => {
          localStorage.setItem('@Health-track:token', resp.data.token)
          navigate('/home-page');
        })
        .catch(() => {
          notifyWarningToClient({
            message: 'Erro desconhecido',
            description:
              'Houve um problema desconhecido na sua requisição. Tente novamente'
          });
        });
      clearForm();
    } else {
      notifyWarningToClient({
        message: 'Atenção!',
        description: 'Informe um e-mail válido.'
      });
    }

    function notifyWarningToClient(warning) {
      notification.warning({
        message: warning.message,
        description: warning.description,
        icon: <WarningFilled style={{ color: '#e70f0f' }} />
      });
    }
  });

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
                onClick={() => requestLogin({ ...values })}
                style={{ width: '100%' }}
              >
                Login
              </Button>
            </Form.Item>
            <Form.Item className="forgot-password-button">
              <Link to="/forgot-password">Esqueci minha senha</Link>
            </Form.Item>
            <Form.Item className="forgot-password-button">
              <Link to="/sign-up">
                <LoginOutlined /> Cadastrar
              </Link>
            </Form.Item>
          </Form>
        </div>
      </div>
      <DefaultFooter />
    </div>
  );
}

export default Signin;
