import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://media.baamboozle.com/uploads/images/14381/1620639865_121714.jpeg")
      center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width:"75%"})}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Button = styled.button`
  margin-top: 20px;
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Toast = styled.div`
  display: inline-block;
  display: flex;
  background-color: #fff;
  padding: 20px 0;    
  border-left: 4px solid;
  min-width: 400px;
  max-width: 450px;
  align-items: center;
  border-radius: 2px ;
  box-shadow: 0 5px 8px rgba(0,0,0,0.08);
  transition: all linear 0.3s;
  position: fixed;
  top: 32px;
  right: 32px;
`;

const Register = () => {
  return (
    <Container>
      {/* <Toast>Đăng kí thành công</Toast> */}
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="Name" />
          <Input placeholder="Last name" />
          <Input placeholder="Username" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm password" />
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
