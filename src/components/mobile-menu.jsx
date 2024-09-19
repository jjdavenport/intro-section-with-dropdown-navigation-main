import { useState } from "react";
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
        className={`fixed right-0 top-0 z-10 flex h-full w-4/6 flex-col gap-6 bg-almostWhite p-4 transition-transform duration-300 ease-in-out ${menuOpen}`}
      >
        <button onClick={close} className="flex justify-end">
          <img src={closeIcon} />
        </button>
        <ul className="flex flex-col gap-4">
          <li>
            <details>
              <summary
                className="flex cursor-pointer gap-4 transition duration-300 ease-in-out hover:text-almostBlack"
                onClick={() => setExpandedFeatures(!expandedFeatures)}
              >
                Features
                <img
                  className="object-contain"
                  src={expandedFeatures ? arrowUp : arrowDown}
                />
              </summary>
              <ul className="flex flex-col gap-4 p-4">
                <li>
                  <a
                    className="flex gap-2 transition duration-300 ease-in-out hover:text-almostBlack"
                    href="#"
                  >
                    <img className="object-contain" src={todo} />
                    Todo List
                  </a>
                </li>
                <li>
                  <a
                    className="flex gap-2 transition duration-300 ease-in-out hover:text-almostBlack"
                    href="#"
                  >
                    <img className="object-contain" src={calendar} />
                    Calendar
                  </a>
                </li>
                <li>
                  <a
                    className="flex gap-2 transition duration-300 ease-in-out hover:text-almostBlack"
                    href="#"
                  >
                    <img className="object-contain" src={reminders} />
                    Reminders
                  </a>
                </li>
                <li>
                  <a
                    className="flex gap-2 transition duration-300 ease-in-out hover:text-almostBlack"
                    href="#"
                  >
                    <img className="object-contain" src={planning} />
                    Planning
                  </a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary
                className="flex cursor-pointer gap-4 transition duration-300 ease-in-out hover:text-almostBlack"
                onClick={() => setExpandedCompany(!expandedCompany)}
              >
                Company
                <img
                  className="object-contain"
                  src={expandedCompany ? arrowUp : arrowDown}
                />
              </summary>
              <ul className="flex flex-col gap-4 p-4">
                <li>
                  <a
                    className="transition duration-300 ease-in-out hover:text-almostBlack"
                    href="#"
                  >
                    History
                  </a>
                </li>
                <li>
                  <a
                    className="transition duration-300 ease-in-out hover:text-almostBlack"
                    href="#"
                  >
                    Our Team
                  </a>
                </li>
                <li>
                  <a
                    className="transition duration-300 ease-in-out hover:text-almostBlack"
                    href="#"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a
              className="transition duration-300 ease-in-out hover:text-almostBlack"
              href="#"
            >
              Careers
            </a>
          </li>
          <li>
            <a
              className="transition duration-300 ease-in-out hover:text-almostBlack"
              href="#"
            >
              About
            </a>
          </li>
        </ul>
        <div className="flex flex-col gap-4">
          <button className="transition duration-300 ease-in-out hover:text-almostBlack">
            Login
          </button>
          <button className="transform rounded-xl p-2 outline outline-1 outline-almostBlack transition duration-300 ease-in-out hover:bg-almostBlack hover:text-almostWhite">
            Register
          </button>
        </div>
      </aside>
    </>
  );
};

export default MobileMenu;
