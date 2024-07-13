const AboutPage = () => {
  return (
    <>
      <h2 align="center">As a Software Developer</h2>
      <h3>&nbsp;</h3>
      <p align="justify">
        <h4>👨‍💻 Skilled in Java & Kotlin for Native Android Development</h4>
        <h4>🤖 Focused on Data Science & Machine Learning</h4>         
        <h4>📚 Constantly expanding my knowledge and exploring new technologies</h4>        
        <h4>📫 Feel free to reach out to me at mehmetnurabak0@gmail.com</h4>
      </p>
      <h3>&nbsp;</h3>
      <h3 align="center">Explore, Learn, Share 🚀</h3>
      <p align="justify">
        <h4>  As a software developer, I'm always on the lookout for new technologies and eager to expand my knowledge. I document my journey, insights, and experiences on my blog <a href="https://m0s.vercel.app" target="_blank">m0s</a>. Dive into my portfolio at <a href="https://mehmetabak.is-a.dev/projects" target="_blank">mehmetabak.is-a.dev</a> to discover some of my proudest projects and achievements.</h4>
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
