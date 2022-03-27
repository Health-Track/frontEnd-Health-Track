/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Column } from '@ant-design/plots';
import { Col, Row } from 'antd';

import DefaultFooter from '../../components/DefaultFooter';
import DefaultHeader from '../../components/DeafultHeader';
import DefaultMenu from '../../components/DefaultMenu';
import formatDate from '../../utils/dateFormatter';

import './style.css';
import convertToPlainText from '../../utils/camelCaseConverter';

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

    const colestrerolResults = [
      {
        data: formatDate(new Date('2021-11-21T10:15:30')),
        colesterolTotal: 9,
        colesterolHDL: '20',
        colesterolNaoHDL: '30',
        colesterolLDL: '40',
        relacaoTotalHDL: '21.3'
      },
      {
        data: formatDate(new Date('2021-12-21T10:15:30')),
        colesterolTotal: 13,
        colesterolHDL: '23',
        colesterolNaoHDL: '31',
        colesterolLDL: '42',
        relacaoTotalHDL: '21.9'
      },
      {
        data: formatDate(new Date('2022-01-21T10:15:30')),
        colesterolTotal: 9,
        colesterolHDL: '15',
        colesterolNaoHDL: '30',
        colesterolLDL: '33',
        relacaoTotalHDL: '21.3'
      },
      {
        data: formatDate(new Date('2022-02-21T10:15:30')),
        colesterolTotal: 15,
        colesterolHDL: '30',
        colesterolNaoHDL: '26',
        colesterolLDL: '31',
        relacaoTotalHDL: '22.3'
      },
      {
        data: formatDate(new Date('2022-03-21T10:15:30')),
        colesterolTotal: 10,
        colesterolHDL: '20',
        colesterolNaoHDL: '30',
        colesterolLDL: '40',
        relacaoTotalHDL: '21.3'
      }
    ]

    const config = {
      colestrerolResults,
      xField: 'data',
      yField: 'colesterolTotal',
      label: {
        position: 'middle',
        style: {
          fill: '#FFFFFF',
          opacity: 0.6,
        },
      },
      xAxis: {
        label: {
          autoHide: true,
          autoRotate: false,
        },
      },
      meta: {
        type: {
          alias: 'teste1',
        },
        sales: {
          alias: 'teste2',
        },
      },
    };

    return (
      <div className="homepage-container">
        <DefaultHeader
          username="Username"
          toggleMenu={this.toggleMenu}
          loggout={this.loggout}
        />
        <div className="chart-container">
          <Row id="first-row-chart">
            <Col span={11}>
              <Column
              data={config.colestrerolResults}
              xField={config.xField}
              yField={config.yField}
              label={config.label}
              xAxis={config.xAxis}
              meta={config.meta}
            />
            </Col>
            <Col span={2}/>
            <Col span={11}>
              <h1>{convertToPlainText(Object.keys(colestrerolResults[0])[1])}</h1>
              <Column
              data={config.colestrerolResults}
              xField={config.xField}
              yField={config.yField}
              label={config.label}
              xAxis={config.xAxis}
              meta={config.meta}
            />
            </Col>
          </Row>
          <Row id="second-row-chart">
            <Col span={11}>
              <Column
              data={config.colestrerolResults}
              xField={config.xField}
              yField={config.yField}
              label={config.label}
              xAxis={config.xAxis}
              meta={config.meta}
            />
            </Col>
            <Col span={2}/>
            <Col span={11}>
              <Column
              data={config.colestrerolResults}
              xField={config.xField}
              yField={config.yField}
              label={config.label}
              xAxis={config.xAxis}
              meta={config.meta}
            />
            </Col>
          </Row>
        </div>
        <DefaultMenu
          showMenu={this.state.showMenu}
          toggleMenu={this.toggleMenu}
        />
        <DefaultFooter />
      </div>
    );
  }
}

export default HomePage;
