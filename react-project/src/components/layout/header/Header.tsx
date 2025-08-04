import styles from "./Header.module.css";
import { ThemeToggle } from "../../ui";
import { useActiveSection } from "../../../hooks/useActiveSection";
import { NAV_ITEMS } from "../../../constants/sections-data";
import { useState } from "react";
import { HamburgerButton } from "./hamburgerButton/HamburgerButton";

export const Header = () => {
  const activeSection = useActiveSection();
  const [burgerMenuOpen, setBurgerMenuOpen] = useState<boolean>(false);

  return (
    <header className={styles.header}>
      <nav>
        <HamburgerButton
          isOpen={burgerMenuOpen}
          setIsOpen={setBurgerMenuOpen}
        />
        <ul className={`${styles.navBar} ${burgerMenuOpen ? styles.open : ""}`}>
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
