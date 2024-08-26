import styles from "./Header.module.css";
import Nav from "../Nav/Nav";

function Header() {
  return (
    <>
      <div
        id="headerDiv"
        className="  sticky-top inset-x-0 top-0 right-0 left-0 shadow-lg  theme1 h-auto flex w-100"
      >
        <header id="header" className="inline-block m-0 ">
          <p
            id="headerName"
            className="text-white pt-2 px-2 pb-2 text-2xl hover:motion-reduce:animate-pulse "
          >
            Dennis YAU
            <br />
            {/* <span className="text-sm">
              The Simpliest Way to Demostrate my Web Development Experience and
              Skills
            </span> */}
          </p>
          <Nav />
        </header>
      </div>
    </>
  );
}

export default Header;
