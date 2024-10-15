import styles from "./Header.module.css";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";
import ShrinkNavBar from "../ShrinkNavBar/ShrinkNavBar";

function Header() {
  return (
    <>
      <div
        id="headerDiv"
        className="sticky-top inset-x-0 top-0 right-0 left-0 shadow-lg  theme1 h-auto  w-full opacity-95 px-3 py-3 "
      >
        <header className=" flex-wrap block" id="header">
          <div className="flex-wrap inline" id="headerTitle">
            <Link
              id="headerName"
              className="text-white cursor-pointer inline p-3"
              to="/"
            >
              Dennis YAU
            </Link>
            <ShrinkNavBar />
          </div>
          <div className="text-right block ">
            <Nav />
          </div>
        </header>
        <div className="scrollIndicator"></div>
      </div>
    </>
  );
}

export default Header;
