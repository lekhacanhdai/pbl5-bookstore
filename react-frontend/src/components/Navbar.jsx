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
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
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
    localStorage.removeItem('token');
    window.location.reload();
  };
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
          <Input placeholder="Tìm kiếm" />
          <Button>
            <Search style={{ fontSize: '20px' }} />
          </Button>
        </SearchContainer>
      </Center>
      <Right>
        {localStorage.getItem('user') ? (
          <>
            <Link
              to="/profile"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <MenuItem>
                {JSON.parse(localStorage.getItem('user')).account.user.userName}
              </MenuItem>
            </Link>
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
            <Badge badgeContent={0}>
              <ShoppingCartOutlined style={{ color: '#5b5959' }} />
            </Badge>
          </MenuItem>
        </Link>
      </Right>
    </Container>
  );
};

export default Navbar;
