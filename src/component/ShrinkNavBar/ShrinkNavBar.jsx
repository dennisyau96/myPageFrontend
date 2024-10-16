import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Nav from "../Nav/Nav";
export default function ShrinkNavBar() {
  const [collapsed, setCollapsed] = useState(true);

  function toggle() {
    setCollapsed(!collapsed);
  }
  return (
    <div
      className="transition-all duration-500 text-right shrinkNav"
      id="shrinkNav"
    >
      <button
        className=" navbar-toggler text-gray-200 mx-3 border-1 shrinkNavToggle"
        id="shrinkNavToggle"
        onClick={() => toggle()}
      >
        <span className=" text-3xl inline">=</span>
      </button>
      {collapsed ? null : (
        <div
          id="dropDownList"
          className=" mt-1 transition-all duration-500 dropDownList py-2 theme1"
          aria-expanded="false"
        >
          <ul className="">
            <li>
              <NavLink
                className=" text-white hover:text-gray-400 shrinkNavBtn dropdown-item "
                to="/"
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                className=" text-white shrinkNavBtn dropdown-item"
                to="/education"
              >
                Education
              </NavLink>
            </li>
            <li>
              <NavLink
                className=" text-white shrinkNavBtn dropdown-item"
                to="/experience"
              >
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink
                className=" text-white    shrinkNavBtn dropdown-item"
                to="/projects"
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                className=" text-white    shrinkNavBtn dropdown-item"
                to="/skills"
              >
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink
                className=" text-white    shrinkNavBtn dropdown-item"
                to="/certificates"
              >
                Certificate
              </NavLink>
            </li>
            <li>
              <NavLink
                className=" text-white    shrinkNavBtn dropdown-item"
                to="/gallery"
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                className=" text-white    shrinkNavBtn dropdown-item"
                to="/about"
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
