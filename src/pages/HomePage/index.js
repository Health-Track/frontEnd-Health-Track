import React from 'react';
import 'antd/dist/antd.css';
import DefaultFooter from '../../components/DefaultFooter';
import DefaultHeader from '../../components/DeafultHeader';
import './style.css';
import DefaultMenu from '../../components/DefaultMenu';

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

        <DefaultMenu
          showMenu={this.state.showMenu}
          toggleMenu={this.toggleMenu}
        />
      </div>
    );
  }
}

export default HomePage;
