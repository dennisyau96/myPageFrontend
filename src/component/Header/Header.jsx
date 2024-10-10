import styles from "./Header.module.css";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";
import ShrinkNavBar from "../ShrinkNavBar/ShrinkNavBar";

function Header() {
  return (
    <>
      <div
        id="headerDiv"
        className="  sticky-top inset-x-0 top-0 right-0 left-0 shadow-lg py-1 theme1 h-auto flex flex-wrap w-full opacity-90 animate__slideInDown"
      >
        <header id="header" className=" w-100">
          <div className=" items-start block " id="headerTitle">
            <Link
              id="headerName"
              className="text-white p-4  text-2xl hover:motion-reduce:animate-pulse cursor-pointer hover:no-underline pageTitle2"
              to="/"
            >
              Dennis YAU
              {/* <span className="text-sm">
              The Simpliest Way to Demostrate my Web Development Experience and
              Skills
            </span> */}
            </Link>
          </div>
          {/* <ShrinkNavBar /> */}
          <Nav />
        </header>
        <div className="scrollIndicator"></div>
      </div>
    </>
  );
}

export default Header;
