import { Slider } from '@material-ui/core'
import React, { useState }  from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
    cursor: pointer;
`
const Book = styled.div`
    height: 200px;
    width: 400px;
    display: flex;
    align-items: center;
    border: 2px solid #CCDDFF;
    :hover{
    transform: scale(1.1);
  }
    justify-content: center;
`
const ImgContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`
const Image = styled.img`
    height: 80%;
`
const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Title = styled.h1`
  font-style: 70px;
  font-size: 30px;
  color: red;
  margin-bottom:10px;
`
const Desc = styled.p`
  
`
const BestSellingBook = ({item}) => {
  return (
    <Container>
       <Book>
           <ImgContainer>
               <Image src={item.img}/>
           </ImgContainer>
           <InfoContainer>
               <Title>{item.title}</Title>
               <Desc>{item.desc}</Desc>
           </InfoContainer>
       </Book>
    </Container>
  )
}

export default BestSellingBook