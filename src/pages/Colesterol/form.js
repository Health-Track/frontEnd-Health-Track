import React, { useCallback } from 'react';
import { Button, Drawer, Form, Input } from 'antd';

import api from '../../services/apiClient';
import useForm from '../../hooks/useForm';

import './style.css';

function ColesterolForm(props) {
  const initialValue = {
    descricao: '',
    data: '',
    colesterolTotal: '',
    colesterolHDL: '',
    colesterolNaoHDL: '',
    colesterolLDL: '',
    relacaoTotalHDL: ''
  };

  const { handleChange, values, clearForm } = useForm(initialValue)

  const submitExam = useCallback(async () => {
    await api.post('/exame/colesterol', {
      dataMedicao: values.data,
      ...values
    }).then(() => {
      console.log("SUCCESS!!!")
      clearForm()
      props.toogleNovo();
    }).catch(() => {
      console.log("Erro ao cadastrar exame de colesterol");
    })
  })

  // requestLogin() {
  //   props.registros.push(state);
  //   limparForm();
  //   props.toogleNovo();
  // }

  return (
    <Drawer
      title="Exame de Colesterol"
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
            { required: true, message: 'Dê uma descrição para o Colesterol!' }
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
        <Form.Item label="Colesterol Total">
          <Input
            type="input"
            id="colesterolTotal"
            value={values.colesterolTotal}
            name="colesterolTotal"
            onChange={handleChange}
            className="health-track-input"
          />
        </Form.Item>
        <Form.Item label="Colesterol HDL">
          <Input
            type="input"
            id="colesterolHDL"
            value={values.colesterolHDL}
            name="colesterolHDL"
            onChange={handleChange}
            className="health-track-input"
          />
        </Form.Item>
        <Form.Item label="Colesterol Nao HDL">
          <Input
            type="input"
            id="colesterolNaoHDL"
            value={values.colesterolNaoHDL}
            name="colesterolNaoHDL"
            onChange={handleChange}
            className="health-track-input"
          />
        </Form.Item>
        <Form.Item label="Colesterol LDL">
          <Input
            type="input"
            id="colesterolLDL"
            value={values.colesterolLDL}
            name="colesterolLDL"
            onChange={handleChange}
            className="health-track-input"
          />
        </Form.Item>
        <Form.Item label="Relacao Total HDL">
          <Input
            type="input"
            id="relacaoTotalHDL"
            value={values.relacaoTotalHDL}
            name="relacaoTotalHDL"
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

export default ColesterolForm;
