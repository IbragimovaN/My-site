import { Tabs } from "../../../ui";
import styles from "./SkillsSection.module.css";

interface SkillsSectionProp {
  id: string;
}
//-------------убрать отсюда потом!
export interface TabType {
  label: string;
  content: React.ReactNode;
}
export const typesTabSkills: TabType[] = [
  { label: "soft skills", content: <div>content soft</div> },
  { label: "hard skills", content: <div>content hard</div> },
];

//------------------------------------------------------------

export const SkillsSection = ({ id }: SkillsSectionProp) => {
  return (
    <section id={id}>
      <Tabs types={typesTabSkills} />
    </section>
  );
};
