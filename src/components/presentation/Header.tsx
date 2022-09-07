import { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import navigationData from "../../data/navigationData.json";

const Header: FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-10 flex max-h-fit flex-wrap items-center bg-gray-800 p-3">
      <a className="text-lg font-semibold text-gray-100" href="#">
        Jaya Foss Club
      </a>
      <button
        className="nav-toggler ml-auto inline-flex rounded p-3 text-white outline-none hover:bg-gray-900 hover:text-white lg:hidden"
        data-target="#navigation"
        onClick={() => setIsNavOpen((prev) => !prev)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <div
        className={`w-full transition-all lg:inline-flex lg:w-auto lg:flex-grow ${
          isNavOpen ? "" : "hidden"
        }`}
        id="navigation"
      >
        <div className="flex w-full flex-col items-start text-center lg:ml-auto lg:inline-flex lg:h-auto lg:w-auto lg:flex-row lg:items-center">
          {navigationData.map((nav, index) => (
            <NavLink
              key={index}
              to={nav.to}
              className="w-full items-center justify-center rounded px-3 py-2 text-gray-400 hover:bg-gray-900 hover:text-white lg:inline-flex lg:w-auto"
            >
              <span>{nav.text}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
