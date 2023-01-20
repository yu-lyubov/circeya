import React from 'react';
import Content from '../Content/Content';
import Slider from '../Slider/Slider';
import PhotoOne from '../../assets/content/photo_1.jpg';
import PhotoTwo from '../../assets/content/photo_2.jpg';
import PhotoThree from '../../assets/content/photo_3.jpg';
import PhotoFour from '../../assets/content/photo_4.jpg';
import styles from './main.module.scss';

const Main = ({ isMobile }) => {
  return (
    <div className={styles.main_container}>
      <div className={styles.pt_200}>
        <Content photoTop={PhotoOne} photoBottom={PhotoTwo} />
      </div>
      <Slider isMobile={isMobile} />
      <div className={styles.pt_160}>
        <Content photoTop={PhotoThree} photoBottom={PhotoFour} mb />
      </div>
    </div>
  );
};

export default Main;
