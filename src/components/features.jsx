const Features = ({ todo, calendar, reminders, planning, enter, leave }) => {
  return (
    <>
      <dialog
        onMouseEnter={enter}
        onMouseLeave={leave}
        className="absolute left-20 m-0 flex"
      >
        <ul>
          <li>
            <a href="#">
              Todo List <img src={todo} />
            </a>
          </li>
          <li>
            <a href="#">
              Calendar
              <img src={calendar} />
            </a>
          </li>
          <li>
            <a href="#">
              Reminders <img src={reminders} />
            </a>
          </li>
          <li>
            <a href="#">
              Planning <img src={planning} />
            </a>
          </li>
        </ul>
      </dialog>
    </>
  );
};

export default Features;
