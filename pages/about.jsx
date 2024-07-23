import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

const AboutPage = () => {
  const { t } = useTranslation('about');

  return (
    <>
      <h2>{t('software_developer')}</h2>
      <h3>&nbsp;</h3>
      <p align="justify">
        <h4 dangerouslySetInnerHTML={{ __html: t('skilled_in') }}></h4>
        <h4 dangerouslySetInnerHTML={{ __html: t('focused_on') }}></h4>
        <h4 dangerouslySetInnerHTML={{ __html: t('expanding_knowledge') }}></h4>
        <h4 dangerouslySetInnerHTML={{ __html: t('reach_out') }}></h4>
      </p>
      <h3>&nbsp;</h3>
      <h3>{t('explore_learn_share')}</h3>
      <h3>&nbsp;</h3>
      <p align="justify">
        <h4 dangerouslySetInnerHTML={{ __html: t('software_developer_description') }}></h4>
      </p>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
