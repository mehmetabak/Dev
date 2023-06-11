const AboutPage = () => {
  return (
    <>
      <h3>As a Software Developer</h3>
      <h2>👨‍💻 I know kotlin, java and python programming languages , </h2>
      <h2>👀 I’m interested in learning new things , </h2>
      <h2>🌱 I’m currently learning software development , </h2>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
