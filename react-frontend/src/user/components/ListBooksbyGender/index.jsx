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
import styles from './style.module.scss';

export const ListBookbyGenres = ({ item }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    BookService.getBooksbyGenresId(item.id).then(
      (response) => {
        setData(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  if (data.length !== 0) {
    return (
      <div className={styles.Container}>
        <div className={styles.HeaderContainer}>
          <Typography variant="h6">{item.name}</Typography>
          {data.length > 4 && (
            <Link to={`/books/${item.id}`}>
              <Button variant="outlined">Xem them</Button>
            </Link>
          )}
        </div>
        <Divider className={styles.Divider} />
        <div className={styles.BooksWrapper}>
          {data.slice(0, 4).map((item, index) => (
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
    );
  }
  return <></>;
};
