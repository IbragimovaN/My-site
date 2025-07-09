import { HARD_SKILLS, SOFT_SKILLS } from "./skills-data";
import { SkillCardsContainer } from "../components/layout/sections/skillsSection/skillsCardsContainer/SkillsCardContainer";

export interface TabSkills {
  label: string;
  content: React.ReactNode;
}
export const TAB_SKILLS: TabSkills[] = [
  {
    label: "hard skills",
    content: <SkillCardsContainer skills={HARD_SKILLS} />,
  },
  {
    label: "soft skills",
    content: <SkillCardsContainer skills={SOFT_SKILLS} />,
  },
];
