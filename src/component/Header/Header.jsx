import styles from "./Header.module.css";
import Nav from "../Nav/Nav";

function Header() {
  return (
    <>
      <div
        id="headerDiv"
        className="sticky-top navbar inset-x-0 top-0 bg-black shadow-lg bg-image z-10000 "
      >
        <header id="header" className="inline-block m-0">
          <p id="headerName" className="text-white p-4 text-2xl">
            Dennis, Ming Leuk Yau
          </p>

          <p id="headerDescription" className={styles.headerDescription}>
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
