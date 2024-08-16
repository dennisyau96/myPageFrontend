import styles from "./Header.module.css";
import Nav from "../Nav/Nav";

function Header() {
  return (
    <>
      <div
        id="headerDiv"
        className=" sticky-top navbar inset-x-0 top-0  shadow-lg  z-10000 theme1 h-auto  flex "
      >
        <header id="header" className="inline-block m-0 ">
          <p
            id="headerName"
            className="text-white pt-4 px-4 pb-4 text-2xl hover:motion-reduce:animate-pulse"
          >
            Dennis, Ming Leuk YAU
            <br />
            <span className="text-sm">
              The Simpliest Way to Demostrate my Web Development Experience and
              Skills
            </span>
          </p>
          <hr></hr>
          <Nav />
        </header>
      </div>
    </>
  );
}

export default Header;
