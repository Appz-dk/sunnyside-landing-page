import Footer from "./footer/Footer";
import Gallery from "./gallery/Gallery";
import Header from "./header/Header";
import Hero from "./header/hero/Hero";
import MainContent from "./mainContent/MainContent";
import Testtimonials from "./testimonials/Testtimonials";

const LandingPage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MainContent />
        <Testtimonials />
        <Gallery />
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
