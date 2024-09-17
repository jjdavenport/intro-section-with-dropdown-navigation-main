import closeIcon from "./assets/icon-close-menu.svg";

const MobileMenu = ({
  todo,
  calendar,
  reminders,
  planning,
  arrowUp,
  arrowDown,
  menu,
  close,
}) => {
  return (
    <>
      <aside className="right absolute right-0 top-0 m-0 flex flex-col p-4">
        <button onClick={close} className="flex justify-end">
          <img src={closeIcon} />
        </button>
        <ul>
          <li>
            <details>
              <summary>
                Features <img src={menu ? arrowUp : arrowDown} />
              </summary>
              <ul>
                <li>
                  <a href="#">
                    Todo List
                    <img src={todo} />
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
                    Reminders
                    <img src={reminders} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    Planning
                    <img src={planning} />
                  </a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>
                Company
                <img src={menu ? arrowUp : arrowDown} />
              </summary>
              <ul>
                <li>
                  <a href="#">History</a>
                </li>
                <li>
                  <a href="#">Our Team</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
        <button>Login</button>
        <button>Register</button>
      </aside>
    </>
  );
};

export default MobileMenu;
