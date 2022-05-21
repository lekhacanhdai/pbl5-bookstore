import React from 'react';
import Books from '../components/Books';
import styled from 'styled-components';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Annoucement from '../components/Annoucement';
import Newsletter from '../components/Newsleter';
import Footer from '../components/Footer';

const Container = styled.div`
  background-color: lightgray;
  padding: 10px 0px;
  display: flex;
`;
const Left = styled.div`
  flex: 1.5;
  margin-left: 7%;
  display: flex;
  flex-direction: column;
`;
const GenreItem = styled.div`
  padding: 10px 20px;
`;
const Genre = styled.p`
  font-size: 18px;
`;
const Right = styled.div`
  flex: 5;
`;
const Wrapper = styled.div`
  width: 90%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;
const Title = styled.p`
  margin: 20px 40px;
  font-size: 25px;
  font-weight: 600;
`;

const BookList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/v1/genres')
      .then((res) => {
        const genres = res.data;
        setData(genres);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
    <Annoucement/>
    <Navbar/>
    <Container>
      <Left>
        <Wrapper style={{ height: '80vh' }}>
          <GenreItem>
            <Genre style={{ fontWeight: 'bold' }}>CATEGORY</Genre>
          </GenreItem>
          {data.map((item) => (
            <GenreItem key={item.id}>
              <Genre>{item.name}</Genre>
            </GenreItem>
          ))}
        </Wrapper>
      </Left>
      <Right>
        <Wrapper>
          <Title>Books</Title>
        </Wrapper>
        <Wrapper>
          <Books />
        </Wrapper>
      </Right>
    </Container>
    <Newsletter/>
    <Footer/>
    </>
  );
};

export default BookList;
