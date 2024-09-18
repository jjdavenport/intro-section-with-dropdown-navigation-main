import logo from "./assets/logo.svg";
import menuIcon from "./assets/icon-menu.svg";
import { useRef, useState } from "react";
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
  const [features, setFeatures] = useState(false);
  const [company, setCompany] = useState(false);

  const toggle = () => setMenu(!menu);

  const featuresRef = useRef(null);
  const companyRef = useRef(null);

  const timeOutEnter = (i, r) => {
    clearTimeout(r.current);
    r.current = setTimeout(() => i(true), 0);
  };

  const timeOutLeave = (i, r) => {
    clearTimeout(r.current);
    r.current = setTimeout(() => i(false), 300);
  };

  return (
    <>
      {desktop ? (
        <>
          <nav className="flex justify-between p-4">
            <div className="flex gap-2">
              <img className="object-contain" src={logo} alt="Logo" />
              <ul className="flex gap-2">
                <li>
                  <a
                    href="#"
                    className="flex"
                    onMouseEnter={() => timeOutEnter(setFeatures, featuresRef)}
                    onMouseLeave={() => timeOutLeave(setFeatures, featuresRef)}
                  >
                    Features{" "}
                    <img
                      className="object-contain"
                      src={features ? arrowUp : arrowDown}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex"
                    onMouseEnter={() => timeOutEnter(setCompany, companyRef)}
                    onMouseLeave={() => timeOutLeave(setCompany, companyRef)}
                  >
                    Company{" "}
                    <img
                      className="object-contain"
                      src={company ? arrowUp : arrowDown}
                    />
                  </a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
              </ul>
            </div>
            <div className="flex gap-2">
              <button>Login</button>
              <button>Sign Up</button>
            </div>
          </nav>
          {features && (
            <>
              <Features
                enter={() => timeOutEnter(setFeatures, featuresRef)}
                leave={() => timeOutLeave(setFeatures, featuresRef)}
                todo={todo}
                calendar={calendar}
                reminders={reminders}
                planning={planning}
              />
            </>
          )}
          {company && (
            <Company
              enter={() => timeOutEnter(setCompany, companyRef)}
              leave={() => timeOutLeave(setCompany, companyRef)}
            />
          )}
        </>
      ) : (
        <>
          <nav className="flex justify-between p-4">
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
              close={toggle}
              arrowUp={arrowUp}
              arrowDown={arrowDown}
              menuOpen={menu}
            />
          )}
        </>
      )}
    </>
  );
};

export default Nav;
