import "./style.scss";

type TypographyProps = {
    text: string,
    className?: string,
    href: string,
    newTab?: boolean
}

const Button = ({text, className, href, newTab}: TypographyProps) => {
  return (
    <a
      className={`btn ${className ?? "btn-primary"}`}
      href={href}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
    >
      {text}
    </a>
  );
}

export default Button;
