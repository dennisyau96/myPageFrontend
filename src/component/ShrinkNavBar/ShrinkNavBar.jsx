import { Link, NavLink } from "react-router-dom";

export default function ShrinkNavBar() {
  return (
    <nav
      className=" navbar navbar-expand-lg navbar-light text-right text-white "
      id="shrinkNavBar"
    >
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav1"
        aria-controls="navbarNav1"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="">
          <svg
            viewBox="0 0 100 80"
            width="20"
            height="20"
            fill="white"
            stroke="white"
          >
            <rect width="100" height="20"></rect>
            <rect y="30" width="100" height="20"></rect>
            <rect y="60" width="100" height="20"></rect>
          </svg>
        </span>
      </button>

      <div
        className=" collapse navbar-collapse px-3 transition-all duration-500 ease-in-out  text-white"
        id="navbarNav1"
      >
        <ul className="navbar-nav">
          <li className="hover:bg-slate-400 ">
            <NavLink
              className=" text-slate-100 hover:text-gray-800 hover:animate-pulse hover:no-underline "
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="hover:bg-slate-400  ">
            <NavLink
              className=" text-slate-100 hover:text-gray-800 hover:animate-pulse hover:no-underline "
              to="/education"
            >
              Education
            </NavLink>
          </li>
          <li className=" hover:bg-slate-400 ">
            <NavLink
              className=" text-slate-100 hover:text-gray-800 hover:animate-pulse hover:no-underline "
              to="/experience"
            >
              Experience
            </NavLink>
          </li>
          <li className=" hover:bg-slate-400 ">
            <NavLink
              className=" text-slate-100 hover:text-gray-800 hover:animate-pulse hover:no-underline "
              to="/projects"
            >
              Projects
            </NavLink>
          </li>
          <li className=" hover:bg-slate-400 ">
            <NavLink
              className=" text-slate-100 hover:text-gray-800 hover:animate-pulse hover:no-underline "
              to="/skills"
            >
              Skills
            </NavLink>
          </li>
          <li className=" hover:bg-slate-400 ">
            <NavLink
              className=" text-slate-100 hover:text-gray-800 hover:animate-pulse hover:no-underline "
              to="/certificates"
            >
              Certificate
            </NavLink>
          </li>
          <li className=" hover:bg-slate-400 ">
            <NavLink
              className=" text-slate-100 hover:text-gray-800 hover:animate-pulse hover:no-underline "
              to="/gallery"
            >
              Gallery
            </NavLink>
          </li>
          <li className="hover:bg-slate-400 ">
            <NavLink
              className=" text-slate-100 hover:text-gray-800 hover:animate-pulse hover:no-underline "
              to="/about"
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
