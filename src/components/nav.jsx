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
  const [feautures, setFeatures] = useState(false);
  const [company, setCompany] = useState(false);

  const toggle = () => setMenu(!menu);

  return (
    <>
      {desktop ? (
        <>
          <nav className="flex justify-between">
            <div className="flex">
              <img src={logo} alt="Logo" />
              <ul className="flex">
                <li>
                  <button onClick={toggle}>
                    Features <img src={menu ? arrowUp : arrowDown} />
                  </button>
                </li>
                <li>
                  <button onClick={toggle}>
                    Company <img src={menu ? arrowUp : arrowDown} />
                  </button>
                </li>
                <li>Careers</li>
                <li>About</li>
              </ul>
            </div>
            <div>
              <button>Login</button>
              <button>Sign Up</button>
            </div>
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
          <nav className="flex justify-between">
            <img src={logo} alt="Logo" />
            <button onClick={() => setMenu(true)}>
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
              close={toggle}
            />
          )}
        </>
      )}
    </>
  );
};

export default Nav;
