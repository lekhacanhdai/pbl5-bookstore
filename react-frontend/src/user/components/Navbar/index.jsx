import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import Link from '@mui/material/Link';
import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styles from './style.module.scss';
import AuthService from '../../../service/AuthService';

export const Navbar = () => {
  const handleLogout = () => {
    AuthService.logout();
    window.location.reload();
  };
  return (
    <Box sx={{ flexGrow: 1 }} className={styles.Navbar}>
      <AppBar position="static">
        <Toolbar>
          <Link underline="none" color="inherit" href="/" sx={{ flexGrow: 1 }}>
            <Typography variant="h6" color="white">
              BOOKSTORE
            </Typography>
          </Link>
          {localStorage.getItem('user') ? (
            <>
              <Link underline="none" color="inherit" href="/profile">
                <Button color="inherit">
                  {
                    JSON.parse(localStorage.getItem('user')).account.user
                      .userName
                  }
                </Button>
              </Link>
              <Link underline="none" color="inherit" href="/">
                <Button color="inherit">
                  <Button color="inherit" onClick={handleLogout}>
                    Đăng xuất
                  </Button>
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Link underline="none" color="inherit" href="/login">
                <Button color="inherit">Đăng nhập</Button>
              </Link>
              <Link underline="none" color="inherit" href="/register">
                <Button color="inherit">Đăng ký</Button>
              </Link>
            </>
          )}
          <Link underline="none" color="inherit" href="/cart">
            <Button color="inherit">
              <ShoppingCartIcon />
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
