import { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";
import LightToDark from '../../switcher/LightToDark'

export default function Header() {

  const [scrollPer, setScrollPer] = useState(0);

  function handleScroll() {
    const howMuchScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPer((howMuchScroll / height) * 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <header className="shadow sticky z-50 top-0 dark:bg-black bg-white">
      <nav className="px-4 border-2 rounded-full ">
        <ul className="flex font-medium justify-center space-x-8 ">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 text-3xl font-bold ${
                  isActive ? "text-orange-700" : "text-gray-500"
                } hover:text-orange-700 `
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 text-3xl font-bold ${
                  isActive ? "text-orange-700" : "text-gray-500"
                } hover:text-orange-700 `
              }    
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/socialMedia"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 text-3xl font-bold ${
                  isActive ? "text-orange-700" : "text-gray-500"
                } hover:text-orange-700`
              }
            >
              Github
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/game1"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 text-3xl font-bold ${
                  isActive ? "text-orange-700" : "text-gray-500"
                } hover:text-orange-700 `
              }
            >
              Tic-Tact-Toe-Game
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/game2"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 text-3xl font-bold ${
                  isActive ? "text-orange-700" : "text-gray-500"
                } hover:text-orange-700`
              }
            >
              Country-Capital-Game
            </NavLink>
          </li>
       <LightToDark />
        </ul>
        <div className="">
          <div
            className="h-1 bg-sky-600 w-0 rounded-full "
            style={{ width: `${scrollPer}%` }}
          ></div>
        </div>
      </nav>
    </header>
  );
}
