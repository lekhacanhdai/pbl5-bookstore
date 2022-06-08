import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Add, Remove, ShoppingCartOutlined } from '@mui/icons-material';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Annoucement from '../components/Annoucement';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsleter';
import Footer from '../components/Footer';
import CartService from '../service/CartService';

const Container = styled.div`
  background-color: lightgray;
  padding: 5px 0px;
`;
const Wrapper = styled.div`
  border-radius: 10px;
  margin: 10px 10%;
  width: 80%;
  background-color: #fff;
  padding: 20px;
  display: flex;
`;
const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  margin-left: 20%;
  width: 70%;
  height: 70vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Title = styled.h1`
  font-weight: 500;
  margin-top: 30px;
`;

const IntroContainer = styled.div`
  margin: 30px 0px 10px;
  display: flex;
  justify-content: space-between;
`;

const Intro = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Publisher = styled.p`
  font-size: 15px;
`;

const Author = styled.p`
  font-size: 15px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
  color: #ff0000;
`;

const AddContainer = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  width: 50%;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const AmountButtonContainer = styled.div`
  cursor: pointer;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Count = styled.p`
  margin: 1px 10px 0 0;
  font-size: 15px;
`;

const Button = styled.button`
  display: flex;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  padding: 7px;
  background-color: white;
  width: 50%;
  border-radius: 20px;
  margin-bottom: 30px;
  cursor: pointer;
  :hover {
    background-color: #f46c5a;
    color: white;
  }
`;

const Infpro = styled.p`
  margin-top: 0px;
  font-size: 1.45em;
  font-weight: 700;
`;

const Proprocontainer = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #c1c1c1;
`;

const Propro = styled.div`
  flex-direction: column;
  width: 25%;
  margin-bottom: 50px;
`;

const Pro1 = styled.p`
  margin-top: 8px;
  text-align: left;
  color: #87838b;
  font-size: 1.1em;
`;

const Pro2 = styled.p`
  margin-top: 8px;
  font-size: 1.1em;
`;

const Review = styled.div`
  margin-top: 15px;
  line-height: 20px;
  font-size: 1em;
  text-align: justify;
`;

const Product = () => {
  const location = useLocation();

  const id = location.pathname.split('/')[2];
  const [book, setBook] = useState([]);
  const [author, setAuthor] = useState({});
  const [genre, setGenre] = useState({});
  const [publisher, setPublisher] = useState({});
  const [date, setDate] = useState('');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get('http://localhost:8080/api/v1/books/' + id)
      .then((res) => {
        console.log(res)
        setBook(res.data);
        setAuthor(res.data.author);
        setGenre(res.data.genre);
        setPublisher(res.data.publisher);
        setDate(res.data.publiccationDate);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleQuantity = (type) => {
    if (type === 'dec') {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };
  const handleAddtocart = () => {
    const userId = JSON.parse(localStorage.getItem('user')).account.id;
    console.log(userId);
    console.log(id);

    CartService.addtoCart(userId, id, quantity);
    alert('Đã thêm sản phẩm vào giỏ hàng');
    // const a = { accountId: userId, bookId: id, quantity: quantity };
    // console.log(a);
    // axios
    //   .post('http://localhost:8080/api/v1/books/add-to-cart/' + id, a, {
    //     headers: {
    //       Authorization: `Anhdai ${JSON.parse(
    //         localStorage.getItem('user').access_token
    //       )}`,
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
    <Container>
      <Annoucement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={book.image} />
        </ImgContainer>
        <InfoContainer>
          <Title>{book.title}</Title>
          <IntroContainer>
            <Intro>
              <Publisher>Publisher: {publisher.name}</Publisher>
              <Author>Author: {author.companyName}</Author>
            </Intro>
          </IntroContainer>
          <Price>{book.price} d</Price>
          <AddContainer>
            <Count>Amount: </Count>
            <AmountContainer>
              <AmountButtonContainer>
                <Remove onClick={() => handleQuantity('dec')} />
              </AmountButtonContainer>
              <Amount>{quantity}</Amount>
              <AmountButtonContainer>
                <Add onClick={() => handleQuantity('inc')} />
              </AmountButtonContainer>
            </AmountContainer>
          </AddContainer>
          <Button onClick={handleAddtocart}>
            <ShoppingCartOutlined style={{ marginRight: '10px' }} />
            Add to Cart
          </Button>
        </InfoContainer>
      </Wrapper>
      <Wrapper>
        <InfoContainer>
          <Infpro>Book Information</Infpro>
          <Proprocontainer>
            <Propro>
              <Pro1>Gener</Pro1>
              <Pro1>Author</Pro1>
              <Pro1>Publisher</Pro1>
              <Pro1>Publiccation Date</Pro1>
              <Pro1>Pages</Pro1>
              <Pro1>Size</Pro1>
              <Pro1>Weight</Pro1>
            </Propro>
            <Propro>
              <Pro2>{genre.name}</Pro2>
              <Pro2>{author.companyName}</Pro2>
              <Pro2>{publisher.name}</Pro2>
              <Pro2>{date.substring(0, 10)}</Pro2>
              <Pro2>{book.pages}</Pro2>
              <Pro2>{book.size}</Pro2>
              <Pro2>{book.weight}</Pro2>
            </Propro>
          </Proprocontainer>
          <Review>{book.description}</Review>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};
export default Product;
