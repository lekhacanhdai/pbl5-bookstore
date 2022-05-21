// import { Add, Remove } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Annoucement from '../components/Annoucement';
import Newsletter from '../components/Newsleter';
import Footer from '../components/Footer';

const Container = styled.div`
  width: 100%;
  border-radius: 20px;
`;

const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-weight: 400;
  font-size: 30px;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  border-radius: 20px;
  border: 1px solid #f46c5a;
  cursor: pointer;
  border: ${(props) => props.type === 'filled' && 'none'};
  background-color: ${(props) =>
    props.type === 'filled' ? '#f46c5a' : 'transparent'};
  color: ${(props) => (props.type === 'filled' ? 'white' : '#f46c5a')};
  :hover {
    transform: scale(1.1);
  }
`;
const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
  border-radius: 20px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;
const SummaryTitle = styled.h1`
  font-weight: 200;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === 'total' && '500'};
  font-size: ${(props) => props.type === 'total' && '24px'};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  background-color: #f46c5a;
  border: 1px solid #f46c5a;
  color: white;
  font-weight: 600;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
`;

const Cart = () => {
  let carts = [];
  if (localStorage.getItem('carts')) {
    carts = JSON.parse(localStorage.getItem('carts'));
  }
  console.log(carts);
  let total = 0;
  for (let i = 0; i < carts.length; i++) {
    total += carts[i].quantity * carts[i].price;
  }
  console.log(total);

  return (
    <Container>
      <Annoucement />
      <Navbar />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <Link
            to="/books"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <TopButton>CONTINUE SHOPPING</TopButton>
          </Link>
          <TopTexts>
            <TopText>Shopping Bag({carts.length})</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {carts.map((item) => (
              <div key={item.bookId}>
                <Product>
                  <ProductDetail>
                    <Image src={item.img} />
                    <Details>
                      <ProductName>
                        <b>Product: </b>
                        {item.title}
                      </ProductName>
                      <ProductId>
                        <b>Id: </b>
                        {item.bookId}
                      </ProductId>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      {/* <Add /> */}
                      <ProductAmount>{item.quantity}</ProductAmount>
                      {/* <Remove /> */}
                    </ProductAmountContainer>
                    <ProductPrice>{item.price * item.quantity} $</ProductPrice>
                  </PriceDetail>
                </Product>
                <Hr />
              </div>
            ))}
          </Info>
          <Summary>
            <SummaryTitle>ODDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>{total} d</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>15000 d</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>- 15000 d</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>{total} d</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Cart;
