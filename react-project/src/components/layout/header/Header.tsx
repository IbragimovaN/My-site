import styles from "./Header.module.css";
import { ThemeToggle } from "../../ui";
import { useActiveSection } from "../../../hooks/useActiveSection";

export const Header = () => {
  const activeSection = useActiveSection();
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navBar}>
          <li
            className={activeSection === "about" ? styles.active : styles.link}
          >
            <a href="#about">Обо мне</a>
          </li>
          <li
            className={activeSection === "skills" ? styles.active : styles.link}
          >
            <a href="#skills">Навыки</a>
          </li>
          <li
            className={
              activeSection === "experience" ? styles.active : styles.link
            }
          >
            <a href="#experience">Опыт</a>
          </li>
          <li
            className={
              activeSection === "portfolio" ? styles.active : styles.link
            }
          >
            <a href="#portfolio">Портфолио</a>
          </li>
          <li
            className={
              activeSection === "contacts" ? styles.active : styles.link
            }
          >
            <a href="#contacts">Контакты</a>
          </li>
        </ul>
      </nav>
      <ThemeToggle />
    </header>
  );
};
