import { NavLink, Outlet } from "react-router-dom";
import styles from "./Nav.module.css";
function Nav() {
  return (
    <>
      <nav className={styles.navBar}>
        <NavLink className={styles.navLink} to="/">
          Home
        </NavLink>
        <NavLink className={styles.navLink} to="/education">
          Education
        </NavLink>
        <NavLink className={styles.navLink} to="/experience">
          Experience
        </NavLink>
        <NavLink className={styles.navLink} to="/gallery">
          Gallery
        </NavLink>
        <NavLink className={styles.navLink} to="/projects">
          Projects
        </NavLink>
        <NavLink className={styles.navLink} to="/skills">
          Skills
        </NavLink>
        <NavLink className={styles.navLink} to="/certificates">
          Certificate
        </NavLink>
        <NavLink className={styles.navLink} to="/about">
          About
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default Nav;
