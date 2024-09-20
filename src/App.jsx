import mobileHero from "./components/assets/image-hero-mobile.png";
import desktopHero from "./components/assets/image-hero-desktop.png";
import Hero from "./components/hero";
import { useMediaQuery } from "react-responsive";
import Nav from "./components/nav";
import Content from "./components/content";
import Carousel from "./components/carousel";
import Footer from "./components/footer";

function App() {
  const desktop = useMediaQuery({ minWidth: 1024 });
  const tablet = useMediaQuery({ minWidth: 768 });
  return (
    <>
      {desktop ? (
        <div className="flex min-h-screen flex-col bg-almostWhite font-custom font-medium text-mediumGray">
          <div className="relative flex flex-1 flex-col text-lg">
            <Nav tablet={tablet} />
            <div className="flex flex-1 items-center justify-center">
              <main className="grid grid-cols-2 grid-rows-none gap-32 md:px-10 xl:max-w-screen-xl">
                <section className="flex flex-col">
                  <Content />
                  <Carousel />
                </section>
                <Hero hero={desktopHero} />
              </main>
            </div>
          </div>
          <Footer />
        </div>
      ) : (
        <div className="flex h-full min-h-screen flex-col bg-almostWhite font-custom text-lg font-medium text-mediumGray">
          <Nav tablet={tablet} />
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
