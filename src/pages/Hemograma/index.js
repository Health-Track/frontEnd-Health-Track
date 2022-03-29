import React, { useState, useEffect, useCallback } from 'react';
import { Button, Card, Table } from 'antd';

import DefaultFooter from '../../components/DefaultFooter';
import DefaultHeader from '../../components/DeafultHeader';
import DefaultMenu from '../../components/DefaultMenu';
import HemogramaForm from './form';

import './style.css';
import api from '../../services/apiClient';

function Hemograma() {

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

  useEffect(() => {
    loadHemogramExams();
  }, [registros])

  const loadHemogramExams = useCallback(async () => {
    await api.get('/exame/hemograma/listar')
             .then(resp => {
                setRegistros([...resp.data])
             })
             .catch(err => {
                console.log(err);
             })
  })

  return (
    <div className="Hemograma-container">
      <DefaultHeader username="Username" toggleMenu={toggleMenu} />
      <div>
        <Card
          title="Hemograma"
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
          />
         }
        </Card>
      </div>
      <DefaultFooter />

      <HemogramaForm
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

export default Hemograma;
