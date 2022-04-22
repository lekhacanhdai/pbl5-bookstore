import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
   box-shadow: 0 0 5px 1px gray;
    background-color: #f5fbfd;
    width: 250px;
    height: 350px;

    margin: 10px;
    &:hover {
    background-color: #dcf3f0;
    transform: scale(1.1);
  }
`
const ImageContainer = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Image = styled.img`
    width: 80%;
`
const NameContainer = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Name = styled.p`
    font-size: 15px;
`
const Price = styled.p`
    font-size: 20px;
    color: red;
    font-weight: 600;
    margin: 10px;
`
const Button = styled.button`
    padding: 10px;
    background-color: white;
    width: 80%;
    border-radius: 20px;
    cursor: pointer;
    :hover{
        background-color: #EA4E4D;
        color: white;
    }
`
const Product = ({item}) => {
  return (
    <Container>
        <ImageContainer>
            <Image src={item.img}/>
        </ImageContainer>
        <NameContainer>
            <Name>{item.name}</Name>
            <Price>{item.price}</Price>
            <Button>ADD TO CART</Button>
        </NameContainer>
    </Container>
  )
}

export default Product