import { SECTIONS_DATA, TAB_SKILLS } from "../../../../constants";
import { Tabs, SectionTitle } from "../../../ui";

interface SkillsSectionProp {
  id: string;
}

export const SkillsSection = ({ id }: SkillsSectionProp) => {
  return (
    <section id={id}>
      <SectionTitle title={SECTIONS_DATA.skills.sectionTitle} />
      <Tabs types={TAB_SKILLS} />
    </section>
  );
};
