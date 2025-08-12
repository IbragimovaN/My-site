import styles from "./SectionTitle.module.css";

interface SectionTitleProps {
  title: string;
  className?: string;
}

export const SectionTitle = ({ title, className }: SectionTitleProps) => {
  return (
    <div className={`${styles.wrapper} ${className || ""}`}>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
};
