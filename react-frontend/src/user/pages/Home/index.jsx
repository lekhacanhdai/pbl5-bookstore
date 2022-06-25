import React from 'react';
import { Genres } from '../../components/Genres';
import { ListBook } from '../../components/ListBooksPreview';
import { Navbar } from '../../components/Navbar';
import { Slider } from '../../components/Slider';
import styles from './style.module.scss';

export const Home = () => {
  return (
    <div className={styles.HomeContainer}>
      <Navbar />
      <Slider />
      <Genres />
      <ListBook />
    </div>
  );
};
