import { FC, PropsWithChildren } from "react";
import styles from "./style.module.css";
import { PrismicRichText } from "@prismicio/react";
import { RichTextField } from "@prismicio/client";
import classNames from "classnames";

interface SectionProps extends PropsWithChildren {
  title: RichTextField;
  description: RichTextField;
  className?: string;
}

const Section: FC<SectionProps> = ({
  children,
  title,
  description,
  className,
}) => {
  return (
    <section className={classNames(styles.root, className)}>
      <div>
        <PrismicRichText field={title} />
        <PrismicRichText field={description} />
      </div>
      {children}
    </section>
  );
};

export default Section;
