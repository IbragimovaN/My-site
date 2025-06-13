import styles from "./App.module.css";
import { AboutSection, Header, SkillsSection } from "./components";
import { ThemeProviderComponent } from "./context/ThemeContext";
export const App = () => {
  return (
    <ThemeProviderComponent>
      <main className={styles.app}>
        <Header />
        <AboutSection id="about" />
        <SkillsSection id="skills" />
        {/* <ExperienceSection id="experience" /> */}
        {/* <PortfolioSection id="portfolio" />
        <ContactsSection id="contacts" /> */}
        <footer>footer</footer>
      </main>
    </ThemeProviderComponent>
  );
};

export default App;
