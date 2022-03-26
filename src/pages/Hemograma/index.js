import React from 'react';
import { Button, Card, Table } from 'antd';
import 'antd/dist/antd.css';
import DefaultFooter from '../../components/DefaultFooter';
import DefaultHeader from '../../components/DeafultHeader';
import DefaultMenu from '../../components/DefaultMenu';
import HemogramaForm from './form';
import './style.css';

class Hemograma extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
      showNovo: false,
      registros: [
        {
          descricao:
            'Descrição descricao descricao Descrição descricao descricao ',
          data: '2022-03-21T10:15:30',
          hemoglobina: 1.5,
          hemacrotito: 2.5,
          hematimetria: 3.5,
          reticulocitos: 4.5,
          volumeCorpuscular: 5.5,
          hemoglobinaCorpuscular: 6.5,
          concentracaoHemoglobina: 7.5,
          indiceAnisocitose: 8.5
        },
        {
          descricao: 'Descrição',
          data: '2022-03-21T10:15:30',
          hemoglobina: 1.5,
          hemacrotito: 2.5,
          hematimetria: 3.5,
          reticulocitos: 4.5,
          volumeCorpuscular: 5.5,
          hemoglobinaCorpuscular: 6.5,
          concentracaoHemoglobina: 7.5,
          indiceAnisocitose: 8.5
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
        title: 'Descricao',
        fixed: 'left',
        width: 300,
        dataIndex: 'descricao',
        key: 'descricao'
      },
      {
        title: 'Hemoglobina',
        width: 150,
        dataIndex: 'hemoglobina',
        key: 'hemoglobina'
      },
      {
        title: 'Hematimetria',
        width: 150,
        dataIndex: 'hematimetria',
        key: 'hematimetria'
      },
      {
        title: 'Hemacrotito',
        width: 150,
        dataIndex: 'hemacrotito',
        key: 'hemacrotito'
      },
      {
        title: 'Reticulocitos',
        width: 150,
        dataIndex: 'reticulocitos',
        key: 'reticulocitos'
      },
      {
        title: 'Volume Corpuscular',
        dataIndex: 'volumeCorpuscular',
        width: 150,
        key: 'volumeCorpuscular'
      },
      {
        title: 'Hemoglobina Corpuscular',
        dataIndex: 'hemoglobinaCorpuscular',
        width: 150,
        key: 'hemoglobinaCorpuscular'
      },
      {
        title: 'Concentracao de Hemoglobina',
        width: 150,
        dataIndex: 'concentracaoHemoglobina',
        key: 'concentracaoHemoglobina'
      },
      {
        title: 'Indice Anisocitose',
        width: 150,
        dataIndex: 'indiceAnisocitose',
        key: 'indiceAnisocitose'
      }
    ];
    return (
      <div className="Hemograma-container">
        <DefaultHeader
          username="Username"
          toggleMenu={this.toggleMenu}
          loggout={this.loggout}
        />
        <div>
          <Card
            title="Hemograma"
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

        <HemogramaForm
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

export default Hemograma;
