import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { Divider, notification } from 'antd';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OrderService from '../../../service/OrderService';
import { Navbar } from '../../components/Navbar';
import styles from './style.module.scss';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

export const Payment = () => {
  const [orderBooks, setOrderBooks] = useState([]);
  const [address, setAddress] = useState(null);
  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(null);
  const [discountCode, setDiscountCode] = useState(null);
  const [allDiscountCode, setAllDiscountCode] = useState([]);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const [link, setLink] = useState(null);
  const navigate = useNavigate();
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const [open, setOpen] = React.useState(false);
  let userId = 0;
  if (localStorage.getItem('user')) {
    userId = JSON.parse(localStorage.getItem('user')).account.id;
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    OrderService.getPaymentInfo(userId).then((response) => {
      console.log(response.data);

      setOrderBooks(response.data.orderDetails);
      setAddress(response.data.deliveryAddress);
      setTotal(response.data.totalBill);
      console.log(response.data);
    });
  }, []);

  useEffect(() => {
    OrderService.getAllDiscountCode().then((response) => {
      setAllDiscountCode(response.data);
    });
  }, []);

  const [disable, setDisable] = useState(true);
  const [discountDisable, setDiscountDisable] = useState(false);

  const checkDiscount = () => {
    allDiscountCode.some((i) => {
      if (discountCode === i.title) {
        setDiscount(i);
        setTotal(total - (total * i.value) / 100);
        setDiscountCode('');
        setDiscountDisable(true);
        setMessage(`Ban da duoc giam ${i.value}%`);
        return;
      }
    });
  };

  const orderInfo = {
    orderDetails: orderBooks,
    discount: discount,
    deliveryAddress: address,
    totalBillUSD: total,
    totalBill: total,
  };

  console.log(orderInfo);

  const handlePayment = () => {
    if (address === null || address === '') {
      setError('Dia chi khong duoc de trong');
      return;
    } else {
      OrderService.payment(orderInfo, userId).then(
        (response) => {
          setOpen(true);
          window.location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
    }
  };

  const handlePaymentOnline = () => {
    if (address === null || address === '') {
      setError('Dia chi khong duoc de trong');
      return;
    } else {
      OrderService.paymentOnline(orderInfo, userId).then(
        (response) => {
          window.location.replace(response.data.redirectLinks);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  };

  return (
    <div className={styles.PaymentContainer}>
      {orderBooks.map((item, index) => (
        <div key={index}>
          <Grid container spacing={2} key={index}>
            <Grid item xs={9}>
              <Typography>{item.book.title}</Typography>
              <Typography style={{ fontSize: '15px', fontWeight: '300' }}>
                x {item.quantity}
              </Typography>
            </Grid>
            <Grid
              item
              xs={3}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'end',
              }}
            >
              <Typography style={{ fontSize: '20px', fontWeight: '400' }}>
                {item.quantity * item.book.price}{' '}
                <span style={{ fontSize: '14px' }}>đồng</span>
              </Typography>
            </Grid>
          </Grid>
          <Divider />
        </div>
      ))}
      <div className={styles.TotalContainer}>
        <Typography style={{ fontSize: '18px', marginBottom: '10px' }}>
          Tổng tiền
        </Typography>
        <Typography variant="h4">
          {total} <span style={{ fontSize: '30px' }}> Đ</span>
        </Typography>
        {message !== null && (
          <Typography style={{ fontSize: '12px' }}>{message}</Typography>
        )}
      </div>
      <Divider />
      <div className={styles.AddressContainer}>
        <Grid container spacing={2}>
          <Grid item xs={9}>
            <TextField
              disabled={disable}
              label=" "
              id="address"
              value={address}
              size="small"
              fullWidth
              onChange={(e) => setAddress(e.target.value)}
            />
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="outlined"
              onClick={() => {
                setDisable(!disable);
                if (address !== null && address !== '') setError(null);
              }}
              style={{ textTransform: 'none' }}
            >
              {disable ? 'Thay đổi' : 'Lưu'}
            </Button>
          </Grid>
          {error !== null && error !== '' && (
            <Box className={styles.Error}>
              <Typography color={'error'}>{error}</Typography>
            </Box>
          )}
          <Grid item xs={9}>
            <TextField
              disabled={discountDisable}
              label="Mã giảm giá"
              id="discountCode"
              size="small"
              fullWidth
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
            />
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="outlined"
              onClick={checkDiscount}
              style={{ textTransform: 'none' }}
            >
              Ápp dụng
            </Button>
          </Grid>
        </Grid>
      </div>
      <Divider />
      <div className={styles.DialogAction}>
        <Button
          variant="contained"
          className={styles.Button}
          onClick={handlePaymentOnline}
        >
          Thanh toán online
        </Button>
        <Button
          variant="outlined"
          className={styles.Button}
          onClick={handlePayment}
        >
          Thanh toán khi nhận hàng
        </Button>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Đặt hàng thành công!
        </Alert>
      </Snackbar>
    </div>
  );
};
