import React, { useEffect, useState } from 'react';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import styles from './style.module.scss';
import {
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import GenresService from '../../../service/GenresService';
import { Link, useLocation } from 'react-router-dom';

export const Genres = () => {
  const [data, setData] = useState([]);
  const location = useLocation();
  const genresId = location.pathname.split('/')[2];

  useEffect(() => {
    GenresService.getAllGenres().then(
      (response) => {
        setData(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <div className={styles.CommonContainer}>
      <Divider className={styles.Divider} style={{ marginTop: '10px' }} />
      <List
        component={Stack}
        direction="row"
        className={styles.GenresContainer}
      >
        <Link to={`/books/all`}>
          <ListItem
            className={`${styles.GenresItem} ${
              genresId === 'all' && styles.Active
            }`}
          >
            <Button variant="outlined" className={styles.ButtonStyle}>
              Tất cả
            </Button>
          </ListItem>
        </Link>
        {data.map((item, index) => (
          <Link to={`/books/${item.id}`} key={index}>
            <ListItem
              key={index}
              className={`${styles.GenresItem} ${
                genresId == item.id && styles.Active
              }`}
            >
              <Button variant="outlined" className={styles.ButtonStyle}>
                {item.name}
              </Button>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider className={styles.Divider} />
    </div>
  );
};
