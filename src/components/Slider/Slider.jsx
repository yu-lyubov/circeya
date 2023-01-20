import React, {useLayoutEffect, useRef} from 'react';
import styles from './slider.module.scss';

const IMG_COUNT = 12;

const Slider = ({isMobile}) => {
  const arr = new Array(IMG_COUNT).fill(1);
  const wrapper = useRef();
  const container = useRef();


  useLayoutEffect(() => {
    window.addEventListener('load', () => {
      const ct = container.current.getBoundingClientRect();
      wrapper.current.scrollLeft = -ct.top;

      // dynamically changing height of container
      container.current.style.height = `${(IMG_COUNT + 5) * 320 + (IMG_COUNT - 3) * 40 - container.current.clientWidth}px`;
    });

    document.addEventListener('scroll', () => {
      const ct = container.current.getBoundingClientRect();
      if (ct.top < 0) {
        wrapper.current.scrollLeft = -ct.top;
      }
    });
  });

  return (
    <>
      <div className={styles.main_container} ref={container}>
        <div className={styles.scrollable}>
          <h1 className={styles.heading}>Lorem ipsum dolor sit amet</h1>
          <div className={styles.wrapper} ref={wrapper}>
            <div className={styles.container}>
              {arr.map((el, idx) => {
                return (
                  <img
                    key={`img-${idx + 1}`}
                    src={`${process.env.PUBLIC_URL}/images/img_${idx + 1}.jpg`}
                    alt={`img-${idx + 1}`}
                    className={styles.img}
                  />
                )
              })}
              <div className={styles.emptyGap}/>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mobile_container}>
        <h1 className={styles.mobile_heading}>Lorem ipsum dolor sit amet</h1>
        <div className={styles.mobile_slider}>
          {arr.map((el, idx) => {
            return (
              <img
                key={`img-${idx + 1}`}
                src={`${process.env.PUBLIC_URL}/images/img_${idx + 1}.jpg`}
                alt={`img-${idx + 1}`}
                className={styles.mobile_img}
              />
            )
          })}
        </div>
      </div>
    </>
  );
};

export default Slider;
