import { Button } from "../../../../ui";
import styles from "./FeedbeckForm.module.css";
import { InfoOverlay } from "./infoOverlay/InfoOverlay";
import { useActionState } from "react";

export interface ActionState {
  success: boolean | null;
  error: Error | null;
}

export const FeedbackForm = () => {
  const [state, submitAction, isPending] = useActionState<
    ActionState,
    FormData
  >(handleSubmit, {
    success: null,
    error: null,
  });

  async function handleSubmit(
    prevState: ActionState,
    formData: FormData
  ): Promise<ActionState> {
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    console.log(name, email, message);
    try {
      const res = await fetch("http://localhost:3002/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

      return { success: true, error: null };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error : new Error("Unknown error"),
      };
    }
  }
  return (
    <form className={styles.form} action={submitAction}>
      <h3 className={styles.formTitle}>Обратная связь</h3>
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.formLabel}>
          Имя
        </label>
        <input
          type="text"
          id="name"
          name="name"
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
          name="email"
          className={styles.formInput}
          placeholder="Ваш email"
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message" className={styles.formLabel}>
          Сообщение
        </label>
        <textarea
          id="message"
          name="message"
          className={styles.formTextarea}
          placeholder="Ваше сообщение..."
          rows={5}
          required
        ></textarea>
      </div>
      <Button
        type="submit"
        className={styles.submitButton}
        disabled={isPending}
        ariaLabel="Отправить сообщение"
      >
        Отправить
      </Button>
      {isPending || state.success || state.error ? (
        <InfoOverlay status={state} isPending={isPending} />
      ) : (
        ""
      )}
    </form>
  );
};
