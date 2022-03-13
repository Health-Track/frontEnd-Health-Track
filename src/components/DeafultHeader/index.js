import React from 'react';
import './style.css';
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
            onKeyDown={() => {
              console.log('lint chato');
            }}
          >
            <div className="hamburguer" />
            <div className="hamburguer" />
            <div className="hamburguer" />
          </span>
          <span className="logo-header-span">
            <img className="logo-header" src={Logo} alt="" />
          </span>
          <span className="user-info">
            <h2>{this.props.username}</h2>
          </span>
        </div>
      </div>
    );
  }
}
