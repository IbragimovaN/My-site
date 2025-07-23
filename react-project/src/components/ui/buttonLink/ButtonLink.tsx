import styles from "./ButtonLink.module.css";

interface ButtonLinkProps {
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  href: string;
}
export const ButtonLink = ({ children, href, className }: ButtonLinkProps) => {
  return (
    <a href={href} className={`${styles.buttonLink} ${className}`}>
      {children}
    </a>
  );
};
