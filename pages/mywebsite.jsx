import ProjectCard from '../components/ProjectCard';
import { getProjects } from './api/projects';
import styles from '../styles/myWebsite.module.css';
import React, { useState } from 'react';

const myWebsite = () => {

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
        <div className={styles["mac-style-buttons"]}>
          <button className={styles["mac-style-buttons .minimize-button"]}></button>
          <button className={styles["mac-style-buttons .maximize-button"]}></button>
          <button className={styles["mac-style-buttons .close-button"]}></button>
        </div>
        <iframe
          className={styles['webview-iframe']}
          src= {process.env.NEXT_PUBLIC_WEBSITE}
          onLoad={handleLoad}
        ></iframe>
      </div>
    </>
  );
};

export default myWebsite;
