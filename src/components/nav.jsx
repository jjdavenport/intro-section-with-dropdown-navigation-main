import logo from "./assets/logo.svg";
import menuIcon from "./assets/icon-menu.svg";
import { useState } from "react";
import MobileMenu from "./mobile-menu";
import Features from "./features";
import Company from "./company";
import todo from "./assets/icon-todo.svg";
import calendar from "./assets/icon-calendar.svg";
import reminders from "./assets/icon-reminders.svg";
import planning from "./assets/icon-planning.svg";
import arrowUp from "./assets/icon-arrow-up.svg";
import arrowDown from "./assets/icon-arrow-down.svg";

const Nav = ({ desktop }) => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      {desktop ? (
        <>
          <nav>
            <img src={logo} alt="Logo" />
            <ul>
              <li>
                <button onClick={() => setMenu(true)}>
                  Features <img src={menu ? arrowUp : arrowDown} />
                </button>
              </li>
              <li>
                <button onClick={() => setMenu(true)}>
                  Company <img src={menu ? arrowUp : arrowDown} />
                </button>
              </li>
              <li>Careers</li>
              <li>About</li>
            </ul>
            <button>Login</button>
            <button>Sign Up</button>
          </nav>
          {menu && (
            <>
              <Company />
              <Features
                todo={todo}
                calendar={calendar}
                reminders={reminders}
                planning={planning}
              />
            </>
          )}
        </>
      ) : (
        <>
          <nav>
            <img src={logo} alt="Logo" />
            <button onClick={() => setMenu(!menu)}>
              <img src={menuIcon} alt="Menu Icon" />
            </button>
          </nav>
          {menu && (
            <MobileMenu
              todo={todo}
              calendar={calendar}
              reminders={reminders}
              planning={planning}
              menu={menu}
            />
          )}
        </>
      )}
    </>
  );
};

export default Nav;
