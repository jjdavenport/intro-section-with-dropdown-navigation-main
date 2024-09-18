import mobileHero from "./components/assets/image-hero-mobile.png";
import dekstopHero from "./components/assets/image-hero-desktop.png";
import Hero from "./components/hero";
import { useMediaQuery } from "react-responsive";
import Nav from "./components/nav";
import Content from "./components/content";
import Carousel from "./components/carousel";
import Footer from "./components/footer";

function App() {
  const desktop = useMediaQuery({ minWidth: 768 });
  return (
    <>
      <div className="flex h-full min-h-screen flex-col bg-almostWhite font-custom">
        <div className="relative flex flex-1 flex-col text-lg">
          <Nav desktop={desktop} />
          <Hero hero={desktop ? dekstopHero : mobileHero} />
          <Content />
          <Carousel />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
