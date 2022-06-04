import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  max-width: 100vw;
  flex-direction: column;
`;
const Wrapper = styled.div`
  margin: 0px 10%;
  width: 80%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;
const Content = styled.div`
  background-color: aliceblue;
`;
const Left = styled.div`
  
`
const Right = styled.div`
  
`
// const Top = styled.div`
//   display: flex;
//   margin-top: 10px;
//   margin-bottom: 10px;
// `;
// const Left = styled.div`
//   margin-right: 10px;
// `;
// const TopLeftImage = styled.img`
//   :hover {
//     cursor: pointer;
//   }
// `;

// const Right = styled.div`
//   display: flex;
//   flex-direction: column;
// `;
// const TopRightImage = styled.img`
//   width: 392px;
//   :last-child {
//     margin-top: 10px;
//   }
//   :hover {
//     cursor: pointer;
//   }
// `;
// const Bot = styled.div`
//   margin: auto;
// `;
// const BotImage = styled.img`
//   width: 300px;
//   flex-wrap: wrap;
//   margin-right: 10px;
//   :last-child {
//     margin-right: 0px;
//   }
//   :hover {
//     cursor: pointer;
//   }
// `;
const Advertisement = () => {
  return (
    <Container>
      <Wrapper>
        <Content />
        {/* <Top>
          <Left>
            <TopLeftImage src="https://cdn0.fahasa.com/media/magentothem/banner7/Bigsale02_1905_Banner840x320.jpg" />
          </Left>
          <Right>
            <TopRightImage src="https://cdn0.fahasa.com/media/wysiwyg/Thang-04-2022/THANG5-new/brday_Subbanner392x156.jpg" />
            <TopRightImage src="https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/banner1-392x156.jpg" />
          </Right>
        </Top> */}
      </Wrapper>
      {/* <Bot>
        <BotImage src="https://cdn0.fahasa.com/media/wysiwyg/Thang-05-2022/salelon_bigsale2_310x210.jpg" />
        <BotImage src="https://cdn0.fahasa.com/media/wysiwyg/Thang-05-2022/coupontesst_bigsale02_310x210.jpg" />
        <BotImage src="https://cdn0.fahasa.com/media/wysiwyg/Thang-05-2022/kinhtet5-v3.jpg" />
        <BotImage src="https://cdn0.fahasa.com/media/wysiwyg/Thang-05-2022/kinhtet5-v3.jpg" />
        {/* <BotImage src="https://cdn0.fahasa.com/media/wysiwyg/Thang-04-2022/THANG5-new/Moca%202_0522_310x210png.png" /> 
      </Bot> */}
    </Container>
  );
};

export default Advertisement;
