import { NavLink, Outlet } from "react-router-dom";
import styles from "./Nav.module.css";
function Nav() {
  return (
    <>
      <nav className="text-right flex flex-wrap justify-end my-2 mx-4 w-auto">
        <NavLink className="text-sm text-white hover:animate-pulse mx-2" to="/">
          Home
        </NavLink>
        <NavLink
          className="text-sm text-white hover:animate-pulse mx-2"
          to="/education"
        >
          Education
        </NavLink>
        <NavLink
          className="text-sm text-white hover:animate-pulse mx-2"
          to="/experience"
        >
          Experience
        </NavLink>
        <NavLink
          className="text-sm text-white hover:animate-pulse mx-2"
          to="/projects"
        >
          Projects
        </NavLink>
        <NavLink
          className="text-sm text-white hover:animate-pulse mx-2"
          to="/skills"
        >
          Skills
        </NavLink>
        <NavLink
          className="text-sm text-white hover:animate-pulse mx-2"
          to="/certificates"
        >
          Certificate
        </NavLink>
        <NavLink
          className="text-sm text-white hover:animate-pulse mx-2"
          to="/gallery"
        >
          Gallery
        </NavLink>
        <NavLink
          className="text-sm text-white hover:animate-pulse mx-2"
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
