import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import styles from "./style.module.css";
import Accordion from "@/components/Accordion";

export type AccordionsProps = SliceComponentProps<Content.AccordionsSlice>;

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
        <Accordion key={index} summary={summary} details={details} />
      ))}
    </section>
  );
};

export default Accordions;
