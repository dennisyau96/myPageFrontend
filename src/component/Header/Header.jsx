import styles from "./Header.module.css";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div
        id="headerDiv"
        className="  sticky-top inset-x-0 top-0 right-0 left-0 shadow-lg  theme1 h-auto flex w-100 opacity-90"
      >
        <header id="header" className="inline-block m-0 ">
          <Link
            id="headerName"
            className="text-white  p-4 text-2xl hover:motion-reduce:animate-pulse cursor-pointer "
            to="/"
          >
            Dennis YAU
            <br />
            {/* <span className="text-sm">
              The Simpliest Way to Demostrate my Web Development Experience and
              Skills
            </span> */}
          </Link>
          <Nav />
        </header>
      </div>
    </>
  );
}

export default Header;
