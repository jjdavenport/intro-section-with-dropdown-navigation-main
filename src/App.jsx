import mobileHero from "./components/assets/image-hero-mobile.png";
import dekstopHero from "./components/assets/image-hero-desktop.png";
import Hero from "./components/hero";
import { useMediaQuery } from "react-responsive";
import Nav from "./components/nav";
import Content from "./components/content";
import Carousel from "./components/carousel";

function App() {
  const desktop = useMediaQuery({ minWidth: 768 });
  return (
    <>
      <Nav desktop={desktop} />
      <Hero hero={desktop ? dekstopHero : mobileHero} />
      <Content />
      <Carousel />
    </>
  );
}

export default App;
