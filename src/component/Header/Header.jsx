import styles from "./Header.module.css";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";
import ShrinkNavBar from "../ShrinkNavBar/ShrinkNavBar";

function Header() {
  return (
    <>
      <div
        id="headerDiv"
        className="headerDiv sticky-top top-0 right-0 left-0 theme2 w-full opacity-95  pt-1 block "
      >
        <header className=" " id="header">
          <div className="" id="headerTitle">
            <Link
              id="headerName"
              className="text-white cursor-pointer  px-3  "
              to="/"
            >
              Dennis YAU
            </Link>
          </div>
          <div className="text-right ">
            <Nav />
            <ShrinkNavBar />
          </div>
        </header>
        <div className="scrollIndicator"></div>
      </div>
    </>
  );
}

export default Header;
