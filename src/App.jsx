import mobileHero from "./components/assets/image-hero-mobile.png";
import desktopHero from "./components/assets/image-hero-desktop.png";
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
      {desktop ? (
        <div className="flex h-full min-h-screen flex-col bg-almostWhite font-custom font-medium text-mediumGray">
          <div className="relative flex flex-1 flex-col text-lg">
            <Nav desktop={desktop} />
            <main className="flex h-full flex-row-reverse p-4">
              <Hero hero={desktopHero} />
              <section className="flex w-1/2 flex-col justify-between">
                <Content />
                <Carousel />
              </section>
            </main>
          </div>
          <Footer />
        </div>
      ) : (
        <div className="flex h-full min-h-screen flex-col bg-almostWhite font-custom text-lg font-medium text-mediumGray">
          <Nav desktop={desktop} />
          <main className="flex flex-1 flex-col justify-evenly">
            <Hero hero={mobileHero} />
            <Content />
            <Carousel />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
