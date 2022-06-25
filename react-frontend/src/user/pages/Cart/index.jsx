import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Divider } from 'antd';
import React, { useEffect, useState } from 'react';
import CartService from '../../../service/CartService';
import { Navbar } from '../../components/Navbar';
import styles from './styles.module.scss';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { Payment } from '../Payment';

export const Cart = () => {
  const [data, setData] = useState([]);
  let userId = 0;
  if (localStorage.getItem('user')) {
    userId = JSON.parse(localStorage.getItem('user')).account.id;
  }

  useEffect(() => {
    CartService.getCartByUserId(userId).then(
      (response) => {
        setData(response.data.cartDetails);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  console.log(data);

  let total = 0;
  for (let i = 0; i < data.length; i++) {
    total += data[i].quantity * data[i].book.price;
  }

  const handleQuantity = (type, id) => {
    if (type === 'dec') {
      CartService.decreaseQuantity(id.cartId, id.bookId);
    } else {
      CartService.increaseQuantity(id.cartId, id.bookId);
    }
    window.location.reload();
  };

  const handleDel = (id) => {
    console.log(id);
    CartService.deleteCart(id.cartId, id.bookId).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
    window.location.reload();
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Navbar />
      <div className={styles.Container}>
        <div className={styles.Wrapper}>
          <div className={styles.Header}>
            <Typography variant="h4">Giỏ hàng</Typography>
          </div>
          <Divider />
          {data.map((item, index) => (
            <div key={index}>
              <Grid
                container
                spacing={2}
                key={index}
                className={styles.CartItem}
              >
                <Grid item xs={3}>
                  <img src={item.book.image} width="200px" />
                </Grid>
                <Grid item xs={3} style={{ alignItems: 'start' }}>
                  <Typography>{item.book.title}</Typography>
                  <Box height={20} />
                  <Typography>{item.book.price} đồng</Typography>
                </Grid>
                <Grid item xs={3}>
                  <span className={styles.AmountContainer}>
                    <IconButton onClick={() => handleQuantity('dec', item.id)}>
                      <RemoveIcon />
                    </IconButton>
                    <Typography variant="h6">{item.quantity}</Typography>
                    <IconButton onClick={() => handleQuantity('inc', item.id)}>
                      <AddIcon />
                    </IconButton>
                  </span>
                  <Box height={20} />
                  <Typography variant="h6">
                    {item.book.price * item.quantity} đồng
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Button
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                    onClick={() => handleDel(item.id)}
                  >
                    Xoá
                  </Button>
                </Grid>
              </Grid>
              <Divider />
            </div>
          ))}
        </div>
        <div className={`${styles.Wrapper} ${styles.TotalContainer}`}>
          <Typography variant="h5">Tổng tiền</Typography>
          <Divider style={{ margin: '20px' }} />
          <Typography variant="h5">{total} Đ</Typography>
          <Box height={10} />
          <Button variant="contained" onClick={handleClickOpen}>
            Thanh toán
          </Button>
        </div>
        <Dialog open={open} onClose={handleClose} className={styles.Dialog}>
          <DialogTitle
            className={styles.DialogTitle}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography variant="h5">Thanh toán</Typography>
            <IconButton onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <Divider
            style={{
              margin: '5px',
              border: '0.4px solid rgba(0, 0, 0, 0.12) ',
            }}
          />
          <DialogContent>
            <Payment />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
