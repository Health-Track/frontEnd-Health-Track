import React, { useState, useEffect, useCallback } from 'react';
import { Button, Card, Table } from 'antd';

import DefaultFooter from '../../components/DefaultFooter';
import DefaultHeader from '../../components/DeafultHeader';
import DefaultMenu from '../../components/DefaultMenu';
import ColesterolForm from './form';
import api from '../../services/apiClient';

import './style.css';

export default function Colesterol() {
  const [showMenu, setShowMenu] = useState(false);
  const [showNovoRegistroMenu, setShowNovoRegistroMenu] = useState(false);
  const [registros, setRegistros] = useState([]);

  const toggleNovoRegistroMenu = () => {
    setShowNovoRegistroMenu(!showNovoRegistroMenu);
  }

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

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

  useEffect(() => {
    loadColesterolExams();
  }, [registros]);

  const loadColesterolExams = useCallback(async () => {
    await api.get('/exame/colesterol/listar')
             .then(resp => {
                setRegistros([...resp.data])
             })
  })

  return (
    <div className="Colesterol-container">
      <DefaultHeader username={localStorage.getItem('@Health-track:email')} toggleMenu={toggleMenu} />
      <div>
        <Card
          title="Colesterol"
          extra={
            <Button type="primary" onClick={toggleNovoRegistroMenu}>
              Novo
            </Button>
          }
        >
          {registros.length > 0 &&
          <Table
              dataSource={registros.map((item, idx) => {
                item.key = idx;
                return item;
              })}
              columns={columns}
              scroll={{ x: 1500, y: 350 }}
              pagination={false}
          />}
        </Card>
      </div>
      <DefaultFooter />

      <ColesterolForm
        registros={registros}
        showNovo={showNovoRegistroMenu}
        toogleNovo={toggleNovoRegistroMenu}
      />

      <DefaultMenu
        showMenu={showMenu}
        toggleMenu={toggleMenu}
      />
    </div>
  );

}
