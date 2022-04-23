import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 200px;
  width: 150px;
  position: relative;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :hover{
    transform: scale(1.1);
  }
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Image = styled.img`
  width: 60%;
`;
const TitleContainer = styled.div`
  display: flex;
  margin-top: 15px;
  align-items: center;
  justify-content: center;
`
const Title = styled.h3`
  font-size: 18px;
   font-weight: 400;
  color: #3B69B7;
`;
const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Info>
        <Image src={item.img} />
        <TitleContainer>
          <Title>{item.title}</Title>
        </TitleContainer>
      </Info>
    </Container>
  );
};

export default CategoryItem;
