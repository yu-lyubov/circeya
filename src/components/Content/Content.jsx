import React from 'react';
import TextContent from './TextContent/TextContent';
import styles from './content.module.scss';

const Content = ({ photoTop, photoBottom }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>ut aliquip ex ea commodo consequat</h1>
      <div className={styles.content_block}>
        <div className={styles.block_one}>
          <img className={styles.photo_top} src={photoTop} alt="woman" />
          <TextContent />
        </div>
        <div className={styles.block_two}>
          <TextContent />
          <img className={styles.photo_bottom} src={photoBottom} alt="woman" />
        </div>
      </div>
    </div>
  );
};

export default Content;