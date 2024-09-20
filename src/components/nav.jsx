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

const Nav = ({ tablet }) => {
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
      {tablet ? (
        <>
          <nav className="flex items-center justify-between p-8">
            <div className="flex md:gap-4 lg:gap-8">
              <img className="object-contain" src={logo} alt="Logo" />
              <ul className="flex md:gap-4 lg:gap-8">
                <li>
                  <a
                    href="#"
                    className={`flex gap-1 transition duration-300 ease-in-out hover:text-almostBlack ${features ? "text-almostBlack" : "text-mediumGray"}`}
                    onMouseEnter={() => timeOutEnter(setFeatures, featuresRef)}
                    onMouseLeave={() => timeOutLeave(setFeatures, featuresRef)}
                  >
                    Features
                    <img
                      className="object-contain"
                      src={features ? arrowUp : arrowDown}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`flex gap-1 transition duration-300 ease-in-out hover:text-almostBlack ${company ? "text-almostBlack" : "text-mediumGray"}`}
                    onMouseEnter={() => timeOutEnter(setCompany, companyRef)}
                    onMouseLeave={() => timeOutLeave(setCompany, companyRef)}
                  >
                    Company
                    <img
                      className="object-contain"
                      src={company ? arrowUp : arrowDown}
                    />
                  </a>
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
            </div>
            <div className="flex md:gap-4 lg:gap-8">
              <button className="transition duration-300 ease-in-out hover:text-almostBlack">
                Login
              </button>
              <button className="rounded-lg px-4 py-1 outline outline-1 outline-mediumGray transition duration-300 ease-in-out hover:text-almostBlack hover:outline-almostBlack">
                Register
              </button>
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
            <div
              className="z-5 fixed inset-0 bg-black opacity-50"
              onClick={toggle}
            ></div>
          )}
          <MobileMenu
            todo={todo}
            calendar={calendar}
            reminders={reminders}
            planning={planning}
            close={toggle}
            arrowUp={arrowUp}
            arrowDown={arrowDown}
            menuOpen={menu ? "translate-x-0" : "translate-x-full"}
          />
        </>
      )}
    </>
  );
};

export default Nav;
