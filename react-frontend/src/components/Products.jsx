import React, { Component } from 'react'
import styled from "styled-components"
import Product from './Product'
import BookService from '../service/BookService'


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

class Products extends Component{


  constructor(params){
    super(params);
    this.state={
      books: []
    }
  }

  componentDidMount(){
    BookService.getAllBook().then((result)=>
    {
      this.setState({books: result.data})
    }).catch((err)=>{})
  }

  render(){
    return (
      <Container>
        <TitleContainer>
          <Title>Popular Products</Title>
        </TitleContainer>
        <ProductsContainer>
          {this.state.books.map((item) => (
              <Product item={item} key={item.id}/>
          ))}
        </ProductsContainer>
      </Container>
    )
  }
}

export default Products