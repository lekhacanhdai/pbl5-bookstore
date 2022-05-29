import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img``;

const Annoucement = () => {
  return (
    <Container>
      <Image src="https://cdn0.fahasa.com/media/wysiwyg/Thang-04-2022/THANG5-new/brandday_052022_Header_1263x60.jpg" />
    </Container>
  );
};

export default Annoucement;
