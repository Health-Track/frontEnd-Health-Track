/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useCallback, useEffect } from 'react';
import { Button, Col, Row } from 'antd';

import DefaultHeader from '../../components/DeafultHeader';
import DefaultMenu from '../../components/DefaultMenu';
import formatDate from '../../utils/dateFormatter';
import convertToPlainText from '../../utils/camelCaseConverter';
import ColumnChart from '../../components/ColumnChart';
import api from '../../services/apiClient';

import './style.css';

export default function HomePage() {
  const [showMenu, setShowMenu] = useState(false);
  const [loadExam, setLoadExam] = useState('colesterol');
  const [result, setResult] = useState([]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  let auxCounter = 0;

  const colors = ['#147CD9', '#08860C', '#C83608', '#930620'];
  const exams = [
    { urlLabel: 'colesterol', label: 'Colesterol' },
    { urlLabel: 'hemograma', label: 'Hemograma' },
    { urlLabel: 'glicemia', label: 'Glicemia' },
    { urlLabel: 'urina', label: 'Urina' },
    { urlLabel: 'fezes', label: 'Fezes' }
  ];

  const requestExamInformation = useCallback(async () => {
    return api.get(`/exame/${loadExam.toLowerCase()}/listar`).then(resp => {
      setResult(
        [...resp.data].map(exam => {
          const obj = { ...exam };
          obj.data = formatDate(new Date(exam.data));

          return obj;
        })
      );
    });
  });

  const config = {
    data: result,
    xField: 'data',
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 0.6
      }
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false
      }
    }
  };

  useEffect(() => {
    requestExamInformation();
  }, [result]);

  return (
    <div className="homepage-container">
      <DefaultHeader username={localStorage.getItem('@Health-track:email')} toggleMenu={toggleMenu} />
      <div className="home-buttons-container">
        {exams.map(exam => {
          return (
            <Button
              name={exam.urlLabel}
              className="exam-button"
              onClick={() => {
                setLoadExam(exam.urlLabel);
                requestExamInformation();
              }}
            >
              {exam.label}
            </Button>
          );
        })}
      </div>
      <div className="chart-container">
        <Row id="first-row-chart">
          {result.length > 0 &&
            Object.keys(result[0]).map(key => {
              const excludedParams = ['descricao', 'data', 'id'];
              if (excludedParams.includes(key) || auxCounter > 3) {
                return null;
              }
              config.yField = key;
              config.color = colors[auxCounter];
              auxCounter += 1;
              return (
                <Col span={11}>
                  <h1>{convertToPlainText(key)}</h1>
                  <ColumnChart {...config} />
                </Col>
              );
            })}
        </Row>
      </div>
      <DefaultMenu showMenu={showMenu} toggleMenu={toggleMenu} />
    </div>
  );
}
