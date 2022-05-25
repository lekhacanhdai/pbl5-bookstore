import React from 'react';
import styled from 'styled-components';
import Advertisement from '../components/Advertisement';
import Genres from '../components/Genres';
import Books from '../components/Books';
import { Link } from 'react-router-dom';
import Annoucement from '../components/Annoucement';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsleter';
import Footer from '../components/Footer';

const Container = styled.div`
  background-color: lightgray;
`;
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #e5fbd7;
`;
const Title = styled.div`
  margin: 18px 40px;
  font-size: 20px;
  font-weight: 700px;
`;
const Wrapper = styled.div`
  margin: 10px 10%;
  width: 80%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;
const Button = styled.button`
  padding: 10px 50px;
  margin-bottom: 10px;
  border: 1px solid #bd1a1a;
  border-radius: 10px;
  background-color: white;
  color: #bd1a1a;
  font-weight: 500;
  font-size: 20px;
  :hover {
    cursor: pointer;
    background-color: #bd1a1a;
    color: white;
  }
`;

const Home = () => {
  return (
    <Container>
      <Annoucement />
      <Navbar />
      <Advertisement />
      <Wrapper>
        <TitleContainer style={{ backgroundColor: '#a8c7f5' }}>
          <Title>Categories</Title>
        </TitleContainer>
        <Genres />
      </Wrapper>
      <Wrapper>
        <TitleContainer style={{ backgroundColor: '#f5b3a8' }}>
          <Title>Best Selling Books</Title>
        </TitleContainer>
        <Books />
      </Wrapper>
      <Wrapper>
        <TitleContainer>
          <Title>All Books</Title>
        </TitleContainer>
        <Books />
        <ButtonContainer>
          <Link
            to="/books"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <Button>See more</Button>
          </Link>
        </ButtonContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Home;
