import React from 'react';
import ImgOne from '../../assets/slider/img_1.jpg';
import ImgTwo from '../../assets/slider/img_2.jpg';
import ImgThree from '../../assets/slider/img_3.jpg';
import ImgFour from '../../assets/slider/img_4.jpg';
import ImgFive from '../../assets/slider/img_5.jpg';
import ImgSix from '../../assets/slider/img_6.jpg';
import ImgSeven from '../../assets/slider/img_7.jpg';
import ImgEight from '../../assets/slider/img_8.jpg';
import ImgNine from '../../assets/slider/img_9.jpg';
import ImgTen from '../../assets/slider/img_10.jpg';
import ImgEleven from '../../assets/slider/img_11.jpg';
import ImgTwelve from '../../assets/slider/img_12.jpg';
import styles from './slider.module.scss';

const Slider = () => {
  return (
    <div className={styles.container}>
      <img src={ImgOne} alt="woman" className={styles.img} />
      <img src={ImgTwo} alt="chain" className={styles.img} />
      <img src={ImgThree} alt="woman" className={styles.img} />
      <img src={ImgFour} alt="rings" className={styles.img} />
      <img src={ImgFive} alt="necklace" className={styles.img} />
      <img src={ImgSix} alt="woman" className={styles.img} />
      <img src={ImgSeven} alt="massage roller" className={styles.img} />
      <img src={ImgEight} alt="rings" className={styles.img} />
      <img src={ImgNine} alt="earrings" className={styles.img} />
      <img src={ImgTen} alt="ring" className={styles.img} />
      <img src={ImgEleven} alt="earrings" className={styles.img} />
      <img src={ImgTwelve} alt="chains" className={styles.img} />
    </div>
  );
};

export default Slider;
