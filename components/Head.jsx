import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Mehmet Abak || Machine Learning engineer and Android Developer"
      />
      <meta
        name="keywords"
        content="Mehmet Abak, machine learning, Mehmet Abak's portfolio, Mehmet, Abak, web developer portfolio, Mehmet android developer, Mehmet developer, Mehmet Abak portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Mehmet Abak's Portfolio" />
      <meta
        property="og:description"
        content="A Machine Learning engineer and Android Developer."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://mehmetabak.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Mehmet Abak',
};
