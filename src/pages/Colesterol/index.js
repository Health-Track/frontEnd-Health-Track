import React from 'react';
import { Button, Card, Table } from 'antd';
import 'antd/dist/antd.css';
import DefaultFooter from '../../components/DefaultFooter';
import DefaultHeader from '../../components/DeafultHeader';
import DefaultMenu from '../../components/DefaultMenu';
import ColesterolForm from './form';
import './style.css';

class Colesterol extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
      showNovo: false,
      registros: [
        {
          descricao:
            'Descricao descricao descricao descricao descricaodescricao descricaodescricao descricaodescricao descricaodescricao descricaodescricao descricao descricao descricao descricao descricaodescricao descricaodescricao descricaodescricao descricao',
          data: '2022-03-21T10:15:30',
          colesterolTotal: '10',
          colesterolHDL: '20',
          colesterolNaoHDL: '30',
          colesterolLDL: '40',
          relacaoTotalHDL: '21.3'
        },
        {
          descricao: 'Descricao',
          data: '2022-03-21T10:15:30',
          colesterolTotal: '10',
          colesterolHDL: '20',
          colesterolNaoHDL: '30',
          colesterolLDL: '40',
          relacaoTotalHDL: '21.3'
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

  loggout() {
    alert('Sair');
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
        title: 'Colesterol Total',
        width: 150,
        dataIndex: 'colesterolTotal',
        key: 'colesterolTotal'
      },
      {
        title: 'Colesterol HDL',
        width: 150,
        dataIndex: 'colesterolHDL',
        key: 'colesterolHDL'
      },
      {
        title: 'Colesterol Nao HDL',
        width: 150,
        dataIndex: 'colesterolNaoHDL',
        key: 'colesterolNaoHDL'
      },
      {
        title: 'Colesterol LDL',
        width: 150,
        dataIndex: 'colesterolLDL',
        key: 'colesterolLDL'
      },
      {
        title: 'Relacao Total HDL',
        dataIndex: 'relacaoTotalHDL',
        width: 150,
        key: 'relacaoTotalHDL'
      }
    ];
    return (
      <div className="Colesterol-container">
        <DefaultHeader
          username="Username"
          toggleMenu={this.toggleMenu}
          loggout={this.loggout}
        />
        <div>
          <Card
            title="Colesterol"
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

        <ColesterolForm
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
