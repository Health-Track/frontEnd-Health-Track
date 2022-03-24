import React from 'react';
import { Button, Form, Input } from 'antd';
import 'antd/dist/antd.css';
import './style.css';

class HemogramaForm extends React.Component {
  constructor() {
    super();
  }

  render() {
    const onFinish = values => {
      alert('Success:', values);
    };

    const onFinishFailed = errorInfo => {
      alert('Failed:', errorInfo);
    };

    return (
      <Form>
        <Form.Item
          label="Descricao"
          name="username"
          rules={[
            { required: true, message: 'Por favor adicione uma descrição!' }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Descricao"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Descricao"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Descricao"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Descricao"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Descricao"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Descricao"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Descricao"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Descricao"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Descricao"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default HemogramaForm;
