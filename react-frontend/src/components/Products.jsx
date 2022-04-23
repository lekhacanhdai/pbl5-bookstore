import React from 'react'
import styled from "styled-components"
import { popularProducts } from '../data'
import Product from './Product'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`
const TitleContainer = styled.div`
    display: flex;
    height: 60px;
    align-items: center;
    justify-content: center;
`
const Title = styled.h2`
    font-size: 30px;
    color: #3B69B7;
`
const ProductsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`
const Products = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>Popular Products</Title>
      </TitleContainer>
      <ProductsContainer>
        {popularProducts.map((item)=>(
            <Product item={item} key={item.id}/>
        ))}
    </ProductsContainer>
    </Container>
  )
}

export default Products