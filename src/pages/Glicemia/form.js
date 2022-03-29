import React, { useCallback } from 'react';
import { Button, Drawer, Form, Input, notification } from 'antd';
import { CheckCircleOutlined, WarningFilled } from '@ant-design/icons';

import api from '../../services/apiClient';
import useForm from '../../hooks/useForm';

import './style.css';

function GlicemiaForm(props) {
  const initialValue = {
    medicao: '',
    dataMedicao: ''
  };

  const { handleChange, values, clearForm } = useForm(initialValue);

  const submitExam = useCallback(async () => {
    await api
      .post('/exame/glicemia', {
        dataMedicao: values.data,
        ...values
      })
      .then(() => {
        notification.success({
          message: 'Cadastro Efetuado',
          description: 'Seu cadastro foi concluído!',
          icon: <CheckCircleOutlined style={{ color: '#28730a' }} />,
          placement: 'topLeft'
        });
        clearForm();
        props.toogleNovo();
      })
      .catch(() => {
        notification.warning({
          message: 'Erro',
          description: 'Erro ao cadastrar seu exame. Tente novamente.',
          icon: <WarningFilled style={{ color: '#e70f0f' }} />
        });
      });
  });

  return (
    <Drawer
      title="Exame de Glicemia"
      visible={props.showNovo}
      onClose={props.toogleNovo}
      placement="right"
    >
      <Form>
        <Form.Item
          label="Medição"
          rules={[{ required: true, message: 'Informe uma medição' }]}
        >
          <Input
            type="input"
            id="medicao"
            value={values.medicao}
            name="medicao"
            onChange={handleChange}
            className="health-track-input"
          />
        </Form.Item>
        <Form.Item
          label="Data"
          rules={[{ required: true, message: 'Escolha a data do exame!' }]}
        >
          <Input
            id="dataMedicao"
            value={values.dataMedicao}
            name="dataMedicao"
            onChange={handleChange}
            className="health-track-input"
            type="datetime-local"
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

export default GlicemiaForm;
