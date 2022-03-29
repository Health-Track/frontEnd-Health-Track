import React, { useState, useEffect, useCallback } from 'react';
import { Button, Card, Table } from 'antd';

import DefaultFooter from '../../components/DefaultFooter';
import DefaultHeader from '../../components/DeafultHeader';
import DefaultMenu from '../../components/DefaultMenu';
import GlicemiaForm from './form';
import api from '../../services/apiClient';

import './style.css';

export default function Glicemia() {
  const [showMenu, setShowMenu] = useState(false);
  const [showNovoRegistroMenu, setShowNovoRegistroMenu] = useState(false);
  const [registros, setRegistros] = useState([]);

  const toggleNovoRegistroMenu = () => {
    setShowNovoRegistroMenu(!showNovoRegistroMenu);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const columns = [
    {
      title: 'Medição',
      dataIndex: 'medicao',
      key: 'medicao',
      width: 150,
      fixed: 'left'
    },
    {
      title: 'Data Medição',
      fixed: 'left',
      width: 300,
      dataIndex: 'data',
      key: 'data'
    }
  ];

  useEffect(() => {
    loadGlicemiaExams();
  }, [registros]);

  const loadGlicemiaExams = useCallback(async () => {
    await api
      .get('/exame/glicemia/listar')
      .then(resp => {
        setRegistros([...resp.data]);
      })
  });

  return (
    <div className="Glicemia-container">
      <DefaultHeader username="Username" toggleMenu={toggleMenu} />
      <div>
        <Card
          title="Glicemia"
          extra={
            <Button type="primary" onClick={toggleNovoRegistroMenu}>
              Novo
            </Button>
          }
        >
          {registros.length > 0 && (
            <Table
              dataSource={registros.map((item, idx) => {
                item.key = idx;
                return item;
              })}
              columns={columns}
              scroll={{ x: 1500, y: 350 }}
              pagination={false}
            />
          )}
        </Card>
      </div>
      <DefaultFooter />

      <GlicemiaForm
        registros={registros}
        showNovo={showNovoRegistroMenu}
        toogleNovo={toggleNovoRegistroMenu}
      />

      <DefaultMenu showMenu={showMenu} toggleMenu={toggleMenu} />
    </div>
  );
}
