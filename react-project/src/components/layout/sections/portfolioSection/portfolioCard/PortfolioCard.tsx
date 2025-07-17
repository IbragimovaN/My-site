import type { PortfolioDataType } from "../../../../../constants/portfolio-data";
import GithubIcon from "../../../../../assets/icons/github.svg?react";
import styles from "./PortfolioCard.module.css";

interface PortfolioCardProps {
  dataCard: PortfolioDataType;
}

export const PortfolioCard = ({ dataCard }: PortfolioCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={dataCard.image}
          className={styles.screen}
          alt={`Screenshot of ${dataCard.title}`}
        />
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.content}>
        <h5 className={styles.title}>{dataCard.title}</h5>
        <a
          href={dataCard.link}
          className={styles.githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon className={styles.githubIcon} />
          <span>View on GitHub</span>
        </a>
      </div>
    </div>
  );
};
