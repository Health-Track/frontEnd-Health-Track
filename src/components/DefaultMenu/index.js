import {
  BgColorsOutlined,
  HomeOutlined,
  LeftOutlined
} from '@ant-design/icons';
import { Divider, Drawer } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default class DefaultMenu extends React.Component {
  render() {
    return (
      <div style={{ width: 100 }}>
        <Drawer
          closeIcon={<LeftOutlined />}
          title={<b style={{ color: 'green' }}>Health Track </b>}
          placement="left"
          onClose={this.props.toggleMenu}
          visible={this.props.showMenu}
          width="200"
        >
          <Link style={{ color: 'black' }} to="/home-page">
            <HomeOutlined /> Home Page
          </Link>
          <Divider />
          <div className="exames-menu">
            <BgColorsOutlined /> <b className="exame-menu">EXAMES</b>
          </div>
          <br />
          <Link className="link-menu" to="/hemograma">
            Hemograma
          </Link>
          <Divider />
          Fezes
          <Divider />
          Urina
          <Divider />
          Colesterol
          <Divider />
          Pressão
          <Divider />
          Glicemia
        </Drawer>
      </div>
    );
  }
}
