import React from 'react';
import { Button, Drawer, Form, Input } from 'antd';

import 'antd/dist/antd.css';
import './style.css';

class HemogramaForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      hemoglobina: '',
      hemacrotito: '',
      hematimetria: '',
      reticulocitos: '',
      volumeCorpuscular: '',
      hemoglobinaCorpuscular: '',
      concentracaoHemoglobina: '',
      indiceAnisocitose: ''
    });
  }

  render() {
    return (
      <Drawer
        title="Adicionar Informações exame Hemograma"
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
              { required: true, message: 'Dê uma descrição para o hemograma!' }
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
          <Form.Item label="Hemoglobina">
            <Input
              type="input"
              id="hemoglobina"
              value={this.state.hemoglobina}
              name="hemoglobina"
              onChange={e => this.handleChange(e)}
              className="health-track-input"
            />
          </Form.Item>
          <Form.Item label="Hemacrotito">
            <Input
              type="input"
              id="hemacrotito"
              value={this.state.hemacrotito}
              name="hemacrotito"
              onChange={e => this.handleChange(e)}
              className="health-track-input"
            />
          </Form.Item>
          <Form.Item label="Hematimetria">
            <Input
              type="input"
              id="hematimetria"
              value={this.state.hematimetria}
              name="hematimetria"
              onChange={e => this.handleChange(e)}
              className="health-track-input"
            />
          </Form.Item>
          <Form.Item label="Reticulocitos">
            <Input
              type="input"
              id="reticulocitos"
              value={this.state.reticulocitos}
              name="reticulocitos"
              onChange={e => this.handleChange(e)}
              className="health-track-input"
            />
          </Form.Item>
          <Form.Item label="Volume Corpuscular">
            <Input
              type="input"
              id="volumeCorpuscular"
              value={this.state.volumeCorpuscular}
              name="volumeCorpuscular"
              onChange={e => this.handleChange(e)}
              className="health-track-input"
            />
          </Form.Item>
          <Form.Item label="Hemoglobina Corpuscular">
            <Input
              type="input"
              id="hemoglobinaCorpuscular"
              value={this.state.hemoglobinaCorpuscular}
              name="hemoglobinaCorpuscular"
              onChange={e => this.handleChange(e)}
              className="health-track-input"
            />
          </Form.Item>
          <Form.Item label="Concentracao Hemoglobina">
            <Input
              type="input"
              id="concentracaoHemoglobina"
              value={this.state.concentracaoHemoglobina}
              name="concentracaoHemoglobina"
              onChange={e => this.handleChange(e)}
              className="health-track-input"
            />
          </Form.Item>
          <Form.Item label="Indice Anisocitose">
            <Input
              type="input"
              id="indiceAnisocitose"
              value={this.state.indiceAnisocitose}
              name="indiceAnisocitose"
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

export default HemogramaForm;
