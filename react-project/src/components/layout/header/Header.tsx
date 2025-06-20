import styles from "./Header.module.css";
import { ThemeToggle } from "../../ui";
import { useActiveSection } from "../../../hooks/useActiveSection";
import { NAV_ITEMS } from "../../../constants/sections-data";

export const Header = () => {
  const activeSection = useActiveSection();

  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navBar}>
          {NAV_ITEMS.map(([id, { navTitle }]) => (
            <li
              key={id}
              className={activeSection === id ? styles.active : styles.link}
            >
              <a href={`#${id}`}>{navTitle}</a>
            </li>
          ))}
        </ul>
      </nav>
      <ThemeToggle />
    </header>
  );
};
