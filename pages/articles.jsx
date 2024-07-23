import useTranslation from 'next-translate/useTranslation';
import ArticleCard from '../components/ArticleCard';
import styles from '../styles/ArticlesPage.module.css';

const ArticlesPage = ({ articles }) => {
  const { t } = useTranslation('articles');

  return (
    <>
      <h3>
        {t('title')}
        <a
          href="https://dev.to/mehmetabak"
          target="_blank"
          rel="noopener"
          className={styles.underline}
        >
          dev.to
        </a>
      </h3>
      <div className={styles.container}>
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const response = await fetch(`https://dev.to/api/articles?username=mehmetabak`);
  
  const data = await response.json();

  return {
    props: { title: 'Articles', articles: data },
    revalidate: 60,
  };
}

export default ArticlesPage;
