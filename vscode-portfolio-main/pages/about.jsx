const AboutPage = () => {
  return (
    <>
      <h3>I am Blinera, a Frontend Developer and QA with 3.5 years of experience. <br/>I hold a Bachelor's degree in Computer Engineering from the University of Pristina. <br/> <br/> My expertise includes frontend development, with skills in Javascript (ReactJs, VueJs, NextJs, NuxtJs), Typescript, SCSS & Tailwind and manual & automation testing in Cypress, Playwright and various testing methodologies.</h3>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
