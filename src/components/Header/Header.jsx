import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Phone } from '../../assets/phone.svg';
import styles from './header.module.scss';

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Logo className={styles.logo} />
        <Phone className={styles.phone} />
        <p className={styles.phone_number}>+7 (495) 495-49-54</p>
      </div>
    </div>
  );
};

export default Header;
