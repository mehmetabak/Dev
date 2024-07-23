import useTranslation from 'next-translate/useTranslation';
import styles from '../styles/Blog.module.css';
import React, { useState } from 'react';

const BlogPage = () => {
  const { t } = useTranslation('articles');

  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleBack = () => {
    iframeRef.current.contentWindow.history.back();
  };

  const handleForward = () => {
    iframeRef.current.contentWindow.history.forward();
  };

  return (
    <>
      <div className={styles['my-website-container']}>
        {isLoading ? (
          <>
            <div className={styles['loading-spinner']}></div><iframe
              className={styles['webview-iframe']}
              src={process.env.NEXT_PUBLIC_WEBSITE}
              onLoad={handleLoad}
              style={{display: "none", height: "calc(70vh - 50px)"}}
            ></iframe>
          </>
          
        ) : (
          <>
            <div className={styles["mac-style-buttons"]}>
              <button className={styles["minimize-button"]}></button>
              <button className={styles["maximize-button"]}></button>
              <button className={styles["close-button"]}></button>
            </div><iframe
              className={styles['webview-iframe']}
              src={process.env.NEXT_PUBLIC_WEBSITE}
              onLoad={handleLoad}
            ></iframe>
          </>
        )}
      </div>
    </>
  );
};

export default BlogPage;
