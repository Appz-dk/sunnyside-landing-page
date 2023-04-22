import Header from "./header/Header";
import Hero from "./header/hero/Hero";
import MainContent from "./mainContent/MainContent";

const LandingPage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MainContent />
      </main>
      <footer></footer>
    </>
  );
};

export default LandingPage;
