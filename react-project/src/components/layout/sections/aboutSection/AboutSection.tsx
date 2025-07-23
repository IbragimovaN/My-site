import styles from "./AboutSection.module.css";
import photo from "../../../../assets/images/photo_5231385813273671112_y.jpg";
import { ButtonLink } from "../../..";
import type { SectionProp } from "../types";
import GithubIcon from "../../../../assets/icons/github.svg?react";

export const AboutSection = ({ id }: SectionProp) => {
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
        <div className={styles.buttonsWrapper}>
          <ButtonLink className={styles.button} href="#contacts">
            Связаться со мной
          </ButtonLink>
          <ButtonLink
            className={styles.buttonGithub}
            href="https://github.com/IbragimovaN"
          >
            Мой гитхаб <GithubIcon />
          </ButtonLink>
        </div>
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
