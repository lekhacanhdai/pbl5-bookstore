import React, { useEffect, useState } from 'react';
import GenresService from '../../../service/GenresService';
import BookService from '../../../service/BookService';
import { Box, Container } from '@mui/system';
import { Typography } from 'antd';
import { ListBookbyGenres } from '../ListBooksbyGender';
import styles from './style.module.scss';

export const ListBook = () => {
  const [data, setData] = useState([]);

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
  console.log(data);

  return (
    <div className={styles.Container}>
      <div className={styles.Wrapper}>
        {data.map((item, index) => (
          <ListBookbyGenres item={item} key={index} />
        ))}
      </div>
    </div>
  );
};
