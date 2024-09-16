import close from "./assets/icon-close-menu.svg";

const MobileMenu = ({
  todo,
  calendar,
  reminders,
  planning,
  arrowUp,
  arrowDown,
  menu,
}) => {
  return (
    <>
      <dialog>
        <button>
          <img src={close} />
        </button>
        <ul>
          <li>
            <details>
              <summary>
                Features <img src={menu ? arrowUp : arrowDown} />
              </summary>
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
            </details>
          </li>
          <li>
            <details>
              <summary>
                Company
                <img src={menu ? arrowUp : arrowDown} />
              </summary>
              <ul>
                <li>History</li>
                <li>Our Team</li>
                <li>Blog</li>
              </ul>
            </details>
          </li>
          <li>Careers</li>
          <li>About</li>
        </ul>
        <button>Login</button>
        <button>Register</button>
      </dialog>
    </>
  );
};

export default MobileMenu;
