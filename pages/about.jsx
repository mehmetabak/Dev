const AboutPage = () => {
  return (
    <>
      <h2>As a Software Developer</h2>
      <h3>&nbsp;</h3>
      <h3>👨‍💻 I know Kotlin, Java and Python programming languages, </h3>
      <h3>👀 I’m interested in learning new things, </h3>
      <h3>🌱 I’m currently learning software development. </h3>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
