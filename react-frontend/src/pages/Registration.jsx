import React from 'react';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Newsletter from '../components/Newsleter';
import Footer from '../components/Footer';
import Annoucement from '../components/Annoucement';
import Navbar from '../components/Navbar';
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
const Register = () => {
  const onFinish = async (values) => {
    AuthService.register(values.email, values.password).then(
      (response) => {
        alert('Hãy kiểm tra Email và xác nhận để hoàn tất đăng ký!');
        window.location = '/login';
      },
      (error) => {
        if (error.response.status === 500) {
          alert('Email này đã được sử dụng!');
        }
      }
    );
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <Annoucement />
      <Navbar />
      <Container>
        <Wrapper>
          <h1>Đăng ký</h1>
          <FormContainer>
            <Form
              name="basic"
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
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Confirm Password không được để trống',
                  },
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject('Mật khẩu không giống!');
                    },
                  }),
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
                  Đăng ký
                </Button>
              </Form.Item>
            </Form>
          </FormContainer>
          <p>
            Bạn đã có tài khoản? <Link to="/login">Đăng nhập</Link>
          </p>
        </Wrapper>
      </Container>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Register;
