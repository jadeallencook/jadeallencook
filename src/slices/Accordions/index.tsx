import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import styles from "./style.module.css";

/**
 * Props for `Accordions`.
 */
export type AccordionsProps = SliceComponentProps<Content.AccordionsSlice>;

/**
 * Component for "Accordions" Slices.
 */
const Accordions: FC<AccordionsProps> = ({
  slice: {
    slice_type,
    variation,
    primary: { title, description, accordions },
  },
}) => {
  return (
    <section
      data-slice-type={slice_type}
      data-slice-variation={variation}
      className={styles.root}
    >
      <PrismicRichText field={title} />
      <PrismicRichText field={description} />
      {accordions.map(({ summary, details }, index) => (
        <details key={index}>
          <summary>
            <h3>{summary}</h3>
          </summary>
          <PrismicRichText field={details} />
        </details>
      ))}
    </section>
  );
};

export default Accordions;
