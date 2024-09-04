import { Link, NavLink } from "react-router-dom";
export default function ShrinkNavBar() {
  return (
    <nav
      className=" navbar navbar-expand-lg navbar-light block text-right "
      id="shrinkNavBar"
    >
      <button
        className="navbar-toggler  transition-all duration-500 ease-in-out"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
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

      <div className="collapse navbar-collapse " id="navbarNav">
        <ul className="transition-all duration-1000">
          <li className="">
            <NavLink className=" text-white  navBtn" to="/">
              Home
            </NavLink>
          </li>
          <li className="  ">
            <NavLink className=" text-white   navBtn" to="/education">
              Education
            </NavLink>
          </li>
          <li className="  ">
            <NavLink className=" text-white   navBtn" to="/experience">
              Experience
            </NavLink>
          </li>
          <li className="  ">
            <NavLink className=" text-white   navBtn" to="/projects">
              Projects
            </NavLink>
          </li>
          <li className="  ">
            <NavLink className=" text-white   navBtn" to="/skills">
              Skills
            </NavLink>
          </li>
          <li className="  ">
            <NavLink className=" text-white   navBtn" to="/certificates">
              Certificate
            </NavLink>
          </li>
          <li className="  ">
            <NavLink className=" text-white   navBtn" to="/gallery">
              Gallery
            </NavLink>
          </li>
          <li className=" ">
            <NavLink className=" text-white   navBtn" to="/about">
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
