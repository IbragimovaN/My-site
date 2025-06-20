interface SkillCardsContainerProps {
  skills: SkillCardProps[];
}
import { SkillCard, type SkillCardProps } from "../skillCard/SkillCard";
import styles from "./SkillsCardContainer.module.css";
export const SkillCardsContainer = ({ skills }: SkillCardsContainerProps) => {
  return (
    <div className={styles.container}>
      {skills.map((skill, index) => (
        <SkillCard key={index} name={skill.name} icon={skill.icon} />
      ))}
    </div>
  );
};
