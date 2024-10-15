import styles from "./Header.module.css";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";
import ShrinkNavBar from "../ShrinkNavBar/ShrinkNavBar";

function Header() {
  return (
    <>
      <div
        id="headerDiv"
        className="sticky-top  top-0 right-0 left-0 shadow-lg  theme1 h-auto  w-full opacity-95 px-3 py-3 block "
      >
        <header className=" " id="header">
          <div className="" id="headerTitle">
            <Link
              id="headerName"
              className="text-white cursor-pointer  p-3  "
              to="/"
            >
              Dennis YAU
            </Link>
            <ShrinkNavBar />
          </div>
          <div className="text-right  ">
            <Nav />
          </div>
        </header>
        <div className="scrollIndicator"></div>
      </div>
      <div id="scrollIndicator" className="scrollIndicator"></div>
    </>
  );
}

export default Header;
