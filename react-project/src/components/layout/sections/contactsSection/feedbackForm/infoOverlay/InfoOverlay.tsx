import { useEffect, useState } from "react";
import type { ActionState } from "../FeedbackForm";
import styles from "./InfoOverlay.module.css";
interface InfoOverlayProps {
  status: ActionState;
  isPending: boolean;
}
export const InfoOverlay = ({ status, isPending }: InfoOverlayProps) => {
  console.log(status);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (status.success !== null || status.error !== null || isPending) {
      setIsOpen(true);
      const timeout = setTimeout(() => {
        setIsOpen(false);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [status.success, status.error, isPending]);

  if (!isOpen) return null;

  const funcStyles = () => {
    if (isPending) {
      return styles.pending;
    } else if (status.error) {
      return styles.error;
    } else if (status.success) {
      return styles.success;
    }
  };

  return (
    isOpen && (
      <div className={`${styles.overlay} ${funcStyles()}`}>
        {isPending ? (
          <div className={styles.spinner}></div>
        ) : (
          <div className={styles.window}>
            {status.success
              ? "Ваши данные успешно отправлены,ожидайте обратной связи. Спасибо!"
              : "При отправке произошла ошибка, попробуйте, пожалуйста, другой способ связи. Спасибо!"}
          </div>
        )}
      </div>
    )
  );
};
