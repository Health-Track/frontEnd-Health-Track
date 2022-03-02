import React from 'react';
import 'antd/dist/antd.css';
import {
  MenuOutlined,
  PieChartOutlined,
  MailOutlined,
  AppstoreOutlined,
  DesktopOutlined,
  ContainerOutlined,
  UserOutlined,
  ExportOutlined
} from '@ant-design/icons';
import { Menu, PageHeader, Button, Descriptions, Avatar } from 'antd';

const { SubMenu } = Menu;

export default class Cabecalho extends React.Component {
  constructor() {
    super();
    this.state = {
      collapsed: false
    };
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    const username = 'José Itallo';
    const usuario = {
      username: 'José Itallo',
      foto: 'https://avatars.githubusercontent.com/u/56324908?v=4'
    };
    return (
      <>
        <PageHeader
          style={{ background: '#0cd2a7' }}
          backIcon={<MenuOutlined />}
          className="site-page-header"
          title="Healt-Track"
          subTitle="Facilitando o monitoramento de sua saúde"
          extra={[
            <div className="usuario">
              <Avatar
                className="usuarioAvatar"
                src={usuario.foto ? usuario.foto : <UserOutlined />}
              ></Avatar>
              <h1 className="usuarioNome">{username}</h1>
              <Button
                className="botaoSair"
                type="link"
                size="small"
                shape="circle"
                icon={<ExportOutlined style={{ color: 'black' }} />}
              ></Button>
            </div>
          ]}
          onBack={() => {
            this.toggleCollapsed();
          }}
          avatar={{
            src: 'https://media.istockphoto.com/vectors/medic-stethoscope-concept-logotype-template-design-business-logo-icon-vector-id1200712144?s=612x612'
          }}
        ></PageHeader>

        <div className="menuDropdown">
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="light"
            inlineCollapsed={this.state.collapsed}
          >
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <Menu.Item key="3" icon={<ContainerOutlined />}>
              Option 3
            </Menu.Item>
            <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              icon={<AppstoreOutlined />}
              title="Navigation Two"
            >
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
              </SubMenu>
            </SubMenu>
          </Menu>
        </div>
      </>
    );
  }
}
