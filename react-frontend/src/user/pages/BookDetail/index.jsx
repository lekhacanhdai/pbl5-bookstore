import {
  Box,
  Breadcrumbs,
  Button,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import Link from '@mui/material/Link';
import { Divider, notification } from 'antd';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BookService from '../../../service/BookService';
import { Navbar } from '../../components/Navbar';
import styles from './style.module.scss';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import CartService from '../../../service/CartService';
import { openNotificationWithIcon } from '../Login';
import 'antd/dist/antd.css';

export const BookDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const bookId = location.pathname.split('/')[2];
  const [data, setData] = useState([]);
  const [author, setAuthor] = useState({});
  const [genre, setGenre] = useState({});
  const [publisher, setPublisher] = useState({});
  const [date, setDate] = useState('');
  const [qty, setQty] = useState(1);

  useEffect(() => {
    BookService.getBookbyId(bookId).then(
      (response) => {
        setData(response.data);
        setAuthor(response.data.author);
        setGenre(response.data.genre);
        setPublisher(response.data.publisher);
        setDate(response.data.publiccationDate);
      },
      (error) => {
        console.log(error);
      }
    );
  }, [bookId]);

  const handleQuantity = (type) => {
    if (type === 'dec') {
      qty > 1 && setQty(qty - 1);
    } else {
      setQty(qty + 1);
    }
  };

  const handleClick = () => {
    if (localStorage.getItem('user')) {
      const userId = JSON.parse(localStorage.getItem('user')).account.id;
      CartService.addtoCart(userId, bookId, qty);
      openNotificationWithIcon('success', 'Đã thêm sản phẩm váo giỏ hàng!');
    } else {
      openNotificationWithIcon(
        'error',
        'Bạn phải đăng nhập để thêm sản phẩm vào giỏ hàng!'
      );
      navigate('/login');
    }
  };
  return (
    <div>
      <Navbar />
      <div className={styles.BookDetail}>
        <div
          className={styles.Wrapper}
          style={{
            marginBottom: '0px',
            height: 'auto',
            padding: '10px 20px',
            flexDirection: 'column',
          }}
        >
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Trang chủ
            </Link>
            <Link underline="hover" color="inherit" href={`/books/${genre.id}`}>
              {genre.name}
            </Link>
            <Typography color="text.primary">{data.title}</Typography>
          </Breadcrumbs>
        </div>
        <div className={styles.Wrapper}>
          <div className={styles.ImageContainer}>
            <img src={data.image} alt="Image" className={styles.Image} />
          </div>
          <div className={styles.DescContainer}>
            <Typography variant="h5">{data.title}</Typography>
            <Box height={10} />
            <Typography variant="Inherrit">
              Tác giả: {author.companyName}
            </Typography>
            <Box height={10} />
            <Typography variant="Inherrit">
              Nhà xuất bản: {publisher.name}
            </Typography>
            <Box height={10} />
            <Typography variant="h6">{data.price}</Typography>
            <Box height={10} />
            <span className={styles.AmountContainer}>
              <IconButton>
                <RemoveIcon onClick={() => handleQuantity('dec')} />
              </IconButton>
              <Typography variant="h6">{qty}</Typography>
              <IconButton>
                <AddIcon onClick={() => handleQuantity('inc')} />
              </IconButton>
            </span>
            <Box height={10} />
            <Button
              variant="outlined"
              style={{ width: '200px' }}
              onClick={handleClick}
            >
              Thêm vào giỏ hàng
            </Button>
          </div>
        </div>
        <div
          className={styles.Wrapper}
          style={{
            marginTop: '0px',
            height: 'auto',
            padding: '20px',
            flexDirection: 'column',
          }}
        >
          <Typography>Mô tả</Typography>
          <Divider style={{ margin: '10px 0px' }} />
          <Typography>{data.description}</Typography>
        </div>
        <div
          className={styles.Wrapper}
          style={{
            marginTop: '0px',
            height: 'auto',
            padding: '20px',
            flexDirection: 'column',
          }}
        >
          <Typography>Thông tin chi tiết</Typography>
          <Divider style={{ margin: '10px 0px' }} />
          <div className={styles.InfoCOntainer}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Typography>Tác giả:</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography>{author.companyName}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography>Nhà xuất bản:</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography>{publisher.name}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography>Ngày xuất bản:</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography>
                  {`${data.publiccationDate}`.substr(0, 10)}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography>Thể loại:</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography>{genre.name}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography>Số trang:</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography>{data.pages} trang</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography>Kích thước:</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography>{data.size}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography>Cân nặng:</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography>{data.weight} gram</Typography>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
};
