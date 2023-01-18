import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import styles from './header.module.scss';

const Header = () => {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <Logo />
        <p>+7 (495) 495-49-54</p>
      </div>
    </div>
  );
};

export default Header;
