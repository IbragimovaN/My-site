import { Outlet } from "react-router";
import styles from "./HomePage.module.css";
import { Header } from "../../components";
import { ThemeProviderComponent } from "../../context/ThemeContext";
export const HomePage = () => {
  return (
    <ThemeProviderComponent>
      <div className={styles.app}>
        <Header />
        <Outlet />
        <footer>footer</footer>
      </div>
    </ThemeProviderComponent>
  );
};
