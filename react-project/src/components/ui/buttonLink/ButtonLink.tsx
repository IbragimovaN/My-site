import styles from "./ButtonLink.module.css";

interface ButtonLinkProps {
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  href: string;
  target?: string;
}
export const ButtonLink = ({
  children,
  href,
  className,
  target,
}: ButtonLinkProps) => {
  return (
    <a
      href={href}
      className={`${styles.buttonLink} ${className} `}
      target={target ? target : "_self"}
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};
