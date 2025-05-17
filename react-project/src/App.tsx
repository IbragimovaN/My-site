import { Route, Routes } from "react-router";
import { AboutPage, HomePage, SkillsPage } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route index element={<AboutPage />} />
        <Route path="skills" element={<SkillsPage />} />
        <Route path="experience" element={<div>expirience</div>} />
        <Route path="portfolio" element={<div>portfolio</div>} />
        <Route path="contacts" element={<div>contacts</div>} />
      </Route>
    </Routes>
  );
}

export default App;
