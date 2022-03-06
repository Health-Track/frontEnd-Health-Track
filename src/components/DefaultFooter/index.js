import React from 'react';
import { GithubOutlined, HeartFilled } from '@ant-design/icons';

import './style.css';

export default function DefaultFooter() {
  return (
    <div className="footer-container">
      <footer className="footer-component">
        <span>
          WebApp criado em Engenharia de Software
          <HeartFilled color="#F42C22" />
        </span>
        <span>
          Conheça nosso
          <a href="https://github.com/Health-Track/">
            <GithubOutlined />
          </a>
        </span>
      </footer>
    </div>
  );
}
