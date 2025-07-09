import { SECTIONS_DATA } from "../../../../constants";
import { SectionTitle } from "../../../ui";
import type { SectionProp } from "../types";
import styles from "./PortfolioSection.module.css";

export const PortfolioSection = ({ id }: SectionProp) => {
  return (
    <section id={id} className={`sectionsWrapper ${styles.wrapper}`}>
      {" "}
      <SectionTitle title={SECTIONS_DATA.portfolio.sectionTitle} />
    </section>
  );
};
