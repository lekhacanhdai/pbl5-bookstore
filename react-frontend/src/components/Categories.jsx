import React from 'react'
import styled from "styled-components"
import CategoryItem from './CategoryItem'
import { categories } from '../data'

const Container = styled.div`
    margin: 20px 0px 20px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const TitleContainer = styled.div`
    display: flex;
    padding: 10px 0px 10px 0px ;
    width: 70%;
    background-color: #C1E3DD;
    border: 1px solid #6c9ef4;
    align-items: center;
    justify-content: center;
`
const Title = styled.h2`
    font-size: 30px;
    color: #3B69B7;
`
const CategoriesContainer = styled.div`
    display: flex;
    width: 70%;
    border: 1px solid #6c9ef4;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`
const   Danhmucs = () => {
  return (
    <Container>
        <TitleContainer>
            <Title>Product Categories</Title>
        </TitleContainer>
        <CategoriesContainer>
            {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
        </CategoriesContainer>
    </Container>
  )
}

export default Danhmucs