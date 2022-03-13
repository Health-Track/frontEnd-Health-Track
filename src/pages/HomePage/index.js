import React from 'react';
import { Drawer } from 'antd';
import 'antd/dist/antd.css';
import DefaultFooter from '../../components/DefaultFooter';
import DefaultHeader from '../../components/DeafultHeader';

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

  render() {
    return (
      <div className="homepage-container">
        <DefaultHeader username="Itallo" toggleMenu={this.toggleMenu} />
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
