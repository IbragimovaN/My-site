import { Button } from "../../../../ui";
import styles from "./FeedbeckForm.module.css";

export const FeedbackForm = () => {
  return (
    <form className={styles.form}>
      <h3 className={styles.formTitle}>Обратная связь</h3>
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.formLabel}>
          Имя
        </label>
        <input
          type="text"
          id="name"
          className={styles.formInput}
          placeholder="Ваше имя"
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.formLabel}>
          Email
        </label>
        <input
          type="email"
          id="email"
          className={styles.formInput}
          placeholder="your@email.com"
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message" className={styles.formLabel}>
          Сообщение
        </label>
        <textarea
          id="message"
          className={styles.formTextarea}
          placeholder="Ваше сообщение..."
          rows={5}
          required
        ></textarea>
      </div>
      <Button
        type="submit"
        className={styles.submitButton}
        ariaLabel="Отправить сообщение"
      >
        Отправить
      </Button>
    </form>
  );
};
