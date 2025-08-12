import type { Dispatch, SetStateAction } from "react";
import styles from "./HamburgerButton.module.scss";

interface HamburgerButtonProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
export const HamburgerButton = ({
  isOpen,
  setIsOpen,
}: HamburgerButtonProps) => {
  const clickHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <button
      className={`${styles.hamburgerButton} ${isOpen ? styles.active : ""}`}
      onClick={clickHandler}
    >
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
    </button>
  );
};
