import { NavLink, Outlet } from "react-router";
import styles from "./HomePage.module.css";
export const HomePage = () => {
  return (
    <div className={styles.app}>
      <header>
        <nav className={styles.navBar}>
          <NavLink to="/">about</NavLink>
          <NavLink to="/skills">skills</NavLink>
          <NavLink to="/experience">experience</NavLink>
          <NavLink to="/portfolio">portfolio</NavLink>
          <NavLink to="/contacts">contacts</NavLink>
        </nav>
      </header>
      <Outlet />
      <footer>footer</footer>
    </div>
  );
};
