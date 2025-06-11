import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  onClick: () => void;
  disabled?: boolean;
}

export const Button = ({
  children,
  className = "",
  ariaLabel = "кнопка",
  onClick,
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${className}`} // Правильное объединение классов
      aria-label={ariaLabel}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
