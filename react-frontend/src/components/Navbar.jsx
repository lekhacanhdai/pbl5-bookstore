import {
  DensityMedium,
  KeyboardArrowDown,
  Search,
  ShoppingCartOutlined,
} from '@mui/icons-material';
import { Badge } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  background-color: white;
  padding: 10px 20px;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Logo = styled.h1`
  font-size: 25px;
  font-weight: 900;
  color: #bd1a1a;
  :hover {
    cursor: pointer;
  }
`;
const Center = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SearchContainer = styled.div`
  width: 70%;
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 15px;
  padding: 3px;
  border-radius: 10px;
`;
const Input = styled.input`
  width: 100%;
  font-size: 15px;
  margin-left: 15px;
  border: none;
  &:focus {
    outline: none;
  }
`;
const Button = styled.button`
  padding: 3px 25px;
  border-radius: 10px;
  border: none;
  background-color: #bd1a1a;
  color: white;
  :hover {
    cursor: pointer;
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const MenuItem = styled.div`
  font-size: 17px;
  cursor: pointer;
  color: #5b5959;
  margin-left: 25px;
  & :hover {
    cursor: pointer;
  }
`;
const Navbar = () => {
  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('carts');
    window.location.reload();
  };
  let carts = [];
  if (localStorage.getItem('carts')) {
    carts = JSON.parse(localStorage.getItem('carts'));
  }
  return (
    <Container>
      <Left>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Logo>BOOKSTORE</Logo>
        </Link>
      </Left>
      <Center>
        <DensityMedium style={{ color: 'darkgray' }} />
        <KeyboardArrowDown style={{ color: 'darkgray' }} />
        <SearchContainer>
          <Input placeholder="Search..." />
          <Button>
            <Search style={{ fontSize: '20px' }} />
          </Button>
        </SearchContainer>
      </Center>
      <Right>
        {localStorage.getItem('user') ? (
          <>
            <MenuItem>
              {JSON.parse(localStorage.getItem('user')).account.user.userName}
            </MenuItem>
            <MenuItem onClick={logout}>Logout</MenuItem>
          </>
        ) : (
          <>
            <Link
              to="/register"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <MenuItem>Register</MenuItem>
            </Link>
            <Link
              to="/login"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <MenuItem>Login</MenuItem>
            </Link>
          </>
        )}
        <Link to="/carts" style={{ textDecoration: 'none', color: 'inherit' }}>
          <MenuItem>
            <Badge badgeContent={carts.length}>
              <ShoppingCartOutlined style={{ color: '#5b5959' }} />
            </Badge>
          </MenuItem>
        </Link>
      </Right>
    </Container>
  );
};

export default Navbar;
