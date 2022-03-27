/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Col, Row } from 'antd';

import DefaultHeader from '../../components/DeafultHeader';
import DefaultMenu from '../../components/DefaultMenu';
import formatDate from '../../utils/dateFormatter';
import convertToPlainText from '../../utils/camelCaseConverter';
import ColumnChart from '../../components/ColumnChart';

import './style.css';

export default function HomePage() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  const loggout = () => {
    alert('Sair');
  }

  let auxCounter = 0;

  const colestrerolResults = [
    {
      colesterolTotal: 9,
      colesterolHDL: 20,
      colesterolNaoHDL: 30,
      colesterolLDL: 40,
      relacaoTotalHDL: 21.3,
      data: formatDate(new Date('2021-11-21T10:15:30'))
    },
    {
      colesterolTotal: 13,
      colesterolHDL: 23,
      colesterolNaoHDL: 31,
      colesterolLDL: 42,
      relacaoTotalHDL: 21.9,
      data: formatDate(new Date('2021-12-21T10:15:30'))
    },
    {
      colesterolTotal: 9,
      colesterolHDL: 15,
      colesterolNaoHDL: 30,
      colesterolLDL: 33,
      relacaoTotalHDL: 21.3,
      data: formatDate(new Date('2022-01-21T10:15:30'))
    },
    {
      colesterolTotal: 15,
      colesterolHDL: 30,
      colesterolNaoHDL: 26,
      colesterolLDL: 31,
      relacaoTotalHDL: 22.3,
      data: formatDate(new Date('2022-02-21T10:15:30'))
    },
    {
      colesterolTotal: 10,
      colesterolHDL: 20,
      colesterolNaoHDL: 30,
      colesterolLDL: 40,
      relacaoTotalHDL: 21.3,
      data: formatDate(new Date('2022-03-21T10:15:30'))
    }
  ]

  const config = {
    data: colestrerolResults,
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
    color: '#000000'
  };

  return (
    <div className="homepage-container">
      <DefaultHeader
        username="Username"
        toggleMenu={toggleMenu}
        loggout={loggout}
      />
      <div className="chart-container">
        <Row id="first-row-chart">
            {Object.keys(colestrerolResults[0]).map(key => {
              if(key === 'data' || auxCounter > 3) {
                return null
              }
              config.yField = key;
              auxCounter += 1;
              return (
                <Col span={11}>
                  <h1>{convertToPlainText(key)}</h1>
                  <ColumnChart { ...config } />
                </Col>
              )
            })}
        </Row>
      </div>
      <DefaultMenu
        showMenu={showMenu}
        toggleMenu={toggleMenu}
      />
    </div>
  );
}

