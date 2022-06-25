import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Divider,
  List,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BookService from '../../../service/BookService';
import { Genres } from '../../components/Genres';
import { Navbar } from '../../components/Navbar';
import styles from './styles.module.scss';

export const ListAllBooks = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    BookService.getAllBook().then(
      (response) => {
        setData(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  console.log(data);

  return (
    <>
      <Navbar />
      <Genres />
      <div className={styles.Container}>
        <div className={styles.BooksWrapper}>
          {data.map((item, index) => (
            <Link to={`/book/${item.id}`} key={index}>
              <Card key={index} className={styles.Card}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.image}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="inherit" component="div">
                      {item.title.substr(0, 20)}...
                    </Typography>
                    <Typography variant="h5" color="error">
                      {item.price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
