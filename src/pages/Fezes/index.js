import React from 'react';
import { Button, Card, Table } from 'antd';
import 'antd/dist/antd.css';
import DefaultFooter from '../../components/DefaultFooter';
import DefaultHeader from '../../components/DeafultHeader';
import DefaultMenu from '../../components/DefaultMenu';
import FezesForm from './form';
import './style.css';

class Colesterol extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
      showNovo: false,
      registros: [
        {
          descricao: 'descrição',
          data: '2022-03-21T10:15:30',
          aspectoGeral: 'Aspecto geral',
          protozoarios: 'Protozoários',
          helmintos: 'Helmintos',
          metodo: 'Método',
          observacoes: 'Observações'
        },
        {
          descricao: 'descrição',
          data: '2022-03-21T10:15:30',
          aspectoGeral: 'Aspecto geral',
          protozoarios: 'Protozoários',
          helmintos: 'Helmintos',
          metodo: 'Método',
          observacoes: 'Observações'
        },
        {
          descricao: 'descrição',
          data: '2022-03-21T10:15:30',
          aspectoGeral: 'Aspecto geral',
          protozoarios: 'Protozoários',
          helmintos: 'Helmintos',
          metodo: 'Método',
          observacoes: 'Observações'
        },
        {
          descricao: 'descrição',
          data: '2022-03-21T10:15:30',
          aspectoGeral: 'Aspecto geral',
          protozoarios: 'Protozoários',
          helmintos: 'Helmintos',
          metodo: 'Método',
          observacoes: 'Observações'
        },
        {
          descricao: 'descrição',
          data: '2022-03-21T10:15:30',
          aspectoGeral: 'Aspecto geral',
          protozoarios: 'Protozoários',
          helmintos: 'Helmintos',
          metodo: 'Método',
          observacoes: 'Observações'
        }
      ]
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleNovo = this.toggleNovo.bind(this);
  }

  toggleNovo() {
    this.setState(prevState => ({
      showNovo: !prevState.showNovo
    }));
  }

  toggleMenu() {
    this.setState(prevState => ({
      showMenu: !prevState.showMenu
    }));
  }

  keyedList() {
    return this.state.registros.map((item, idx) => {
      item.key = idx;
      return item;
    });
  }

  render() {
    const columns = [
      {
        title: 'Data',
        dataIndex: 'data',
        key: 'data',
        width: 150,
        fixed: 'left'
      },
      {
        title: 'Descrição',
        fixed: 'left',
        width: 300,
        dataIndex: 'descricao',
        key: 'descricao'
      },
      {
        title: 'Aspecto Geral',
        width: 150,
        dataIndex: 'aspectoGeral',
        key: 'aspectoGeral'
      },
      {
        title: 'Protozoários',
        width: 150,
        dataIndex: 'protozoarios',
        key: 'protozoarios'
      },
      {
        title: 'Helmintos',
        width: 150,
        dataIndex: 'helmintos',
        key: 'helmintos'
      },
      {
        title: 'Método',
        width: 150,
        dataIndex: 'metodo',
        key: 'metodo'
      },
      {
        title: 'Observações',
        width: 150,
        dataIndex: 'observacoes',
        key: 'observacoes'
      }
    ];
    return (
      <div className="Fezes-container">
        <DefaultHeader username="Username" toggleMenu={this.toggleMenu} />
        <div>
          <Card
            title="Fezes"
            extra={
              <Button type="primary" onClick={() => this.toggleNovo()}>
                Novo
              </Button>
            }
          >
            <Table
              dataSource={this.keyedList()}
              columns={columns}
              scroll={{ x: 1500, y: 350 }}
              pagination={false}
            />
          </Card>
        </div>
        <DefaultFooter />

        <FezesForm
          registros={this.state.registros}
          showNovo={this.state.showNovo}
          toogleNovo={this.toggleNovo}
        />

        <DefaultMenu
          showMenu={this.state.showMenu}
          toggleMenu={this.toggleMenu}
        />
      </div>
    );
  }
}

export default Colesterol;
