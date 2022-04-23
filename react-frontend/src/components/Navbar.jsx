import { Badge } from "@material-ui/core";
import { Category, Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  background-color:#fff;
  height: 65px; 
  ${mobile({height: "50px"})};
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({padding: "10px 0px"})};
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  margin-left: 20px;
  color: #3B69B7;
  ${mobile({ fontSize:"24px"})};
`;
const Input = styled.input`
  width: 100%;
  font-size: 15px;
  border: none;
  margin: 0 10px;
  &:focus{outline:none}
`

const Center = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchContainer = styled.div`
  border: 1px solid #3B69B7;
  width: 100%;
  display: flex;
  padding: 5px;
  align-items: center;
  border-radius: 50px;

`;


const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex:2 ,justifyContent:"center"})};
`;

const MenuItem = styled.div`
  font-style: 14px;
  cursor: pointer;
  color: #3B69B7;
  margin-left: 25px;
  & :hover{
    cursor: pointer;
  }
  ${mobile({ fontSize:"12px", marginLeft: "12px"})};
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
        <Logo>BookStore</Logo>
        </Left>
        <Center>
          <Category style={{ color: "#3B69B7", margin: "10px", fontSize: 30, cursor:"pointer"}}/>
          <SearchContainer>
            <Input placeholder="Search"/>
            <Search style={{ color: "#3B69B7", fontSize: 26, cursor:"pointer" }} />
          </SearchContainer>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={0} color="#3B69B7">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
