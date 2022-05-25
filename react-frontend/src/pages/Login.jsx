import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Annoucement from '../components/Annoucement';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsleter';

const Wrapper = styled.div`
  margin: 10px 10%;
  padding: 10px 0px;
  width: 80%;
  background-color: #fff;
  display: flex;
`;

const Container = styled.div`
  width: 100%;
  min-height: 100%;
  /* background-color: #f5f5f5; */
  display: flex;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;
const LoginFormContainer = styled.div`
  width: 800px;
  height: 400px;
  display: flex;
  border-radius: 10px;
`;
const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title1 = styled.h1`
  font-size: 40px;
  margin-bottom: 20px;
`;
const Input = styled.input`
  outline: none;
  border: none;
  width: 370px;
  padding: 15px;
  border-radius: 10px;
  background-color: #edf5f3;
  margin: 5px 0;
  font-size: 14px;
`;
const Button = styled.button`
  border: none;
  margin-top: 20px;
  outline: none;
  padding: 12px 0;
  background-color: #6fbff1;
  color: white;
  border-radius: 20px;
  width: 180px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
`;
const Text = styled.p`
  margin-top: 10px;
`;
const Text2 = styled.p`
  margin-top: 10px;
  color: #6fbff1;
  font-weight: 500;
`;
const Login = () => {
  const [user, setUser] = useState({ email: '', password: '' });

  const handleChange = ({ currentTarget: Input }) => {
    setUser({ ...user, [Input.name]: Input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8080/api/v1/login', null, { params: user })
      .then((res) => {
        if (res.data.access_token) {
          localStorage.setItem('user', JSON.stringify(res.data));
          window.location = '/';
        }
      });
  };

  return (
    <div style={{ backgroundColor: 'lightgray', padding: '10px 0px' }}>
      <Annoucement/>
      <Navbar/>
      <Wrapper>
        <Container>
          <LoginFormContainer>
            <Left>
              <Form onSubmit={handleSubmit}>
                <Title1>Login</Title1>
                <Input
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  value={user.email}
                  required
                />
                <Input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  value={user.password}
                  required
                />
                <Button>Login</Button>
                <Text>Do not have an account, </Text>
                <Link
                  to="/register"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <Text2>SIGN UP</Text2>
                </Link>
              </Form>
            </Left>
          </LoginFormContainer>
        </Container>
      </Wrapper>
      <Newsletter/>
      <Navbar/>
    </div>
  );
};

export default Login;
