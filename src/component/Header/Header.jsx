import styles from "./Header.module.css";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";
import ShrinkNavBar from "../ShrinkNavBar/ShrinkNavBar";

function Header() {
  return (
    <>
      <div
        id="headerDiv"
        className="  sticky-top inset-x-0 top-0 right-0 left-0 shadow-lg py-1 theme1 h-auto flex w-100 opacity-90"
      >
        <header id="header" className="block ">
          <div className=" items-start inline ">
            <Link
              id="headerName"
              className="text-white p-4  text-2xl hover:motion-reduce:animate-pulse cursor-pointer inline hover:no-underline"
              to="/"
            >
              Dennis YAU
              {/* <span className="text-sm">
              The Simpliest Way to Demostrate my Web Development Experience and
              Skills
            </span> */}
            </Link>
            <ShrinkNavBar />
          </div>

          <Nav />
        </header>
      </div>
    </>
  );
}

export default Header;
