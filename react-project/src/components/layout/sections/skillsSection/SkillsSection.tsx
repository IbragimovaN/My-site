import { SECTIONS_DATA, TAB_SKILLS } from "../../../../constants";
import { Tabs, SectionTitle } from "../../../ui";
import type { SectionProp } from "../types";

export const SkillsSection = ({ id }: SectionProp) => {
  return (
    <section className="sectionsWrapper" id={id}>
      <SectionTitle title={SECTIONS_DATA.skills.sectionTitle} />
      <Tabs types={TAB_SKILLS} />
    </section>
  );
};
