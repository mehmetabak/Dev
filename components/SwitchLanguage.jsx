import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import i18nConfig from '../i18n.json';
import styles from '../styles/SwitchLanguage.module.css';

const { locales } = i18nConfig;

export default function SwitchLanguage() {
  const { t } = useTranslation();
  const router = useRouter();

  const handleLanguageChange = (lng) => {
    localStorage.setItem('lang', lng);
    router.push(router.asPath, router.asPath, { locale: lng });
  };

  return (
    <div className={styles.container}>
      {locales.map((lng) => (
        <Link href="/" locale={lng} key={lng}>
          <a
            href="/" 
            rel="noopener"
            className={styles.underline}
            onClick={(e) => {
              e.preventDefault();  
              handleLanguageChange(lng); 
            }}
          >
            {t(`common:language-name-${lng}`)}
          </a>
        </Link>
      ))}
    </div>
  );
}
