import React from "react";
import "./style.scss";

type TypographyProps = {
    text: string,
    className?: string | undefined,
    href: string,
    newTab?: boolean
}

const Button = ({text, className, href, newTab}: TypographyProps) => {
  return (
    <div className={className}>
      <a className="main-button"
      href={href}
      target={newTab ? "_blank" : undefined}
      >
        {text}
      </a>
    </div>
  );
}

export default Button;
