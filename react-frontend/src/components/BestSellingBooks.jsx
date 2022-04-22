import React from 'react'
import styled from 'styled-components'
import BestSellingBook from './BestSellingBook'

import { bestSellingBooks } from '../data'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`
const BestSellingBooks = () => {
  return (
    <Container>
        {bestSellingBooks.map((item) => (
        <BestSellingBook item={item} key={item.id} />
      ))}
    </Container>
  )
}

export default BestSellingBooks