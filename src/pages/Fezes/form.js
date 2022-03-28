import React from 'react';
import { Button, Drawer, Form, Input } from 'antd';

import 'antd/dist/antd.css';
import './style.css';

class FezesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      descricao: '',
      data: '',
      aspectoGeral: '',
      protozoarios: '',
      helmintos: '',
      metodo: '',
      observacoes: ''
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
      aspectoGeral: '',
      protozoarios: '',
      helmintos: '',
      metodo: '',
      observacoes: ''
    });
  }

  render() {
    return (
      <Drawer
        title="Exame de Fezes"
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
              { required: true, message: 'Dê uma descrição para o Exame!' }
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
          <Form.Item label="Aspecto Geral">
            <Input
              type="input"
              id="aspectoGeral"
              value={this.state.aspectoGeral}
              name="aspectoGeral"
              onChange={e => this.handleChange(e)}
              className="health-track-input"
            />
          </Form.Item>
          <Form.Item label="Protozoários">
            <Input
              type="input"
              id="protozoarios"
              value={this.state.protozoarios}
              name="protozoarios"
              onChange={e => this.handleChange(e)}
              className="health-track-input"
            />
          </Form.Item>
          <Form.Item label="Helmintos">
            <Input
              type="input"
              id="helmintos"
              value={this.state.helmintos}
              name="helmintos"
              onChange={e => this.handleChange(e)}
              className="health-track-input"
            />
          </Form.Item>
          <Form.Item label="Método">
            <Input
              type="input"
              id="metodo"
              value={this.state.metodo}
              name="metodo"
              onChange={e => this.handleChange(e)}
              className="health-track-input"
            />
          </Form.Item>
          <Form.Item label="Observações">
            <Input
              type="input"
              id="observacoes"
              value={this.state.observacoes}
              name="observacoes"
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

export default FezesForm;
