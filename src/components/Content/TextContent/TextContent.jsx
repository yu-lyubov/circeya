import React from 'react';
import styles from './textContent.module.scss';

const TextContent = () => {
  return (
    <div className={styles.text_content}>
      <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
      <p>
        Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <p>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
        deserunt mollit anim id est laborum
      </p>
    </div>
  );
};

export default TextContent;
