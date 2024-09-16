import data from "./assets/client-databiz.svg";
import audio from "./assets/client-audiophile.svg";
import meet from "./assets/client-meet.svg";
import maker from "./assets/client-maker.svg";

const Carousel = () => {
  return (
    <>
      <ul>
        <li>
          <img src={data} />
        </li>
        <li>
          <img src={audio} />
        </li>
        <li>
          <img src={meet} />
        </li>
        <li>
          <img src={maker} />
        </li>
      </ul>
    </>
  );
};

export default Carousel;
