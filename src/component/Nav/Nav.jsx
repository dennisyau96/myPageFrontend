import { NavLink, Outlet } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <>
      <nav className="text-right justify-end my-0 mx-4 w-auto bigNav">
        <NavLink className=" text-white hover:text-gray-400 mx-2 navBtn" to="/">
          Home
        </NavLink>
        <NavLink className=" text-white  navBtn" to="/education">
          Education
        </NavLink>
        <NavLink className=" text-white    navBtn" to="/experience">
          Experience
        </NavLink>
        <NavLink className=" text-white    navBtn" to="/projects">
          Projects
        </NavLink>
        <NavLink className=" text-white    navBtn" to="/skills">
          Skills
        </NavLink>
        <NavLink className=" text-white    navBtn" to="/certificates">
          Certificate
        </NavLink>
        <NavLink className=" text-white    navBtn" to="/gallery">
          Gallery
        </NavLink>
        <NavLink className=" text-white    navBtn" to="/about">
          About
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
export default Nav;
