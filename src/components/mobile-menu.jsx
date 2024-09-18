import { useDebugValue, useState } from "react";
import closeIcon from "./assets/icon-close-menu.svg";

const MobileMenu = ({
  todo,
  calendar,
  reminders,
  planning,
  arrowUp,
  arrowDown,
  close,
  menuOpen,
}) => {
  const [expandedFeatures, setExpandedFeatures] = useState(false);
  const [expandedCompany, setExpandedCompany] = useState(false);

  return (
    <>
      <aside
        className={`right absolute right-0 top-0 z-10 m-0 flex h-full w-4/6 transform flex-col bg-almostWhite p-4 transition duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"} `}
      >
        <button onClick={close} className="flex justify-end">
          <img src={closeIcon} />
        </button>
        <ul>
          <li>
            <details>
              <summary
                className="flex cursor-pointer"
                onClick={() => setExpandedFeatures(!expandedFeatures)}
              >
                Features
                <img
                  className="object-contain"
                  src={expandedFeatures ? arrowUp : arrowDown}
                />
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
              <summary
                className="flex cursor-pointer"
                onClick={() => setExpandedCompany(!expandedCompany)}
              >
                Company
                <img
                  className="object-contain"
                  src={expandedCompany ? arrowUp : arrowDown}
                />
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
