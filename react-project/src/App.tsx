import styles from "./App.module.css";
import {
  AboutSection,
  Header,
  SkillsSection,
  ExperienceSection,
  PortfolioSection,
  ContactsSection,
  Footer,
} from "./components";
import { ThemeProviderComponent } from "./context/ThemeContext";
export const App = () => {
  return (
    <ThemeProviderComponent>
      <main className={styles.app}>
        <Header />
        <AboutSection id="about" />
        <SkillsSection id="skills" />
        <ExperienceSection id="experience" />
        <PortfolioSection id="portfolio" />
        <ContactsSection id="contacts" />
      </main>
      <Footer />
    </ThemeProviderComponent>
  );
};

export default App;
