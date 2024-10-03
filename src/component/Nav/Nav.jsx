import { NavLink, Outlet } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <>
      <nav className="text-right justify-end my-0 mx-4 w-auto navBar">
        <NavLink className=" text-white hover:animate-pulse mx-2 navBtn" to="/">
          Home
        </NavLink>
        <NavLink
          className=" text-white hover:animate-pulse  navBtn"
          to="/education"
        >
          Education
        </NavLink>
        <NavLink
          className=" text-white hover:animate-pulse  navBtn"
          to="/experience"
        >
          Experience
        </NavLink>
        <NavLink
          className=" text-white hover:animate-pulse  navBtn"
          to="/projects"
        >
          Projects
        </NavLink>
        <NavLink
          className=" text-white hover:animate-pulse  navBtn"
          to="/skills"
        >
          Skills
        </NavLink>
        <NavLink
          className=" text-white hover:animate-pulse  navBtn"
          to="/certificates"
        >
          Certificate
        </NavLink>
        <NavLink
          className=" text-white hover:animate-pulse  navBtn"
          to="/gallery"
        >
          Gallery
        </NavLink>
        <NavLink
          className=" text-white hover:animate-pulse  navBtn"
          to="/about"
        >
          About
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
export default Nav;
