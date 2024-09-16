const Features = ({ todo, calendar, reminders, planning }) => {
  return (
    <>
      <dialog>
        <ul>
          <li>
            Todo List
            <img src={todo} />
          </li>
          <li>
            Calendar
            <img src={calendar} />
          </li>
          <li>
            Reminders
            <img src={reminders} />
          </li>
          <li>
            Planning
            <img src={planning} />
          </li>
        </ul>
      </dialog>
    </>
  );
};

export default Features;
