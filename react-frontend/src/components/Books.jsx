import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  background-color: white;
`;
const BooksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 10px 20px;
  margin: auto;
  margin: 10px 0px;
`;
const ItemContainer = styled.div`
  width: 250px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px;
  margin-bottom: 10px;
  margin-left: 10px;
  border: 0.5px solid lightgray;
  :hover {
    cursor: pointer;
    background-color: aliceblue;
  }
`;
const Image = styled.img`
  width: 90%;
`;
const Name = styled.p`
  font-size: 17px;
`;
const Price = styled.h4`
font-weight: 600;
  font-size: 24px;
  color: #bd1a1a;
`;

const Books = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:8080/api/v1/books')
      .then((res) => {
        const books = res.data;
        setData(books);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Container>
      <BooksContainer>
        {data.map((item) => (
          <Link
            key={item.id}
            to={`/books/${item.id}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <ItemContainer key={item.id}>
              <Image src={item.image} />
              <Name>{item.title}</Name>
              <Price>{item.price} đ</Price>
            </ItemContainer>
          </Link>
        ))}
      </BooksContainer>

    </Container>
  );
};

export default Books;
