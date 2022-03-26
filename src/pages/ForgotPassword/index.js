import { React, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Input, notification } from 'antd';
import { MailOutlined, WarningFilled } from '@ant-design/icons';

import Logo from '../../assets/logo.png';
import Landing from '../../assets/landing.png';
import isValidEmail from '../../utils/emailValidator';

import './style.css';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');

  const sendEmail = useCallback(async () => {
    if (isValidEmail(email)) {
      notification.info({
        message: 'E-mail enviado',
        description:
          'Um e-mail para redefinição de senha foi enviado para o e-mail fornecido. Cheque sua caixa de entrada',
        icon: <MailOutlined style={{ color: '#147CD9' }} />
      });
      setEmail('');
    } else {
      notification.warning({
        message: 'Atenção!',
        description: 'Informe um e-mail válido.',
        icon: <WarningFilled style={{ color: '#e70f0f' }} />
      });
    }
  });

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-background-container" span={12}>
        <div>
          <Link to="/">
            <img src={Landing} alt="" />
          </Link>
        </div>
      </div>
      <div className="form-container" span={12}>
        <div className="forgot-password-logo-container">
          <Link className="logo-link" to="/">
            <img className="health-logo" src={Logo} alt="" />
          </Link>
        </div>
        <div>
          <div className="form-comum">
            <h1>Recupere sua senha</h1>
            <Form>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: 'Por favor, informe seu email!'
                  }
                ]}
              >
                <Input
                  type="text"
                  id="email"
                  value={email}
                  placeholder="E-mail"
                  name="email"
                  onChange={e => setEmail(e.target.value)}
                  className="health-track-input"
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  onClick={() => sendEmail(email)}
                  style={{ width: '100%' }}
                >
                  Recuperar Senha
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
