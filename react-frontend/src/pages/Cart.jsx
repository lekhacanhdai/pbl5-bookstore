// import { Add, Remove } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Annoucement from '../components/Annoucement';
import Newsletter from '../components/Newsleter';
import Footer from '../components/Footer';
import { Add, Delete, Remove } from '@mui/icons-material';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import CartService from '../service/CartService';

const Container = styled.div`
  padding-top: 20px;
  width: 100%;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 80%;
  margin: 10px 0px;
  display: flex;
`;
const ListBooksContainer = styled.div`
  flex: 4;
  background-color: white;
  margin-right: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 10px 0px;
`;
const Content = styled.div`
  display: flex;
`;
const ImageContainer = styled.div`
  flex: 2;
`;
const Image = styled.img`
  width: 100%;
`;
const InfoContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
`;
const AmountContainer = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  font-size: 25px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Con = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
`;
const DelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;
const Hr = styled.hr`
  height: 1px;
  background-color: lightgray;
  border: none;
  margin: 10px 0px;
`;
const TotalContainer = styled.div`
  flex: 1;
  position: sticky;
  top: 85px;
  background-color: white;
  height: 200px;
  padding: 20px;
`;

const Cart = () => {
  const [data, setData] = useState([]);
  const token = JSON.parse(localStorage.getItem('token'));
  const userId = JSON.parse(localStorage.getItem('user')).account.id;
  console.log(token);

  useEffect(() => {
    CartService.getCartByUserId(userId).then(
      (response) => {
        setData(response.data.cartDetails);
      },
      (error) => {
        console.log(error);
      }
    );
  }, [userId]);
  console.log(data);

  let total1 = 0;
  for (let i = 0; i < data.length; i++) {
    total1 += data[i].quantity * data[i].book.price;
  }
  console.log(total1);

  const handleQuantity = (type, id) => {
    if (type === 'dec') {
      CartService.decreaseQuantity(id.cartId, id.bookId);
    } else {
      CartService.increaseQuantity(id.cartId, id.bookId);
    }
    window.location.reload();
  };

  const handleDel = (id) => {
    console.log(id);
    CartService.deleteCart(id.cartId, id.bookId).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
    window.location.reload();
  };

  return (
    <>
      <Annoucement />
      <Navbar />
      <Container>
        <h1>Your Bag</h1>
        <Wrapper>
          <ListBooksContainer>
            {data.map((item) => (
              <Item key={item.id}>
                <Content>
                  <ImageContainer>
                    <Image src={item.book.image} />
                  </ImageContainer>
                  <InfoContainer>
                    <p style={{ fontSize: '18px', fontWeight: '300' }}>
                      {item.book.title}
                    </p>
                    <h2>{item.book.price} d</h2>
                  </InfoContainer>
                  <AmountContainer>
                    <Con>
                      <Remove
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleQuantity('dec', item.id)}
                      />
                      <Amount>{item.quantity}</Amount>
                      <Add
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleQuantity('inc', item.id)}
                      />
                    </Con>
                    <h2
                      style={{
                        color: 'red',
                        marginTop: '20px',
                        fontSize: '27px',
                      }}
                    >
                      {item.book.price * item.quantity} d
                    </h2>
                  </AmountContainer>
                  <DelContainer>
                    <Delete
                      style={{ cursor: 'pointer' }}
                      onClick={() => handleDel(item.id)}
                    />
                  </DelContainer>
                </Content>
                <Hr />
              </Item>
            ))}
          </ListBooksContainer>
          <TotalContainer>{total1}</TotalContainer>
        </Wrapper>
      </Container>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Cart;
