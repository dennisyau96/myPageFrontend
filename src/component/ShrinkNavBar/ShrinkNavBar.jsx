import { Link, NavLink } from "react-router-dom";
import Nav from "../Nav/Nav";
export default function ShrinkNavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light  "
      id="smallNavBar duration-500"
    >
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#smallnavbarNav"
        aria-controls="smallnavbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="smallnavbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            {" "}
            <NavLink className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>{" "}
            </NavLink>{" "}
          </li>{" "}
          <li className="nav-item">
            {" "}
            <NavLink className="nav-link" href="#">
              Features{" "}
            </NavLink>{" "}
          </li>{" "}
          <li className="nav-item">
            {" "}
            <NavLink className="nav-link" href="#">
              Pricing{" "}
            </NavLink>{" "}
          </li>{" "}
          <li className="nav-item">
            {" "}
            <NavLink className="nav-link disabled" href="#">
              Disabled{" "}
            </NavLink>{" "}
          </li>
        </ul>
      </div>
    </nav>

    // <nav className="navbar navbar-expand-lg navbar-light bg-light smallNavSet">
    //   <button
    //     className="navbar-toggler"
    //     type="button"
    //     data-toggle="collapse"
    //     data-target="#navbarNav"
    //     aria-controls="navbarNav"
    //     aria-expanded="false"
    //     aria-label="Toggle navigation"
    //   >
    //     <span className="navbar-toggler-icon"></span>
    //   </button>
    //   <div className="collapse navbar-collapse" id="navbarNav">
    //     <ul className="navbar-nav">
    //       <li className="nav-item active">
    //         <NavLink className="nav-link" href="#">
    //           Home <span className="sr-only">(current)</span>
    //         </NavLink>
    //       </li>
    //       <li className="nav-item">
    //         <NavLink className="nav-link" href="#">
    //           Features
    //         </NavLink>
    //       </li>
    //       <li className="nav-item">
    //         <NavLink className="nav-link" href="#">
    //           Pricing
    //         </NavLink>
    //       </li>
    //       <li className="nav-item">
    //         <NavLink className="nav-link disabled" href="#">
    //           Disabled
    //         </NavLink>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>

    // <nav
    //   id="smallNavSet"
    //   className=" transition-all ease-in-out duration-500  navbar navbar-expand-lg smallNavSet navbar-light bg-light"
    // >
    //   <button
    //     className="navbar-toggler"
    //     type="button"
    //     data-toggle="collapse"
    //     data-target="#smallNavSet"
    //     aria-controls="smallNavSet"
    //     aria-expanded="false"
    //     aria-label="Toggle navigation"
    //   >
    //     <span className="navbar-toggler-icon"></span>
    //   </button>

    //   <div className="collapse navbar-collapse" id="smallNavList">
    //     <ul>
    //       <li className="smallNavItem nav-item">
    //         {" "}
    //         <NavLink
    //           className=" text-slate-100  hover:animate-pulse hover:no-underline nav-link"
    //           to="/"
    //         >
    //           Home
    //         </NavLink>
    //       </li>
    //       <li className="hover:bg-slate-400 shrinkNavBtn nav-item">
    //         <NavLink
    //           className=" text-slate-100  hover:animate-pulse hover:no-underline nav-link"
    //           to="/education"
    //         >
    //           Education
    //         </NavLink>
    //       </li>
    //       <li className=" hover:bg-slate-400 shrinkNavBtn nav-item">
    //         <NavLink
    //           className=" text-slate-100  hover:animate-pulse hover:no-underline nav-link"
    //           to="/experience"
    //         >
    //           Experience
    //         </NavLink>
    //       </li>
    //       <li className=" hover:bg-slate-400 shrinkNavBtn nav-item">
    //         <NavLink
    //           className=" text-slate-100  hover:animate-pulse hover:no-underline nav-link"
    //           to="/projects"
    //         >
    //           Projects
    //         </NavLink>
    //       </li>
    //       <li className=" hover:bg-slate-400 shrinkNavBtn nav-item">
    //         <NavLink
    //           className=" text-slate-100  hover:animate-pulse hover:no-underline nav-link"
    //           to="/skills"
    //         >
    //           Skills
    //         </NavLink>
    //       </li>
    //       <li className=" hover:bg-slate-400 shrinkNavBtn nav-item">
    //         <NavLink
    //           className=" text-slate-100  hover:animate-pulse hover:no-underline nav-link"
    //           to="/certificates"
    //         >
    //           Certificate
    //         </NavLink>
    //       </li>
    //       <li className=" hover:bg-slate-400 shrinkNavBtn nav-item">
    //         <NavLink
    //           className=" text-slate-100  hover:animate-pulse hover:no-underline nav-link"
    //           to="/gallery"
    //         >
    //           Gallery
    //         </NavLink>
    //       </li>
    //       <li className="hover:bg-slate-400 shrinkNavBtn nav-item">
    //         <NavLink
    //           className=" text-slate-100  hover:animate-pulse hover:no-underline nav-link"
    //           to="/about"
    //         >
    //           About
    //         </NavLink>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
  );
}
