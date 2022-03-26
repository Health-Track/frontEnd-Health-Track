import React, { useCallback } from 'react';
import { Button, Form, Input, notification } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircleOutlined, WarningFilled } from '@ant-design/icons';

import useForm from '../../hooks/useForm';
import isValidEmail from '../../utils/emailValidator';
import api from '../../services/apiClient';
import Landing from '../../assets/landing.png';
import Logo from '../../assets/logo.png';

import './style.css';

function SignUp() {
  const initialValue = {
    name: '',
    email: '',
    password: '',
    passwordCheck: ''
  };

  const { handleChange, values, clearForm } = useForm(initialValue);

  const navigate = useNavigate();

  const signUpRequest = useCallback(
    async ({ name, email, password, passwordCheck }) => {
      const passwordMinLength = 8;
      if (passwordMatchWithCheck()) {
        notifyWarningToClient({
          message: 'Confirmação de senha',
          description: 'As senhas informadas não coincidem. Tente novamente.'
        });
      } else if (!isValidEmail(email)) {
        notifyWarningToClient({
          message: 'Atenção',
          description: 'Informe um e-mail válido!'
        });
      } else if (password.length < passwordMinLength) {
        notifyWarningToClient({
          message: 'Senha inválida',
          description: 'A senha deve conter ao menos 8 dígitos.'
        });
      } else {
        requestRegister();
      }

      function requestRegister() {
        api
          .post('/auth', {
            nome: name,
            email,
            senha: password
          })
          .then(() => {
            notification.success({
              message: 'Cadastro Efetuado',
              description: 'Seu cadastro foi concluído!',
              icon: <CheckCircleOutlined style={{ color: '#28730a' }} />,
              onClose: navigate('/')
            });
            clearForm();
          })
          .catch(() => {
            notifyWarningToClient({
              message: 'Erro desconhecido',
              description:
                'Houve um problema desconhecido na sua requisição. Tente novamente'
            });
          });
      }

      function passwordMatchWithCheck() {
        return password !== passwordCheck;
      }

      function notifyWarningToClient(warning) {
        notification.warning({
          message: warning.message,
          description: warning.description,
          icon: <WarningFilled style={{ color: '#e70f0f' }} />
        });
      }
    }
  );

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
                  onClick={() => signUpRequest({ ...values })}
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
