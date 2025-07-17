import { SECTIONS_DATA } from "../../../../constants";
import { PORTFOLIO_DATA } from "../../../../constants/portfolio-data";
import { SectionTitle } from "../../../ui";
import type { SectionProp } from "../types";
import { PortfolioCard } from "./portfolioCard/PortfolioCard";
import styles from "./PortfolioSection.module.css";

export const PortfolioSection = ({ id }: SectionProp) => {
  return (
    <section id={id} className={`sectionsWrapper ${styles.wrapper}`}>
      {" "}
      <SectionTitle title={SECTIONS_DATA.portfolio.sectionTitle} />
      <div className={styles.container}>
        {" "}
        {PORTFOLIO_DATA.reverse().map((item) => (
          <PortfolioCard key={item.id} dataCard={item} />
        ))}
      </div>
    </section>
  );
};
