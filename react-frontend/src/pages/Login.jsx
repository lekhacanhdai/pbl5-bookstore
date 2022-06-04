import React from 'react';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { Button, Form, Input, Modal } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Newsletter from '../components/Newsleter';
import Footer from '../components/Footer';
import Annoucement from '../components/Annoucement';
import Navbar from '../components/Navbar';
import { useState } from 'react';
import AuthService from '../service/AuthService';

const Container = styled.div`
  width: 100%;
  background-color: lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 80%;
  background-color: white;
  border-radius: 10px;
  margin: 10px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0px;
`;
const FormContainer = styled.div`
  width: 100%;
`;
const ForgotPw = styled.p`
  color: #1e90fc;
  :hover {
    color: #48a4fa;
    cursor: pointer;
  }
`;

const Login = () => {
  const onFinish = async (values) => {
    AuthService.login(values.email, values.password).then(
      (response) => {
        window.location = '/';
      },
      (error) => {
        if (error.response.status === 401) {
          alert('Email hoặc Password không đúng!');
        }
      }
    );
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Annoucement />
      <Navbar />
      <Container>
        <Wrapper>
          <h1>Đăng nhập</h1>
          <FormContainer>
            <Form
              name="login"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 10,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Email không được để trống!',
                  },
                  {
                    type: 'email',
                    message: 'Bạn phải nhập email!',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Password không được để trống!',
                  },
                  {
                    min: 4,
                    message: 'Mật khẩu ít nhất 4 kí tự',
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 11,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit">
                  Đăng nhập
                </Button>
              </Form.Item>
            </Form>
          </FormContainer>
          <p>
            Bạn chưa có tài khoản? <Link to="/register">Đăng ký</Link>
          </p>
          <ForgotPw onClick={showModal}>Quên mật khẩu ?</ForgotPw>
          <Modal
            title="Basic Modal"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          ></Modal>
        </Wrapper>
      </Container>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Login;
