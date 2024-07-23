import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import GitHubCalendar from 'react-github-calendar';
import RepoCard from '../components/RepoCard';
import styles from '../styles/GithubPage.module.css';

const GithubPage = ({ repos, user }) => {
  const { t } = useTranslation('github');

  const theme = {
    level0: '#161B22',
    level1: '#0e4429',
    level2: '#006d32',
    level3: '#26a641',
    level4: '#39d353',
  };

  const labels = {
    months: [
      t('months.0'),
      t('months.1'),
      t('months.2'),
      t('months.3'),
      t('months.4'),
      t('months.5'),
      t('months.6'),
      t('months.7'),
      t('months.8'),
      t('months.9'),
      t('months.10'),
      t('months.11'),
    ],
    weekdays: [
      t('weekdays.0'),
      t('weekdays.1'),
      t('weekdays.2'),
      t('weekdays.3'),
      t('weekdays.4'),
      t('weekdays.5'),
      t('weekdays.6'),
    ],
    totalCount: t('totalCount'),
    legend: {
      less: t('legend.less'),
      more: t('legend.more'),
    },
  };

  return (
    <>
      <div className={styles.user}>
        <div>
          <Image
            src={user.avatar_url}
            className={styles.avatar}
            alt={user.login}
            width={60}
            height={60}
          />
          <h3 className={styles.username}>{user.login}</h3>
        </div>
        <div>
          <h3>{user.public_repos} {t('repos')}</h3>
        </div>
        <div>
          <h3>{user.followers} {t('followers')}</h3>
        </div>
      </div>
      <div className={styles.container}>
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
      <div className={styles.contributions}>
        <GitHubCalendar
          username={process.env.NEXT_PUBLIC_GITHUB_USERNAME}
          theme={theme}
          hideColorLegend
          hideMonthLabels
          labels={labels}
          dateFormat={"dd/MM/yyyy"}
          showWeekdayLabels
          blockSize={16}
          blockRadius={20}
        />
      </div>
    </>
  );
};

export async function getStaticProps() {
  const userRes = await fetch(
    `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_API_KEY}`,
      },
    }
  );
  const user = await userRes.json();

  const repoRes = await fetch(
    `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos?per_page=100`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_API_KEY}`,
      },
    }
  );
  
  let repos = await repoRes.json();
  repos = repos
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 6);

  return {
    props: { title: 'GitHub', repos, user },
    revalidate: 10,
  };
}

export default GithubPage;
