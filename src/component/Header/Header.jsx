import styles from "./Header.module.css";
import Nav from "../Nav/Nav";

function Header() {
  return (
    <>
      <div
        id="headerDiv"
        className=" sticky-top navbar inset-x-0 top-0  shadow-lg bg-image z-10000 theme1 "
      >
        <header id="header" className="inline-block m-0">
          <p
            id="headerName"
            className="text-white p-4 text-2xl hover:motion-reduce:animate-pulse"
          >
            Dennis, Ming Leuk YAU
          </p>

          <p
            id="headerDescription"
            className="text-white px-4 pt-3 pb-5 text-md hover:motion-reduce:animate-pulse"
          >
            The Simpliest Way to Demostrate my Web Development Experience and
            Skills
          </p>
          <Nav />
        </header>
      </div>
    </>
  );
}

export default Header;
