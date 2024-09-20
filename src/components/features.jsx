const Features = ({ todo, calendar, reminders, planning, enter, leave }) => {
  return (
    <>
      <dialog
        onMouseEnter={enter}
        onMouseLeave={leave}
        className="absolute m-0 flex rounded-lg p-4 text-mediumGray shadow-2xl md:left-20 md:top-16 lg:left-24"
      >
        <ul className="flex flex-col gap-2">
          <li>
            <a className="flex items-center gap-2" href="#">
              <img className="object-contain" src={todo} />
              <span className="transition duration-300 ease-in-out hover:text-almostBlack">
                Todo List
              </span>
            </a>
          </li>
          <li>
            <a className="flex items-center gap-2" href="#">
              <img className="object-contain" src={calendar} />
              <span className="transition duration-300 ease-in-out hover:text-almostBlack">
                Calendar
              </span>
            </a>
          </li>
          <li>
            <a className="flex items-center gap-2" href="#">
              <img className="object-contain" src={reminders} />
              <span className="transition duration-300 ease-in-out hover:text-almostBlack">
                Reminders
              </span>
            </a>
          </li>
          <li>
            <a className="flex items-center gap-2" href="#">
              <img className="object-contain" src={planning} />
              <span className="transition duration-300 ease-in-out hover:text-almostBlack">
                Planning
              </span>
            </a>
          </li>
        </ul>
      </dialog>
    </>
  );
};

export default Features;
