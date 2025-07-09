import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export const Button = ({
  children,
  className = "",
  ariaLabel = "кнопка",
  onClick,
  disabled = false,
  type = "button",
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${className}`}
      aria-label={ariaLabel}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
