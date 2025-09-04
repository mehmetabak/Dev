import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'm0s.space',
    href: 'https://m0s.space',
  },
  {
    social: 'email',
    link: 'mehmetabak@proton.me',
    href: 'mailto:mehmetabak@proton.me',
  },
  {
    social: 'github',
    link: 'mehmetabak',
    href: 'https://github.com/mehmetabak',
  },
  {
    social: 'medium',
    link: 'mehmetabak',
    href: 'https://abakmehmet.medium.com/',
  },
  {
    social: 'twitter',
    link: 'mehmet_m0s',
    href: 'https://x.com/mehmet_m0s',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
