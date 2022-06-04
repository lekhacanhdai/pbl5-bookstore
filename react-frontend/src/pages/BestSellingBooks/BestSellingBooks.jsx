import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Slider from 'react-slick';
import './BestSellingBooks.css';

const Container = styled.div`
  background-color: white;
  width: 100%;
  height: 55vh;
  margin-top: 20px;
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

const BestSellingBooks = () => {
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
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <Container>
      <Slider {...settings}>
        {data.slice(0, 10).map((item) => (
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
      </Slider>
    </Container>
  );
};

export default BestSellingBooks;
