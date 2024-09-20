const Content = () => {
  return (
    <>
      <article className="flex flex-1 flex-col items-center gap-4 p-4 py-6 text-center lg:items-start lg:justify-center lg:gap-8 lg:text-left">
        <h1 className="text-3xl font-bold text-almostBlack lg:text-6xl xl:text-7xl">
          Make remote work
        </h1>
        <p>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className="w-fit transform rounded-2xl bg-almostBlack px-6 py-3 font-bold text-almostWhite transition duration-300 ease-in-out hover:bg-almostWhite hover:text-almostBlack hover:outline hover:outline-1 hover:outline-almostBlack">
          Learn more
        </button>
      </article>
    </>
  );
};

export default Content;
