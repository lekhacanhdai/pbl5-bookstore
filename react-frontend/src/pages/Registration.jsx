import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Annoucement from '../components/Annoucement';
import Newsletter from '../components/Newsleter';
import Footer from '../components/Footer';

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
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SignUpFormContainer = styled.div`
  width: 800px;
  height: 400px;
  display: flex;
  border-radius: 10px;
`;
const Right = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title2 = styled.h1`
  margin-top: 0;
  font-size: 35px;
  align-self: center;
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
const Error = styled.div`
  width: 370px;
  padding: 15px;
  margin: 5px 0;
  font-size: 14px;
  background-color: #f34646;
  color: white;
  border-radius: 5px;
  text-align: center;
`;
const Button = styled.button`
  border: none;
  margin-top: 20px;
  outline: none;
  padding: 12px 0;
  border-radius: 20px;
  width: 180px;
  font-weight: bold;
  font-size: 14px;
  background-color: #6fbff1;
  color: white;
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

const Register = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = ({ currentTarget: Input }) => {
    setUser({ ...user, [Input.name]: Input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = 'http://localhost:8080/api/users';
      const { data: res } = await axios.post(url, user);
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div style={{ backgroundColor: 'lightgray', padding: '10px 0px' }}>
      <Annoucement />
      <Navbar />
      <Wrapper>
        <Container>
          <SignUpFormContainer>
            <Right>
              <Form onSubmit={handleSubmit}>
                <Title2>Create Account</Title2>
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
                {error && <Error>{error}</Error>}
                <Button>Sign up</Button>
                <Text>Do you already have an account,</Text>
                <Link
                  to="/login"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <Text2>LOGIN</Text2>
                </Link>
              </Form>
            </Right>
          </SignUpFormContainer>
        </Container>
      </Wrapper>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Register;
