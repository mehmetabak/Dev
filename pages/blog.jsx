import ProjectCard from '../components/ProjectCard';
import { getProjects } from './api/projects';
import styles from '../styles/Blog.module.css';
import React, { useState } from 'react';

const BlogPage = () => {

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
      <span className={styles["loader"]}
        style={{ visibility: isLoading ? "visible" : "hidden" }}></span>
      <div className={styles['my-website-container']}
        style={{ visibility: !isLoading ? "visible" : "hidden" }}>
        <div className={styles["mac-style-buttons"]}>
          <button className={styles["minimize-button"]}></button>
          <button className={styles["maximize-button"]}></button>
          <button className={styles["close-button"]}></button>
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

export default BlogPage;
