import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Input } from 'antd';

import Logo from '../../assets/logo.png';
import Landing from '../../assets/landing.png';

import './style.css';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');

  function sendEmail() {
    console.log(`Sending redefining password to ${email}`);
    setEmail('');
  }

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
                  // style={{ width: '100%', margin: 0 }}
                  className="health-track-input"
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  onClick={() => sendEmail()}
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
