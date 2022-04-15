import styled from "styled-components";
import React, { Component } from "react";
import Product from "./Product";
import BookService from "../service/BookService"

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

class Products extends Component{
  constructor(params) {
    super(params);
    this.state = {
      books: []
    }
  }

  componentDidMount(){
    BookService.getAllBook().then((result) => {
      this.setState({books: result.data})
    }).catch((err) => {
      
    });
  }

  render(){
    return (
      <Container>
      {this.state.books.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
    )
  }
}


export default Products;
