import { FC } from "react";
import styles from "./style.module.css";
import { LinkField } from "@prismicio/client";
import { PrismicLink } from "@prismicio/react";
import classNames from "classnames";

interface ButtonProps extends React.HTMLAttributes<HTMLAnchorElement> {
  link: LinkField;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
}

const Button: FC<ButtonProps> = ({
  link,
  variant = "primary",
  size = "medium",
}) => {
  const className = classNames(styles.root, styles[variant], styles[size]);
  return <PrismicLink tabIndex={0} className={className} field={link} />;
};

export default Button;
