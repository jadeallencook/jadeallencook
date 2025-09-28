import { FC, HTMLAttributes } from "react";
import styles from "./style.module.css";
import { KeyTextField, RichTextField } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";

interface AccordionProps extends HTMLAttributes<HTMLDetailsElement> {
  summary: KeyTextField;
  details: RichTextField;
}

const Accordion: FC<AccordionProps> = ({ summary, details, ...rest }) => {
  return (
    <details {...rest} className={styles.root}>
      <summary>
        <h3>{summary}</h3>
      </summary>
      <PrismicRichText field={details} />
    </details>
  );
};

export default Accordion;
