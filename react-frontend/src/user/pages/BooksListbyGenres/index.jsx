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
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import BookService from '../../../service/BookService';
import { Genres } from '../../components/Genres';
import { Navbar } from '../../components/Navbar';
import styles from './style.module.scss';

export const BooksListbyGenres = () => {
  const location = useLocation();
  const genresId = location.pathname.split('/')[2];

  const [data, setData] = useState([]);
  useEffect(() => {
    BookService.getBooksbyGenresId(genresId).then(
      (response) => {
        setData(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, [genresId]);

  return (
    <>
      <Navbar />
      <Genres />
      <div className={styles.Container}>
        <Divider className={styles.Divider} />
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
