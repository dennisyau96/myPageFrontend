import { NavLink, Outlet } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <>
      <nav
        className="text-right justify-end my-0 px-1 flex flex-wrap standardNav right-0"
        id="standardNav"
      >
        <NavLink id="stdNavBtn1" className=" text-white standardNavBtn" to="/">
          Home
        </NavLink>
        <NavLink
          id="stdNavBtn1"
          className=" text-white standardNavBtn"
          to="/education"
        >
          Education
        </NavLink>
        <NavLink
          id="stdNavBtn2"
          className=" text-white standardNavBtn"
          to="/experience"
        >
          Experience
        </NavLink>
        <NavLink
          id="stdNavBtn3"
          className=" text-white standardNavBtn"
          to="/projects"
        >
          Projects
        </NavLink>
        <NavLink
          id="stdNavBtn4"
          className=" text-white standardNavBtn"
          to="/skills"
        >
          Skills
        </NavLink>
        <NavLink
          id="stdNavBtn5"
          className=" text-white standardNavBtn"
          to="/certificates"
        >
          Certificate
        </NavLink>
        <NavLink
          id="stdNavBtn6"
          className=" text-white standardNavBtn"
          to="/gallery"
        >
          Gallery
        </NavLink>
        <NavLink
          id="stdNavBtn7"
          className=" text-white standardNavBtn"
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
