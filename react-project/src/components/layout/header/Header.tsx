import { NavLink } from "react-router";
import styles from "./Header.module.css";
import { ThemeToggle } from "../../ui";

export const isActiveLink = ({ isActive }) =>
  isActive ? styles.activeLink : styles.link;

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navBar}>
        <NavLink to="/" className={isActiveLink}>
          about
        </NavLink>
        <NavLink to="/skills" className={isActiveLink}>
          skills
        </NavLink>
        <NavLink to="/experience" className={isActiveLink}>
          experience
        </NavLink>
        <NavLink to="/portfolio" className={isActiveLink}>
          portfolio
        </NavLink>
        <NavLink to="/contacts" className={isActiveLink}>
          contacts
        </NavLink>
      </nav>
      <ThemeToggle />
    </header>
  );
};
