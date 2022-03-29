import React, { useCallback } from 'react';
import { Button, Drawer, Form, Input, notification } from 'antd';
import { CheckCircleOutlined, WarningFilled } from '@ant-design/icons';

import api from '../../services/apiClient';
import useForm from '../../hooks/useForm';

import 'antd/dist/antd.css';
import './style.css';

function HemogramaForm(props) {

  const initialValue = {
    descricao: '',
    data: '',
    hemoglobina: '',
    hemacrotito: '',
    hematimetria: '',
    reticulocitos: '',
    volumeCorpuscular: '',
    hemoglobinaCorpuscular: '',
    concentracaoHemoglobina: '',
    indiceAnisocitose: ''
  };

  const { handleChange, values, clearForm } = useForm(initialValue)

  const submitExam = useCallback(async () => {
    await api.post('/exame/hemograma', {
      date: values.data,
      ...values
    }).then(() => {
      notification.success({
        message: 'Cadastro Efetuado',
        description: 'Seu cadastro foi concluído!',
        icon: <CheckCircleOutlined style={{ color: '#28730a' }} />,
        placement: 'topLeft'
      });
      clearForm()
      props.toogleNovo();
    }).catch(() => {
      notification.warning({
        message: 'Erro',
        description: 'Erro ao cadastrar seu exame. Tente novamente.',
        icon: <WarningFilled style={{ color: '#e70f0f' }} />
      });
    })
  })

  return (
    <Drawer
      title="Exame de Hemograma"
      visible={props.showNovo}
      onClose={props.toogleNovo}
      placement="right"
    >
      <Form>
        <Form.Item
          label="Data"
          rules={[{ required: true, message: 'Escolha a data do exame!' }]}
        >
          <Input
            id="data"
            value={values.data}
            placeholder="Selecione uma data"
            name="data"
            onChange={handleChange}
            className="health-track-input"
            type='datetime-local'
          />
        </Form.Item>
        <Form.Item
          label="Descricao"
          rules={[
            { required: true, message: 'Dê uma descrição para o hemograma!' }
          ]}
        >
          <Input
            type="input"
            id="descricao"
            value={values.descricao}
            name="descricao"
            onChange={handleChange}
            className="health-track-input"
          />
        </Form.Item>
        <Form.Item label="Hemoglobina">
          <Input
            type="input"
            id="hemoglobina"
            value={values.hemoglobina}
            name="hemoglobina"
            onChange={handleChange}
            className="health-track-input"
          />
        </Form.Item>
        <Form.Item label="Hemacrotito">
          <Input
            type="input"
            id="hemacrotito"
            value={values.hemacrotito}
            name="hemacrotito"
            onChange={handleChange}
            className="health-track-input"
          />
        </Form.Item>
        <Form.Item label="Hematimetria">
          <Input
            type="input"
            id="hematimetria"
            value={values.hematimetria}
            name="hematimetria"
            onChange={handleChange}
            className="health-track-input"
          />
        </Form.Item>
        <Form.Item label="Reticulocitos">
          <Input
            type="input"
            id="reticulocitos"
            value={values.reticulocitos}
            name="reticulocitos"
            onChange={handleChange}
            className="health-track-input"
          />
        </Form.Item>
        <Form.Item label="Volume Corpuscular">
          <Input
            type="input"
            id="volumeCorpuscular"
            value={values.volumeCorpuscular}
            name="volumeCorpuscular"
            onChange={handleChange}
            className="health-track-input"
          />
        </Form.Item>
        <Form.Item label="Hemoglobina Corpuscular">
          <Input
            type="input"
            id="hemoglobinaCorpuscular"
            value={values.hemoglobinaCorpuscular}
            name="hemoglobinaCorpuscular"
            onChange={handleChange}
            className="health-track-input"
          />
        </Form.Item>
        <Form.Item label="Concentracao Hemoglobina">
          <Input
            type="input"
            id="concentracaoHemoglobina"
            value={values.concentracaoHemoglobina}
            name="concentracaoHemoglobina"
            onChange={handleChange}
            className="health-track-input"
          />
        </Form.Item>
        <Form.Item label="Indice Anisocitose">
          <Input
            type="input"
            id="indiceAnisocitose"
            value={values.indiceAnisocitose}
            name="indiceAnisocitose"
            onChange={handleChange}
            className="health-track-input"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            onClick={submitExam}
            style={{ width: '100%' }}
          >
            Salvar
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
}

export default HemogramaForm;
