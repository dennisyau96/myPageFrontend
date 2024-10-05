import { Link, NavLink } from "react-router-dom";
export default function ShrinkNavBar() {
  return (
    <div>
      <nav id="smallNav" className=" transition-all ease">
        <ul>
          <li className="smallNavItem">
            {" "}
            <NavLink
              className=" text-slate-100  hover:animate-pulse hover:no-underline "
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="hover:bg-slate-400 shrinkNavBtn ">
            <NavLink
              className=" text-slate-100  hover:animate-pulse hover:no-underline "
              to="/education"
            >
              Education
            </NavLink>
          </li>
          <li className=" hover:bg-slate-400 shrinkNavBtn">
            <NavLink
              className=" text-slate-100  hover:animate-pulse hover:no-underline "
              to="/experience"
            >
              Experience
            </NavLink>
          </li>
          <li className=" hover:bg-slate-400 shrinkNavBtn">
            <NavLink
              className=" text-slate-100  hover:animate-pulse hover:no-underline "
              to="/projects"
            >
              Projects
            </NavLink>
          </li>
          <li className=" hover:bg-slate-400 shrinkNavBtn">
            <NavLink
              className=" text-slate-100  hover:animate-pulse hover:no-underline "
              to="/skills"
            >
              Skills
            </NavLink>
          </li>
          <li className=" hover:bg-slate-400 shrinkNavBtn">
            <NavLink
              className=" text-slate-100  hover:animate-pulse hover:no-underline "
              to="/certificates"
            >
              Certificate
            </NavLink>
          </li>
          <li className=" hover:bg-slate-400 shrinkNavBtn">
            <NavLink
              className=" text-slate-100  hover:animate-pulse hover:no-underline "
              to="/gallery"
            >
              Gallery
            </NavLink>
          </li>
          <li className="hover:bg-slate-400 shrinkNavBtn">
            <NavLink
              className=" text-slate-100  hover:animate-pulse hover:no-underline "
              to="/about"
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
