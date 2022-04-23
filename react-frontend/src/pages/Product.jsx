import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";
import 'antd/dist/antd.css';
import { Comment, Avatar, Rate } from 'antd';

// import { createRoot } from 'react-dom/client';

const Container = styled.div`
  background-color: #f0f0f0;
`;
const Wrapper = styled.div`
  border-radius: 10px;
  margin: 15px 10%;
  width: 80%;
  background-color: #fff;
  padding: 20px;
  display: flex;
  ${mobile({ padding:"10px", flexDirection:"column"})};
`;
const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  margin-left:20%;
  width: 70%;
  height: 70vh;
  object-fit: cover;
  ${mobile({ height:"40px"})};
`;

const InfoContainer = styled.div`
  flex: 1;
  ${mobile({ padding:"10px"})};
`;

const Title = styled.h1`
  font-weight: 200;
`;

const IntroContainer = styled.div`
  margin: 30px 0px 10px;
  display: flex;
  justify-content: space-between;
`;

const Intro = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const Provider = styled.p`
  margin-top: 5px;
  font-size: 15px;
`;

const Publisher = styled.p`
  font-size: 15px;
`;

const Author = styled.p`
  font-size: 15px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
  color: #ff0000;
`;

const AssessContainer = styled.div`
  width: 50%;
  margin: 0px 0px 30px;
  display: flex;
  ${mobile({ width:"100%"})};
`;

const AddContainer = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  width: 50%;
  ${mobile({ width:"100%"})};
`;

const TxtRate = styled.p`
  margin: 5px 5px;
  font-size: 15px;
  color: #f7ad4e;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Count = styled.p`
  margin: 1px 10px 0 0;
  font-size: 15px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  margin: 30px 25%;
  &:hover {
    background-color: #f8f4f4;
  }
`;

const Infpro = styled.p`
  margin-top: 0px;
  font-size: 1.45em;
  font-weight: 700;
`;

const Proprocontainer = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #c1c1c1;
`;

const Propro = styled.div`
  flex-direction: column;
  width: 25%;
  margin-bottom: 50px;
`;

const Pro1 = styled.div`
  margin-top: 8px;
  text-align: left;
  color: #87838b;
  font-size: 1.1em;
`;

const Pro2 = styled.div`
  margin-top: 8px;
  font-size: 1.1em;
`;

const Review = styled.div`
  margin-top: 15px;
  line-height; 8px;
  font-size: 1em;
  text-align: justify;
`;

const Ratepro = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #CDCFD0; 
`;

const Txtratio = styled.div`
  font-size: 4em;
  line-height: 1.1em;
  font-weight: 600;
  display: block;
`;

const Txtratiochild = styled.span`
  font-size: 0.5em;
`;

const Percent = styled.span`
  display: block;
  margin-right: 30px;
`;

const Percentchild = styled.div`
  display: flex;
`;

const Percentchild1 = styled.span``;

const Percentchild2 = styled.div`
  height: 5px;
  width: 200px;
  margin: 8px 10px;
  background-color: #e6e6e6;
`;

const Percentchild3 = styled.span``;

const ExampleComment = ({ children }) => (
  <Comment
    actions={[<span key="comment-nested-reply-to">Trả lời</span>]}
    author={<a>Han Solo</a>}
    avatar={<Avatar/>}
    content={
      <p>
        We supply a series of design principles, practical patterns and high quality design
        resources (Sketch and Axure).
      </p>
    }
  >
    {children}
  </Comment>
);

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src="https://cdn0.fahasa.com/media/catalog/product/c/a/call_me_by_your_name_1_2019_01_17_08_49_24.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Call me by your name</Title>
          <IntroContainer>
            <Intro>
              <Publisher>Nhà xuất bản:</Publisher>
              <Provider>Nhà cung cấp:</Provider>
            </Intro>
            <Intro>
              <Author>Tác giả:</Author>
            </Intro>
          </IntroContainer>
          <AssessContainer>
                <Rate></Rate>
                <TxtRate>(0 đánh giá)</TxtRate>
          </AssessContainer>
          <Price>20.000 đ</Price>
          <AddContainer>
            <Count>Số lượng: </Count>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
          </AddContainer>
            <Button>Thêm vào giỏ hàng</Button>
        </InfoContainer>
      </Wrapper>
      <Wrapper>
        <InfoContainer>
          <Infpro>Thông tin sản phẩm</Infpro>
          <Proprocontainer>
            <Propro>
              <Pro1>Mã hàng</Pro1>
              <Pro1>Độ tuổi</Pro1>
              <Pro1>Tên nhà cung cấp</Pro1>
              <Pro1>Tác giả</Pro1>
              <Pro1>Người dịch</Pro1>
              <Pro1>Nhà xuất bản</Pro1>
              <Pro1>Năm xuất bản</Pro1>
              <Pro1>Ngôn ngữ</Pro1>
              <Pro1>Trọng lượng(gr)</Pro1>
              <Pro1>Số trang</Pro1>
            </Propro>
            <Propro>
              <Pro2>8934974177715</Pro2>
              <Pro2>15+</Pro2>
              <Pro2>NXB Trẻ</Pro2>
              <Pro2>Sho Aimoto</Pro2>
              <Pro2>Tuyết Quỳnh</Pro2>
              <Pro2>NXB Trẻ</Pro2>
              <Pro2>2022</Pro2>
              <Pro2>Tiếng Việt</Pro2>
              <Pro2>200</Pro2>
              <Pro2>192</Pro2>
            </Propro>
          </Proprocontainer>
          <Review>
          Ở một vùng quê yên tĩnh nọ bỗng xảy ra sự kiện gia súc chết hàng loạt rất 
          quái lạ. Dân làng thuê vị thám tử tâm linh Inugami từ Tokyo về để điều tra
          vụ việc. Trong quá trình điều tra, Inugami gặp một cậu bé bị dân làng gọi 
          bằng cái tên “Dorotabo”. Cậu bé giúp Inugami tìm ra sự thật, và để đáp lại,
          Inugami tiết lộ cho cậu biết cậu không phải con người, mà là một bán yêu.
           Từ đây, bánh xe vận mệnh của cậu bắt đầu lăn bánh, và những bí ẩn về thân 
           thế của cậu bé dần được hé lộ.
          </Review>
        </InfoContainer>
      </Wrapper>
      <Wrapper>
        <InfoContainer>
          <Infpro>Đánh giá sản phẩm</Infpro>
          <InfoContainer>
            <Ratepro>
              <Percent>
                <Txtratio>
                  5
                  <Txtratiochild>/5</Txtratiochild>
                </Txtratio>
                <Rate></Rate>
                <TxtRate>(0 đánh giá)</TxtRate>
              </Percent>
              <Percent>
                <Percentchild>
                  <Percentchild1>5 sao</Percentchild1>
                  <Percentchild2></Percentchild2>
                  <Percentchild3>100%</Percentchild3>
                </Percentchild>
                <Percentchild>
                  <Percentchild1>4 sao</Percentchild1>
                  <Percentchild2></Percentchild2>
                  <Percentchild3>100%</Percentchild3>
                </Percentchild>
                <Percentchild>
                  <Percentchild1>3 sao</Percentchild1>
                  <Percentchild2></Percentchild2>
                  <Percentchild3>100%</Percentchild3>
                </Percentchild>
                <Percentchild>
                  <Percentchild1>2 sao</Percentchild1>
                  <Percentchild2></Percentchild2>
                  <Percentchild3>100%</Percentchild3>
                </Percentchild>
                <Percentchild>
                  <Percentchild1>1 sao</Percentchild1>
                  <Percentchild2></Percentchild2>
                  <Percentchild3>100%</Percentchild3>
                </Percentchild>
              </Percent>
            </Ratepro>
          </InfoContainer>
          <ExampleComment>
            <ExampleComment></ExampleComment>
          </ExampleComment>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
