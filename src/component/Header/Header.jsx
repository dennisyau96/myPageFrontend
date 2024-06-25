import styles from "./Header.module.css";
import Nav from "../Nav/Nav";

function Header() {
  return (
    <>
      <div id="headerDiv" className={styles.headerDiv}>
        <header id="header" className={styles.header}>
          <p id="headerName" className={styles.headerName}>
            Dennis Yau
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
