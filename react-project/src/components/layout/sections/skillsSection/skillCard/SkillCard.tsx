import styles from "./SkillCard.module.css";
import type { ReactElement } from "react";

export interface SkillCardProps {
  name: string;
  icon: ReactElement;
}
export const SkillCard = ({ name, icon }: SkillCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconContainer}>
        <div className={styles.svgIcon}>{icon}</div>
      </div>
      <h4 className={styles.name}>{name}</h4>
    </div>
  );
};
