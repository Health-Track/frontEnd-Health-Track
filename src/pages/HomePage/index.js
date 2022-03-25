import React from 'react';
import { Drawer } from 'antd';
import 'antd/dist/antd.css';
import DefaultFooter from '../../components/DefaultFooter';
import DefaultHeader from '../../components/DeafultHeader';
import './style.css';

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = { showMenu: false };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState(prevState => ({
      showMenu: !prevState.showMenu
    }));
    console.log(this.state.showMenu);
  }

  loggout() {
    alert('Sair');
  }

  render() {
    return (
      <div className="homepage-container">
        <DefaultHeader
          username="Username"
          toggleMenu={this.toggleMenu}
          loggout={this.loggout}
        />
        <DefaultFooter />
        <Drawer
          title="Menu"
          placement="left"
          onClose={this.toggleMenu}
          visible={this.state.showMenu}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </div>
    );
  }
}

export default HomePage;
