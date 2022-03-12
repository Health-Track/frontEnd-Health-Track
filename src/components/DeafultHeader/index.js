import React from 'react';
import './style.css';
/* import { Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons'; */
import Logo from '../../assets/logo.png';

export default function DefaultHeader(props) {
  return (
    <div className="header">
      <span className="botao-menu">
        {/* <Button
          icon={<MenuOutlined style={{ color: 'black' }} />}
          type="link"
          size="large"
        /> */}
        <div className="hamburguer" />
        <div className="hamburguer" />
        <div className="hamburguer" />
      </span>
      <span className="logo-header-span">
        <img className="logo-header" src={Logo} alt="" />
      </span>
      <span className="user-info">
        <h2>{props.username}</h2>
      </span>
    </div>
  );
}
