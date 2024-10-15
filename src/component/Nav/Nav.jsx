import { NavLink, Outlet } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <>
      <nav
        className="text-right justify-end my-0 px-1 flex flex-wrap"
        id="standardNav"
      >
        <NavLink
          className=" text-white hover:text-gray-400 standardNavBtn"
          to="/"
        >
          Home
        </NavLink>
        <NavLink className=" text-white standardNavBtn" to="/education">
          Education
        </NavLink>
        <NavLink className=" text-white    standardNavBtn" to="/experience">
          Experience
        </NavLink>
        <NavLink className=" text-white    standardNavBtn" to="/projects">
          Projects
        </NavLink>
        <NavLink className=" text-white    standardNavBtn" to="/skills">
          Skills
        </NavLink>
        <NavLink className=" text-white    standardNavBtn" to="/certificates">
          Certificate
        </NavLink>
        <NavLink className=" text-white    standardNavBtn" to="/gallery">
          Gallery
        </NavLink>
        <NavLink className=" text-white    standardNavBtn" to="/about">
          About
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
export default Nav;
