import React from 'react';
import './style.css';
import { Button } from 'antd';
import { ExportOutlined } from '@ant-design/icons';
import Logo from '../../assets/logo.png';

export default class DefaultHeader extends React.Component {
  render() {
    return (
      <div className="header-container">
        <div className="header">
          <span
            className="botao-menu"
            onClick={this.props.toggleMenu}
            role="button"
            tabIndex={0}
          >
            <div className="hamburguer" />
            <div className="hamburguer" />
            <div className="hamburguer" />
          </span>
          <span className="logo-header-span">
            <img className="logo-header" src={Logo} alt="" />
          </span>
          <span className="user-info">
            <h2 className="user-name">{this.props.username}</h2>
            <Button
              className="botaoSair"
              type="link"
              shape="circle"
              onClick={this.props.loggout}
              icon={<ExportOutlined style={{ color: 'black' }} />}
            />
          </span>
        </div>
      </div>
    );
  }
}
