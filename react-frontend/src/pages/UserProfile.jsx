import React from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Button, Form, Input } from 'antd';
import Navbar from '../components/Navbar';
import Annoucement from '../components/Annoucement';
import Newsletter from '../components/Newsleter';
import Footer from '../components/Footer';

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
  padding: 20px;
`;
const Content = styled.div`
  display: flex;
  width: 100%;
`;
const AvatarContainer = styled.div`
  flex: 1;
`;
const InfoContainer = styled.div`
  flex: 3;
  align-items: center;
  justify-content: center;
`;

const Profile = () => {
  return (
    <>
      <Annoucement />
      <Navbar />
      <Container>
        <Wrapper>
          <h1>Profile</h1>
          <Content>
            <AvatarContainer></AvatarContainer>
            <InfoContainer></InfoContainer>
          </Content>
        </Wrapper>
      </Container>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Profile;
