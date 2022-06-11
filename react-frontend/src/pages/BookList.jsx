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
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  margin: 10px 0px;
  width: 80%;
  display: flex;
`;
const Left = styled.div`
  flex: 1.5;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  background-color: white;
  height: 80vh;
  position: sticky;
  top: 85px;
`;
const GenreItem = styled.div`
  :hover {
    background-color: aliceblue;
    cursor: pointer;
  }
`;
const Genre = styled.p`
  font-size: 18px;
  margin-left: 20px;
`;
const Right = styled.div`
  flex: 5;
  background-color: white;
`;
const Hr = styled.div`
  height: 1px;
  background-color: lightgray;
  border: none;
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
      <Annoucement />
      <Navbar />
      <Container>
        <Wrapper>
          <Left>
            <GenreItem>
              <Genre style={{ fontWeight: 'bold', marginTop: '20px' }}>
                CATEGORY
              </Genre>
            </GenreItem>
            <Hr />
            {data.map((item) => (
              <GenreItem key={item.id}>
                <Genre>{item.name}</Genre>
                <Hr />
              </GenreItem>
            ))}
          </Left>
          <Right>
            <Books />
          </Right>
        </Wrapper>
      </Container>
      <Newsletter />
      <Footer />
    </>
  );
};

export default BookList;
