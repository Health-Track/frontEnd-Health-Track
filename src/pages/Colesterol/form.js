import React from 'react';
import { Button, Drawer, Form, Input } from 'antd';

import 'antd/dist/antd.css';
import './style.css';

class ColesterolForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      descricao: '',
      data: '',
      colesterolTotal: '',
      colesterolHDL: '',
      colesterolNaoHDL: '',
      colesterolLDL: '',
      relacaoTotalHDL: ''
    };
  }

  handleChange(e) {
    this.setState(() => ({
      [e.target.name]: e.target.value
    }));
  }

  requestLogin() {
    this.props.registros.push(this.state);
    this.limparForm();
    this.props.toogleNovo();
  }

  limparForm() {
    this.setState({
      descricao: '',
      data: '',
      colesterolTotal: '',
      colesterolHDL: '',
      colesterolNaoHDL: '',
      colesterolLDL: '',
      relacaoTotalHDL: ''
    });
  }

  render() {
    return (
      <Drawer
        title="Exame de Colesterol"
        visible={this.props.showNovo}
        onClose={this.props.toogleNovo}
        placement="right"
      >
        <Form>
          <Form.Item
            label="Data"
            rules={[{ required: true, message: 'Escolha a data do exame!' }]}
          >
            <Input
              id="data"
              value={this.state.data}
              placeholder="Selecione uma data"
              name="data"
              onChange={e => this.handleChange(e)}
              className="health-track-input"
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
              value={this.state.descricao}
              name="descricao"
              onChange={e => this.handleChange(e)}
              className="health-track-input"
            />
          </Form.Item>
          <Form.Item label="Colesterol Total">
            <Input
              type="input"
              id="colesterolTotal"
              value={this.state.colesterolTotal}
              name="colesterolTotal"
              onChange={e => this.handleChange(e)}
              className="health-track-input"
            />
          </Form.Item>
          <Form.Item label="Colesterol HDL">
            <Input
              type="input"
              id="colesterolHDL"
              value={this.state.colesterolHDL}
              name="colesterolHDL"
              onChange={e => this.handleChange(e)}
              className="health-track-input"
            />
          </Form.Item>
          <Form.Item label="Colesterol Nao HDL">
            <Input
              type="input"
              id="colesterolNaoHDL"
              value={this.state.colesterolNaoHDL}
              name="colesterolNaoHDL"
              onChange={e => this.handleChange(e)}
              className="health-track-input"
            />
          </Form.Item>
          <Form.Item label="Colesterol LDL">
            <Input
              type="input"
              id="colesterolLDL"
              value={this.state.colesterolLDL}
              name="colesterolLDL"
              onChange={e => this.handleChange(e)}
              className="health-track-input"
            />
          </Form.Item>
          <Form.Item label="Relacao Total HDL">
            <Input
              type="input"
              id="relacaoTotalHDL"
              value={this.state.relacaoTotalHDL}
              name="relacaoTotalHDL"
              onChange={e => this.handleChange(e)}
              className="health-track-input"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              onClick={() => this.requestLogin()}
              style={{ width: '100%' }}
            >
              Salvar
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    );
  }
}

export default ColesterolForm;
