import styles from "./AboutSection.module.css";
import photo from "../../../../assets/images/photo_5231385813273671112_y.jpg";
import { Button } from "../../..";
import type { SectionProp } from "../types";

export const AboutSection = ({ id }: SectionProp) => {
  const handleContactClick = () => {
    const contactsSection = document.getElementById("contacts");
    if (contactsSection) {
      contactsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <section id={id} className={`${styles.wrapper} sectionsWrapper`}>
      <div className={styles.aboutInfo}>
        <h3 className={styles.subTitle}>Frontend developer</h3>
        <h1 className={styles.title}>Привет, я Анастасия</h1>
        <p className={styles.description}>
          Я — увлечённый frontend-разработчик с сильной мотивацией и страстью к
          созданию удобных, современных веб-приложений. Последние 2,5 года я
          активно осваиваю JavaScript, React и экосистему фронтенда, применяя
          знания на практике в учебных и пет-проектах.
        </p>
        <Button className={styles.button} onClick={handleContactClick}>
          Связаться со мной
        </Button>
      </div>
      <div className={styles.photoBox}>
        {" "}
        <div className={styles.photoWrapper}>
          <img className={styles.photo} src={photo} alt="photo" />
        </div>
      </div>
    </section>
  );
};
