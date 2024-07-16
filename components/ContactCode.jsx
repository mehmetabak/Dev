import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'arastir.super.site',
    href: 'https://arastir.super.site',
  },
  {
    social: 'email',
    link: 'mehmetnurabak0@gmail.com',
    href: 'mailto:mehmetnurabak0@gmail.com',
  },
  {
    social: 'github',
    link: 'memoli0',
    href: 'https://github.com/memoli0',
  },
  {
    social: 'linkedin',
    link: 'mehmet-a-12a716226',
    href: 'https://www.linkedin.com/in/mehmet-a-12a716226',
  },
  {
    social: 'twitter',
    link: 'Mehmetn45363159',
    href: 'https://twitter.com/Mehmetn45363159',
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
