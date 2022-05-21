import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  background-color: white;
  width: 100%;
`;
const GenresContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 10px 30px;
`;
const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  margin-bottom: 10px;
  :hover {
    cursor: pointer;
  }
`;
// const Image = styled.img`
//   width: 130px;
// `;
const Name = styled.p`
  font-size: 18px;
  margin-top: 5px;
`;

const Genres = () => {
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
    <Container>
      <GenresContainer>
        {data.map((item) => (
          <Link
            to="/books"
            key={item.id}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <ItemContainer key={item.id}>
              <Name>{item.name}</Name>
            </ItemContainer>
          </Link>
        ))}
      </GenresContainer>
    </Container>
  );
};

export default Genres;
